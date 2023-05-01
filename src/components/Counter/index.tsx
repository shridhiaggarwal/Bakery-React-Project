import React from "react";
import CountUp, { CountUpProps } from "react-countup";

function Counter(props: CountUpProps) {
  const {
    className,
    start,
    end,
    delay = 0,
    duration = 2,
    prefix = "",
    suffix = "",
  } = props;

  return (
    <CountUp
      start={start}
      end={end}
      delay={delay}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
      className={className}
      enableScrollSpy={true}
      scrollSpyOnce={true}
    />
  );
}

export default Counter;
