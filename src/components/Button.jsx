export default function Button({ onAddProject, children, ...props }) {
  return (
    <button
      className="bg-emerald-600 rounded-md px-4 py-2 text-stone-300 hover:bg-emerald-700 mb-4"
      {...props}
    >
      {children}
    </button>
  );
}
