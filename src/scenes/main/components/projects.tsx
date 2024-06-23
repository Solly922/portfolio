import FancyCard from "@/components/fancy-card";

function Projects() {
  return (
    <div className="flex flex-col w-full">
      <FancyCard
        header="INGOT"
        description="Lunasonde (source code unavailable)"
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
