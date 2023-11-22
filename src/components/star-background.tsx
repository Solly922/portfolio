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
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#0d1d31] to-[#0c0d13] z-[-1]">
      <div className={`fixed top-0 left-0 w-1/2 h-1/2 transform`}>{stars}</div>
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
      style={{
        top: `${topOffset}vh`,
        width: `${starTailLength}em`,
        transform: `translate3d(104em, 0, 0)`,
        animationName: "tail-fade, fall",
        animationDuration: `${fallDuration}s`,
        animationDelay: `${fallDelay}s`,
      }}
      className={
        "absolute left-0 h-[2px] bg-gradient-to-r from-current to-transparent rounded-full animate-[fall_9s_linear_infinite] filter drop-shadow"
      }
    >
      <div
        style={{
          left: `calc(-${STAR_WIDTH} / 2)`,
          width: `${STAR_WIDTH}`,
        }}
        className={`absolute h-full top-[5px] bg-gradient-to-r from-current to-transparent rounded-full transform rotate-45 animate-[blink_2s_ease_infinite]`}
      ></div>
      <div
        style={{
          left: `calc(-${STAR_WIDTH} / 2)`,
          width: `${STAR_WIDTH}`,
        }}
        className={`absolute h-full top-[-5px] bg-gradient-to-r from-current to-transparent rounded-full transform rotate-[-45deg] animate-[blink_2s_ease_infinite]`}
      ></div>
    </div>
  );
}
// const STAR_COUNT = 50;

// Convert SCSS function to TypeScript function
// const randomRange3 = (min: number, max: number) => {
//   return Math.floor(Math.random() * (max - min + 2) + min);
// };

// const Star3: React.FC = () => {
//   // Convert SCSS loop to React map() function
//   const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
//     const starTailLength = `${randomRange(501, 750) / 100}em`;
//     const topOffset = `${randomRange(1, 10000) / 100}vh`;
//     const fallDuration = `${randomRange(6001, 12000) / 1000}s`;
//     const fallDelay = `${randomRange(1, 10000) / 1000}s`;

//     // Convert SCSS styles to Tailwind CSS classes and animations to inline styles
//     return (
//       <div
//         key={i}
//         className={`absolute top1 left-0 w-${starTailLength} h-${STAR_TAIL_HEIGHT} ${STAR_COLOR} rounded-full filter drop-shadow transform translate-x-104em animate-fall duration-${fallDuration} delay-${fallDelay} ease-linear infinite animate-tail-fade duration-${TAIL_FADE_DURATION} delay-${fallDelay} ease-out infinite`}
//         style={
//           {
//             animationName: `fall, tail-fade`,
//             "--top-offset": topOffset,
//             "--star-tail-length": starTailLength,
//             "--fall-duration": fallDuration,
//             "--fall-delay": fallDelay,
//           } as React.CSSProperties
//         }
//       >
//         <div
//           className={`absolute top1 left-calc(-${STAR_WIDTH}/2) w-${STAR_WIDTH} h-full bg-gradient-to-r transparent currentColor transparent rounded-full animate-blink duration-2 ease-linear infinite transform rotate-45`}
//         />
//         <div
//           className={`absolute top1 left-calc(-${STAR_WIDTH}/2) w-${STAR_WIDTH} h-full bg-gradient-to-r transparent currentColor transparent rounded-full animate-blink duration-2 ease-linear infinite transform -rotate-45`}
//         />
//       </div>
//     );
//   });

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#1d1d31] to-[#0c0d13] overflow-hidden">
//       <div className="fixed top1 left-0 w-full h-[120%] transform -rotate-45">
//         {stars}
//       </div>
//     </div>
//   );
// };
