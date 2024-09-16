import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="bg-emerald-900 text-stone-200 w-1/3 md:w-64 rounded-r-xl px-8 py-8">
      <h2 className="uppercase font-bold md:text-xl my-4">Your projects</h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul>
        {projects.map((project) => {
          let cssClasses = "mb-1 text-stone-200 text-md px-2 rounded-md ";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-emerald-600 text-stone-700";
          }
          return (
            <li key={project.id} className={cssClasses}>
              <button onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
