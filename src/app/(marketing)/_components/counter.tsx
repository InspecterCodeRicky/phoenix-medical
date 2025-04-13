import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterText = ({
  start = 0,
  end = 0,
  prefix,
  suffix,
  height = 40,
}: {
  start?: number;
  end?: number;
  prefix?: string;
  suffix?: string;
  height?: number;
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <CountUp
      start={focus ? start : undefined}
      end={end}
      duration={2.75}
      prefix={prefix}
      suffix={suffix}
    >
      {({ countUpRef }) => (
        <VisibilitySensor
          onChange={(isVisible: boolean) => {
            if (isVisible) {
              setFocus(true);
            }
          }}
        >
          <span ref={countUpRef} className="uppercase text-3xl font-thin" />
        </VisibilitySensor>
        // <span ref={countUpRef} className="uppercase text-3xl font-thin" />
      )}
    </CountUp>
  );
};

export default CounterText;
