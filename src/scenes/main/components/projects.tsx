import FancyCard from "@/components/fancy-card";
import Ingot1 from "@/assets/ingot/ingot-1.png";
import Ingot2 from "@/assets/ingot/ingot-2.png";
import { Separator } from "@/components/ui/separator";

const ingotImages = [Ingot1, Ingot2];

function Projects() {
  return (
    <div
      className="flex flex-col w-full"
      id="projects"
    >
      <div className="py-2">
        <h2 className="text-center text-4xl font-extralight filter drop-shadow-glow">
          PROJECTS
        </h2>
      </div>
      <div className="[mask-image:radial-gradient(250px_at_top,white,transparent)]">
        <Separator className="max-w-4xl mx-auto" />
      </div>

      <FancyCard
        header="INGOT (MVP)"
        description={
          <Description
            link={"https://lunasonde.com"}
            linkText="Lunasonde"
          />
        }
        images={ingotImages}
      >
        <p>
          A GIS application that takes data from Lunsonde's satellite(s) and
          displays it in an interactive and informative way. The maps display a
          representation of subsurface water content and other material
          properties from below the Earth's surface.
        </p>
      </FancyCard>

      <FancyCard
        header="Compliance+"
        description={
          <Description
            link="https://j2labs.com"
            linkText="J2Labs"
          />
        }
        images={ingotImages}
        float="left"
      >
        <p>This is a test</p>
      </FancyCard>
    </div>
  );
}

export default Projects;

function Description({
  link,
  linkText,
  sourceCode,
}: {
  link: string;
  linkText: string;
  sourceCode?: string;
}) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="anchor"
      >
        {linkText}
      </a>{" "}
      <span>{sourceCode ? sourceCode : "(source code unavailable)"}</span>
    </>
  );
}
