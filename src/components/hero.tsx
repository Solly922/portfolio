import { Button } from "@/components/ui/button";
// import Resume from "@/assets/Solomon-Schuster-Resume.pdf";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <div className="flex h-[100vh] justify-center items-center grow flex-col pb-10 gap-10 animate-fade-in">
      <div className="flex gap-10 flex-col items-center justify-center flex-1">
        <div className="text-center space-y-2 tracking-wider">
          <h1 className="text-6xl font-extralight filter drop-shadow-glow">
            Solomon Schuster
          </h1>
          <h3 className="text-xl">Software Developer</h3>
        </div>

        {/* <div> */}
        {/*   <a href={Resume}> */}
        {/*     <Button variant="outline">Resume</Button> */}
        {/*   </a> */}
        {/* </div> */}
      </div>

      <div className="bottom-10 self-end m-auto">
        <a href="#projects">
          <Button
            variant="ghost"
            className="rounded-full h-16 w-16 p-0"
          >
            <ArrowDown
              className="animate-bounce"
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
