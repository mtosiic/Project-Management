import logo from "../assets/logo.png";
import Button from "./Button";

export default function NoProjectPage({ onStartAddProject }) {
  return (
    <div className="mt-8 text-center w-2/3">
      <img
        src={logo}
        alt="Empty task list"
        className="w-32 h-32 mx-auto mb-4"
      />
      <h2 className="text-stone-600 text-xl font-bold mb-4">
        No project selected.
      </h2>
      <p className="text-stone-500 text-md mb-4">
        Please select a project or create a new one
      </p>
      <Button onClick={onStartAddProject}>Create a new project</Button>
    </div>
  );
}
