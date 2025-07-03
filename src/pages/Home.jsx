import TaskManager from "../components/TaskManager";
import Card from "../components/Card";
import Button from "../components/Button";

function Home() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">Home</h1>
      <p className="text-gray-700">
        Welcome to MyApp! Manage your tasks and explore API data below.
      </p>

      <Card title="Example Card">
        <p>This is an example of a reusable Card component.</p>
        <div className="mt-2">
          <Button onClick={() => alert("Primary clicked!")}>
            Primary Button
          </Button>
        </div>
      </Card>

      <TaskManager />
    </div>
  );
}

export default Home;
