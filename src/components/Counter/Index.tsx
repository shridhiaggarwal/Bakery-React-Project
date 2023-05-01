import React from "react";
import CountUp from "react-countup";

function Counter(props: any) {
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
    >
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} className={className} />
        </div>
      )}
    </CountUp>
  );
}

export default Counter;
