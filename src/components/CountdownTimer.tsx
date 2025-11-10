import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 6,
    hours: 24,
    minutes: 12,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className="backdrop-blur-[6px] bg-white/50 border border-black/8 shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 lg:space-y-8">
      {/* Title */}
      <div className="space-y-3 lg:space-y-4">
        <h3 className="text-lg sm:text-xl text-black font-medium">Presale Countdown</h3>
        <p className="text-sm sm:text-base text-[#010d3e] leading-relaxed">
          The ProConnect (PCT) Token presale officially launches soon. Join early to secure your spot in the world's first crypto-powered work ecosystem.
        </p>
      </div>

      {/* Timer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="relative w-full aspect-[98/131]">
              {/* Number display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl sm:text-4xl lg:text-[64px] text-white font-normal drop-shadow-lg" style={{ textShadow: 'rgba(0,0,0,0.25) 0px 2.673px 2.673px' }}>
                  {unit.value.toString().padStart(2, '0')}
                </div>
              </div>
              
              {/* Background boxes */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-[8%_0%_46%] bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-[10px] border border-black/10 shadow-inner" />
                <div className="absolute inset-[54%_0%_0%] bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-[10px] border border-black/10 shadow-inner" />
                <div className="absolute inset-[54%_0%_0%] bg-black/34 rounded-b-[10px] border-t border-white/24" />
                <div className="absolute inset-x-0 top-[54%] h-px bg-black" />
              </div>
            </div>
            
            <p className="text-base sm:text-lg lg:text-[20px] text-[#010d3e] font-semibold text-center">
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
