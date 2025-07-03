import TaskManager from "../components/TaskManager";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Home</h1>
      <p className="mb-4 text-gray-700">
        Welcome to MyApp! Manage your tasks and explore API data below.
      </p>
      <TaskManager />
    </div>
  );
}

export default Home;
