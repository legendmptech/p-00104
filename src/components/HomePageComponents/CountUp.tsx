"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CountUp = ({
  targetValue,
  label,
}: {
  targetValue: number;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds animation
      const increment = targetValue / (duration / 50);

      const counter = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
    }
  }, [inView, targetValue]);

  return (
    <div
      ref={ref}
      className="text-center text-black bg-gray-200 border-gray border-2 p-2 rounded-md"
    >
      <p className="text-4xl">{label + " " + count + "+"}</p>
    </div>
  );
};

export default CountUp;
