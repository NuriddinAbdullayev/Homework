import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";
import Navbar from "../components/Navbar";
import API from "../api/axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSave = async (data) => {
    try {
      if (selectedTask) {
        await API.put(`/tasks/${selectedTask._id}`, data);
      } else {
        await API.post("/tasks", data);
      }

      fetchTasks();
      setIsOpen(false);
      setSelectedTask(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Delete this task?");

    if (!confirmDelete) return;

    await API.delete(`/tasks/${id}`);

    fetchTasks();
  };

  const handleStatus = async (task) => {
    let newStatus = "TODO";

    if (task.status === "TODO") {
      newStatus = "IN_PROGRESS";
    } else if (task.status === "IN_PROGRESS") {
      newStatus = "DONE";
    }

    await API.patch(`/tasks/${task._id}/status`, {
      status: newStatus,
    });

    fetchTasks();
  };

  const columns = {
    TODO: tasks.filter((task) => task.status === "TODO"),
    IN_PROGRESS: tasks.filter(
      (task) => task.status === "IN_PROGRESS"
    ),
    DONE: tasks.filter((task) => task.status === "DONE"),
  };
  
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Manager</h1>

        <button
          onClick={() => {
            setSelectedTask(null);
            setIsOpen(true);
          }}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-4">
            TODO
          </h2>

          {columns.TODO.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={handleDelete}
              onEdit={(task) => {
                setSelectedTask(task);
                setIsOpen(true);
              }}
              onStatus={handleStatus}
            />
          ))}
        </div>

        <div className="bg-blue-200 p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-4">
            IN_PROGRESS
          </h2>

          {columns.IN_PROGRESS.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={handleDelete}
              onEdit={(task) => {
                setSelectedTask(task);
                setIsOpen(true);
              }}
              onStatus={handleStatus}
            />
          ))}
        </div>

        <div className="bg-green-200 p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-4">
            DONE
          </h2>

          {columns.DONE.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={handleDelete}
              onEdit={(task) => {
                setSelectedTask(task);
                setIsOpen(true);
              }}
              onStatus={handleStatus}
            />
          ))}
        </div>
      </div>

      <TaskModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSave}
        task={selectedTask}
      />
    </div>
  );
};

export default Dashboard;