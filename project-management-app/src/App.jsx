import NewProject from "./Components/NewProject";
import ProjectSideBar from "./Components/ProjectSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NewProject />
    </main>
  );
}

export default App;
