const numOfStars = 50;

function randomRange(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export default function StarBackground() {
  const stars = Array.from({ length: numOfStars }, (_, i) => <Star key={i} />);

  return (
    <div className="absolute flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#0d1d31] to-[#0c0d13] z-[-1]">
      <div
        className={`fixed top-0 left-0 w-full h-[120%] transform rotate-[-45deg]`}
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
      className={`absolute top-0 left-0 w-[${starTailLength}] h-[var(--star-tail-height)] bg-gradient-to-r from-current to-transparent rounded-full filter drop-shadow-[0 0 6px currentColor] transform translate-x-[104em] animate-[var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite]`}
    >
      <div></div>
      <div></div>
    </div>
  );
}
