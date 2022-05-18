import React from 'react';

import { ITimebar } from '../../models';
import Header from './Header';
import Body from './Body';

interface SidebarProps {
  timebar: ITimebar[];
  tracks?: any[];
  sticky?: any;
  toggleTrackOpen?: () => void;
  clickTrackButton?: () => void;
}
const Sidebar = ({ timebar, tracks, toggleTrackOpen, sticky, clickTrackButton }: SidebarProps) => (
  <div className="rt-sidebar">
    <Header timebar={timebar} sticky={sticky} />
    <Body tracks={tracks} toggleTrackOpen={toggleTrackOpen} clickTrackButton={clickTrackButton} />
  </div>
);

export default Sidebar;
