import { Button } from "@/components/ui/button";
import Resume from "@/assets/Solomon-Schuster-Resume.pdf";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <div className="flex h-[100vh] justify-center items-center grow flex-col gap-10 animate-fade-in">
      <div className="text-center space-y-2 tracking-wider">
        <h1 className="text-6xl font-extralight filter drop-shadow-glow">
          Solomon Schuster
        </h1>
        <h3 className="text-xl">Software Engineer</h3>
      </div>

      <div>
        <a href={Resume}>
          <Button variant="outline">Resume</Button>
        </a>
      </div>

      <div className="absolute bottom-10">
        <a href="#projects">
          <Button
            variant="ghost"
            className="rounded-full p-1"
          >
            <ArrowDown
              size={48}
              strokeWidth={1}
            />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
