import React from "react";
import CountUp, { CountUpProps } from "react-countup";

function Counter(props: CountUpProps) {
  const { className, start, end, duration = 2, prefix = "" } = props;

  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      prefix={prefix}
      className={className}
    />
  );
}

export default Counter;

//   {({ countUpRef }) => (
//     <div>
//       <span ref={countUpRef} className={className} />
//     </div>
//   )}
// </CountUp>
