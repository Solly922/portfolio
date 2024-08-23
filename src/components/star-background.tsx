import { cn } from "@/lib/utils";
import { useMemo } from "react";

let numOfStars = 50;

function randomRange(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function checkPerformance() {
  const start = performance.now();

  for (let i = 0; i < 1000000; i++) {
    // do nothing
  }

  const duration = performance.now() - start;

  if (duration < 2) {
    return "high"; // high performance
  } else if (duration < 5) {
    return "medium"; // medium performance
  } else {
    return "low"; // low performance
  }
}

export default function StarBackground() {
  const perf = useMemo(() => checkPerformance(), []);
  if (perf === "high") {
    numOfStars = 50;
  } else if (perf === "medium") {
    numOfStars = 25;
  } else {
    numOfStars = 10;
  }
  const stars = Array.from({ length: numOfStars }, (_, i) => (
    <Star
      performance={perf}
      key={i}
    />
  ));

  return (
    <div className="absolute flex transform rotate-[-45deg] items-center justify-center min-h-screen w-full z-[-1]">
      <div className="fixed top-0 left-0 w-full h-full transform">{stars}</div>
    </div>
  );
}

function Star({
  performance,
}: {
  performance: ReturnType<typeof checkPerformance>;
}) {
  const starTailLength = randomRange(500, 750) / 100;
  const topOffset = randomRange(0, 10000) / 100;
  const fallDuration = randomRange(6000, 12000) / 1000;
  const fallDelay = randomRange(0, 10000) / 1000;
  const starWidth = starTailLength / 6;

  return (
    <div
      style={{
        top: `${topOffset}vh`,
        width: `${starTailLength}em`,
        transform: `translate3d(125em, 0, 0)`,
        animationName: "tail-fade, fall",
        animationDuration: `${fallDuration}s`,
        animationDelay: `${fallDelay}s`,
        filter: "drop-shadow(0 0 6px currentColor)",
        background: "linear-gradient(45deg, currentColor, transparent)",
      }}
      className={
        "absolute text-[#4ec0e9] left-0 h-[2px] rounded-full animate-[fall_9s_linear_infinite]"
      }
    >
      <div
        style={{
          left: `calc(-${starWidth}em / 2)`,
          width: `${starWidth}em`,
          background:
            "linear-gradient(45deg, transparent, currentColor, transparent )",
        }}
        className={cn(
          "absolute h-full top-0 rounded-full transform rotate-[45deg] ",
          performance === "high" ? "animate-[blink_2s_ease_infinite]" : ""
        )}
      ></div>
      <div
        style={{
          left: `calc(-${starWidth}em / 2)`,
          width: `${starWidth}em`,
          background:
            "linear-gradient(45deg, transparent, currentColor, transparent )",
        }}
        className={`absolute h-full top-0 rounded-full transform rotate-[-45deg] animate-[blink_2s_ease_infinite]`}
      ></div>
    </div>
  );
}
