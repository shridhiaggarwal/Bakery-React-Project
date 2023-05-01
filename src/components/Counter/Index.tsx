import React from "react";
import CountUp, { CountUpProps } from "react-countup";

function Counter(props: CountUpProps) {
  const {
    className,
    start,
    end,
    delay = null,
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
    />
    //   {({ countUpRef }) => (
    //     <div>
    //       <span ref={countUpRef} className={className} />
    //     </div>
    //   )}
    // </CountUp>
  );
}

export default Counter;
