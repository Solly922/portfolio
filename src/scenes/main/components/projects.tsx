import FancyCard from "@/components/fancy-card";
import Ingot1 from "@/assets/ingot/ingot-1.png";
import Ingot2 from "@/assets/ingot/ingot-2.png";
import Adiuvo1 from "@/assets/adiuvo/1.png";
import Adiuvo2 from "@/assets/adiuvo/2.png";
import Adiuvo3 from "@/assets/adiuvo/3.png";
import { Separator } from "@/components/ui/separator";

const ingotImages = [Ingot1, Ingot2];
const adiuvoImages = [Adiuvo1, Adiuvo2, Adiuvo3];

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
        float="right"
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
        images={[]}
        float="left"
      >
        <p>
          A new and modern way to track, schedule, and manage drug/alcohol
          tests. This application allows J2Labs to maintain compliance with DOT
          standards and regulations by automating several tasks such as document
          generation and emailing. One of the key features of this application
          is the ability to do large scale 'random selections' for alcohol and
          drug tests.
        </p>
      </FancyCard>

      <FancyCard
        header="Adiuvo Boards"
        description="Adiuvo"
        images={adiuvoImages}
        float="right"
      >
        <p>
          An application for touch screen kiosks that allows users to view and
          interact with a variety of information. There are several different
          types of boards that can be displayed, such as a directory board,
          which would be used in a large building to help people find their way
          around. The application focuses on being user-friendly and performant.
        </p>
      </FancyCard>

      <FancyCard
        header="AD-PROTO"
        description="Adiuvo"
        images={[]}
        float="left"
      >
        <p>
          An advertising platform that allows businesses to utilize ad space on
          their Adiuvo Boards to generate revenue. The system tracks metrics
          such as estimated playtime, number of views, and prime time windows.
        </p>
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
