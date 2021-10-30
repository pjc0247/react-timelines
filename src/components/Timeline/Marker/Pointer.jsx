import React from 'react';
import PropTypes from 'prop-types';

import { getDayMonth } from '../../../utils/formatDate';
import { useTimelineContext } from '../../../context';
import Marker from '.';

const PointerMarker = ({ time, date, visible, highlighted }) => {
  const {
    formatTime,
  } = useTimelineContext();
  return (
    <Marker
      modifier="pointer"
      x={time.toX(date)}
      visible={visible}
      highlighted={highlighted}
    >
      <div>
        <div>
          <strong>
            {formatTime ? formatTime(date) : getDayMonth(date)}
          </strong>
        </div>
      </div>
    </Marker>
  );
};
PointerMarker.propTypes = {
  time: PropTypes.shape({
    toX: PropTypes.func.isRequired,
  }).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  visible: PropTypes.bool,
  highlighted: PropTypes.bool,
}

export default PointerMarker
