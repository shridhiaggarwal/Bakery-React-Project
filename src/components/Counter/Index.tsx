import React from "react";
import CountUp, { CountUpProps } from 'react-countup';

function Counter(props: CountUpProps) {
  const { className, start, end, delay, duration, prefix, suffix, separator } =
    props;

  return (
    <CountUp
      start={start}
      end={end}
      delay={delay}
      duration={duration}
      separator={separator}
      prefix={prefix}
      suffix={suffix}
    >
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} className={className}/>
        </div>
      )}
    </CountUp>
  );
}

export default Counter;
