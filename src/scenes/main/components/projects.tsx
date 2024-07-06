import FancyCard from "@/components/fancy-card";
import Ingot1 from "@/assets/ingot-1.png";
import Ingot2 from "@/assets/ingot-2.png";

const ingotImages = [Ingot1, Ingot2];

function Projects() {
  return (
    <div className="flex flex-col w-full">
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
