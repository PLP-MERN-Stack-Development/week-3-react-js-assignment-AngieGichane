import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import PostList from "./components/PostList";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Button from "./components/Button";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex justify-center p-4">
      <Button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </Button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ThemeSwitcher />
        <TaskManager />
        <PostList />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
