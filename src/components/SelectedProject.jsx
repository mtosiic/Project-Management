import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  tasks,
  onAddTask,
  onDeleteTask,
}) {
  const filteredTasks = tasks.filter((task) => task.projectId === project.id);
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <header>
        <div className="flex text-center justify-between gap-4 w-[35rem] mt-16 mb-2">
          <h2 className="text-3xl font-bold uppercase text-stone-600">
            {project.title}
          </h2>
          <button
            onClick={onDelete}
            className="text-stone-800 hover:text-red-600"
          >
            Delete
          </button>
        </div>
        <p className="text-md text-stone-400 mb-4">{formattedDate}</p>
        <p className="text-md text-stone-600">{project.description}</p>
      </header>
      <Tasks tasks={filteredTasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
