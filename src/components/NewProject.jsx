import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onCancelAddProject, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-stone-800 text-md font-bold">Invalid input</h2>
        <p className="text-stone-600 text-md">
          Please enter valid data in all fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancelAddProject}
              className="text-stone-800 hover:text-red-600"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-emerald-800 px-4 py-2 rounded-md text-stone-200 hover:bg-emerald-500 hover:text-stone-800"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="title" />
          <Input ref={description} label="description" textarea />
          <Input ref={dueDate} type="date" label="due date" />
        </div>
      </div>
    </>
  );
}
