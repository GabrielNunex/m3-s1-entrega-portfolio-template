
import { projects } from "../../data/projects";
import { ProjectList } from "./projects";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="projects">
        <h1 className="projects_title">My projects</h1>
        <p className="projects_text">
          Projects created at <span className="span_name">Kenzie Academy</span>
        </p>
      </div>
      <div>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};
