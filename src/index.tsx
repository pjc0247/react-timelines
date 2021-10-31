import React, { Component } from 'react';

import { ITimebar, ITrack } from 'models';
import Controls from './components/Controls';
import Layout from './components/Layout';
import { TimelineContextProvider } from './context';
import createTime from './utils/time';

const UNKNOWN_WIDTH = -1;

interface TimelineProps {
  scale: {
    start: Date;
    end: Date;
    zoom: number;
    zoomMin?: number;
    zoomMax?: number;
    minWidth?: number;
  };
  isOpen?: boolean;
  timebar: ITimebar[];
  tracks: ITrack[];
  now?: Date;
  enableSticky?: boolean;
  scrollToNow?: boolean;
  toggleTrackOpen?: () => void;
  toggleOpen?: () => void;
  zoomIn?: () => void;
  zoomOut?: () => void;
  clickElement?: () => void;
  clickTrackButton?: () => void;
  formatTime?: (date: Date) => string;
};
class Timeline extends Component<TimelineProps, any> {
  constructor(props) {
    super(props)
    const timelineViewportWidth = UNKNOWN_WIDTH
    const sidebarWidth = UNKNOWN_WIDTH
    this.state = {
      time: createTime({ ...props.scale, viewportWidth: timelineViewportWidth }),
      timelineViewportWidth,
      sidebarWidth,
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { scale } = this.props
    const { timelineViewportWidth } = this.state

    if (nextProps.scale !== scale) {
      const time = createTime({
        ...nextProps.scale,
        viewportWidth: timelineViewportWidth,
      })
      this.setState({ time })
    }
  }

  handleLayoutChange = ({ timelineViewportWidth, sidebarWidth }, cb) => {
    const { scale } = this.props
    const time = createTime({
      ...scale,
      viewportWidth: timelineViewportWidth,
    })
    this.setState(
      {
        time,
        timelineViewportWidth,
        sidebarWidth,
      },
      cb
    )
  }

  render() {
    const {
      isOpen = true,
      toggleOpen,
      zoomIn,
      zoomOut,
      scale: { zoom, zoomMin, zoomMax },
      tracks,
      now,
      timebar,
      toggleTrackOpen,
      enableSticky = false,
      scrollToNow,
      formatTime,
    } = this.props

    const { time, timelineViewportWidth, sidebarWidth } = this.state

    const { clickElement, clickTrackButton } = this.props

    return (
      <TimelineContextProvider
        formatTime={formatTime}
      >
        <div className="rt">
          <Controls
            isOpen={isOpen}
            toggleOpen={toggleOpen}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            zoom={zoom}
            zoomMin={zoomMin}
            zoomMax={zoomMax}
          />
          <Layout
            enableSticky={enableSticky}
            now={now}
            tracks={tracks}
            timebar={timebar}
            toggleTrackOpen={toggleTrackOpen}
            scrollToNow={scrollToNow}
            time={time}
            isOpen={isOpen}
            onLayoutChange={this.handleLayoutChange}
            timelineViewportWidth={timelineViewportWidth}
            sidebarWidth={sidebarWidth}
            clickElement={clickElement}
            clickTrackButton={clickTrackButton}
          />
        </div>
      </TimelineContextProvider>
    );
  }
};
export default Timeline;
