const numOfStars = 50;
const STAR_COLOR = "text-primary";
const STAR_TAIL_LENGTH = "6em";
const STAR_TAIL_HEIGHT = "2px";
const STAR_WIDTH = `calc(${STAR_TAIL_LENGTH} / 6)`;
const FALL_DURATION = "9s";
const TAIL_FADE_DURATION = FALL_DURATION;

function randomRange(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export default function StarBackground() {
  const stars = Array.from({ length: numOfStars }, (_, i) => <Star key={i} />);

  return (
    <div className=" flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#0d1d31] to-[#0c0d13] z-[-1]">
      <div
        className={`fixed top-0 left-0 w-full h-[50%] transform rotate-[-45deg]`}
      >
        {stars}
      </div>
    </div>
  );
}

interface StarProps {
  color: string;
  topOffset: string;
  tailLength: string;
  tailHeight: string;
  width: string;
  fallDuration: string;
  fadeDuration: string;
}
function Star() {
  const starTailLength = randomRange(500, 750) / 100;
  const topOffset = randomRange(0, 10000) / 100;
  const fallDuration = randomRange(6000, 12000) / 1000;
  const fallDelay = randomRange(0, 10000) / 1000;

  return (
    <div
      className={`absolute top-[${topOffset}vh] left-0 w-${starTailLength}em h-10 bg-gradient-to-r from-current to-transparent rounded-full filter drop-shadow-[0 0 6px currentColor] transform translate-x-104em animate-fall delay-[${fallDelay}s] ease-linear repeat-infinite animate-tail-fade duration-[${fallDuration}s] delay-[${fallDelay}s] ease-out repeat-infinite`}
    >
      hello
      <div
        className={`absolute top-0 left-[calc(${starTailLength}em / -2)] w-${
          starTailLength / 6
        }em h-full bg-gradient-to-r from-transparent to-current to-transparent rounded-full animate-blink linear infinite`}
      />
      <div
        className={`absolute top-0 left-[calc(${starTailLength}em / -2)] w-${
          starTailLength / 6
        }em h-full bg-gradient-to-r from-transparent to-current to-transparent rounded-full animate-blink linear infinite transform rotate-45`}
      />
    </div>
  );
}
const STAR_COUNT = 50;

// Convert SCSS function to TypeScript function
const randomRange2 = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Star2: React.FC = () => {
  // Convert SCSS loop to React map() function
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
    const starTailLength = `${randomRange(500, 750) / 100}em`;
    const topOffset = `${randomRange(0, 10000) / 100}vh`;
    const fallDuration = `${randomRange(6000, 12000) / 1000}s`;
    const fallDelay = `${randomRange(0, 10000) / 1000}s`;

    // Convert SCSS styles to Tailwind CSS classes and animations to inline styles
    return (
      <div
        key={i}
        className={`absolute top-0 left-0 w-${starTailLength} h-${STAR_TAIL_HEIGHT} ${STAR_COLOR} rounded-full filter drop-shadow transform translate-x-104em animate-fall duration-${fallDuration} delay-${fallDelay} ease-linear infinite animate-tail-fade duration-${TAIL_FADE_DURATION} delay-${fallDelay} ease-out infinite`}
        style={
          {
            animationName: `fall, tail-fade`,
            "--top-offset": topOffset,
            "--star-tail-length": starTailLength,
            "--fall-duration": fallDuration,
            "--fall-delay": fallDelay,
          } as React.CSSProperties
        }
      >
        <div
          className={`absolute top-0 left-calc(-${STAR_WIDTH}/2) w-${STAR_WIDTH} h-full bg-gradient-to-r transparent currentColor transparent rounded-full animate-blink duration-2 ease-linear infinite transform rotate-45`}
        />
        <div
          className={`absolute top-0 left-calc(-${STAR_WIDTH}/2) w-${STAR_WIDTH} h-full bg-gradient-to-r transparent currentColor transparent rounded-full animate-blink duration-2 ease-linear infinite transform -rotate-45`}
        />
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0d1d31] to-[#0c0d13] overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-[120%] transform -rotate-45">
        {stars}
      </div>
    </div>
  );
};
