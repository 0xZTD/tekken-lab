import "./App.css";
import Header from "@components/header/header.jsx";
import MainContent from "@components/mainContent/mainContent.jsx";

function App() {
  return (
    <>
      <div className="width-wrapper">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
