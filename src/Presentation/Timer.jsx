import React, { useState, useEffect } from "react";


function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [timeLeft]);

  const updateCountdown = () => {
    const totalSeconds =
      timeLeft.days * 24 * 60 * 60 +
      timeLeft.hours * 60 * 60 +
      timeLeft.minutes * 60 +
      timeLeft.seconds;

    if (totalSeconds > 0) {
      const updatedTime = {
        days: Math.floor((totalSeconds - 1) / (24 * 60 * 60)),
        hours: Math.floor(((totalSeconds - 1) % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor(((totalSeconds - 1) % (60 * 60)) / 60),
        seconds: (totalSeconds - 1) % 60,
      };
      setTimeLeft(updatedTime);
    }
  };

  return (
    <div className="flex ">
      {Object.keys(timeLeft).map((unit, index) => (
               
        <div className="flex items-center" key={unit}>
        
          <div className="text-5xl font-bold">{String(timeLeft[unit]).padStart(2, "0")}</div>
     
          {index < 3 && <div className="mx-2 text-5xl text-red-600">:</div>}
        </div>
      ))}
    </div>
  );
}



export default Timer;
