import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";
export const dynamic = "force-dynamic";

const TasksPage = () => {
  return (
    <div>
      <h1 className="max-w-lg">
        <TaskFormCustom />
        <TaskList />
      </h1>
    </div>
  );
};
export default TasksPage;
