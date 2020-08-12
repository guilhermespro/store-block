import React from "react";
import React, { useState } from 'react';
import { TimeSplit } from './typings/global';
import { tick } from './utils/time';

interface CountdownProps {
  targetDate: string;
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate,
}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  }
  tick(targetDate, setTime)
  return (
    <div>
     <h1>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>
    </div>
  );
};
const DEFAULT_TARGET_DATE = (new Date('2020-06-25')).toISOString()

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {
    targetDate: {
      title: "Data final",
      description: "Data final utilizada no contador",
      type: "string",
      default: null,
    },
  },
};

export default Countdown;
