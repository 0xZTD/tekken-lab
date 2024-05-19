import "./App.css";
import Header from "@components/shared/header/header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="width-wrapper">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
