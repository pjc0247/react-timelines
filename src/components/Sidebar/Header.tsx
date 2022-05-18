import React from 'react';

import { ITimebar } from '../../models';

interface HeaderProps {
  sticky?: {
    isSticky?: boolean;
    sidebarWidth?: number;
    headerHeight?: number;
  };
  timebar: ITimebar[];
}
const Header = ({ timebar, sticky: { isSticky, sidebarWidth, headerHeight } = {} }: HeaderProps) => (
  <div style={isSticky ? { paddingTop: headerHeight } : {}}>
    <div
      className={`rt-sidebar__header ${isSticky ? 'rt-is-sticky' : ''}`}
      style={isSticky ? { width: sidebarWidth } : {}}
    >
      {timebar.map(({ id, title }) => (
        <div key={id} className="rt-timebar-key">
          {title}
        </div>
      ))}
    </div>
  </div>
);

export default Header;
