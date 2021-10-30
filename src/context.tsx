import React, { useContext } from 'react';

const TimelineContext = React.createContext({});

interface ITimelineContext {
  formatTime?: (date: Date) => string;
};

interface TimelineContextProviderProps extends ITimelineContext {
  children: React.ReactNode;
};
export const TimelineContextProvider = ({
  formatTime,
  children,
}: TimelineContextProviderProps) => {
  return (
    <TimelineContext.Provider
      value={{
        formatTime,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimelineContext = (): ITimelineContext => {
  return useContext(TimelineContext);
};
