import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RenderRoutes from "./components/RenderRoutes";
import AuthProvider from "./context/AuthProvider";
import TaskProvider from "./context/TaskProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TaskProvider>
          <Header className="header" />
          <div className="center">
            <Navigation className="navigation" />
            <RenderRoutes className="main" />
          </div>
        </TaskProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
