import FancyCard from "@/components/fancy-card";
import Ingot1 from "@/assets/ingot/ingot-1.png";
import Ingot2 from "@/assets/ingot/ingot-2.png";
import { Separator } from "@/components/ui/separator";

const ingotImages = [Ingot1, Ingot2];

function Projects() {
  return (
    <div className="flex flex-col w-full">
      <div className="py-2">
        <h2 className="text-center text-4xl font-extralight filter drop-shadow-glow">
          PROJECTS
        </h2>
      </div>
      <div className="[mask-image:radial-gradient(250px_at_top,white,transparent)]">
        <Separator className="max-w-4xl mx-auto" />
      </div>

      <FancyCard
        header="INGOT"
        description="Lunasonde (source code unavailable)"
        images={ingotImages}
      >
        <p>
          INGOT is a working proof of concept GIS application that allows
          <a href="https://lunasonde.com/">Lunasonde</a> to display the data
          collected by their satellite(s) in a user-friendly, interactive, and
          informative way.
        </p>
      </FancyCard>
    </div>
  );
}

export default Projects;
