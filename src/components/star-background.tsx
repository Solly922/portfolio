const numOfStars = 50;

function randomRange(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export default function StarBackground() {
  const stars = Array.from({ length: numOfStars }, (_, i) => <Star key={i} />);

  return (
    <div className="flex transform rotate-[-45deg] items-center justify-center min-h-screen w-full z-[-1]">
      <div className="fixed top-0 left-0 w-full h-[120%] transform">
        {stars}
      </div>
    </div>
  );
}

function Star() {
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
        className={`absolute h-full top-0 rounded-full transform rotate-[45deg] animate-[blink_2s_ease_infinite]`}
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
