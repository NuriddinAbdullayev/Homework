const TaskCard = ({
  task,
  onDelete,
  onEdit,
  onStatus,
}) => {
  const priorityColors = {
    HIGH: "bg-red-500",
    MEDIUM: "bg-yellow-500",
    LOW: "bg-green-500",
  };

  return (
    <div className="bg-white shadow p-4 rounded-xl mb-3">
      <h2 className="text-lg font-bold">
        {task.title}
      </h2>

      <p className="text-gray-600 mb-3">
        {task.description}
      </p>

      <span
        className={`text-white px-2 py-1 rounded ${priorityColors[task.priority]}`}
      >
        {task.priority}
      </span>

      {task.dueDate && (
        <p className="mt-2 text-sm">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      <div className="flex gap-2 mt-4 flex-wrap">
        <button
          onClick={() => onEdit(task)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

        <button
          onClick={() => onStatus(task)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Change Status
        </button>
      </div>
    </div>
  );
};

export default TaskCard;