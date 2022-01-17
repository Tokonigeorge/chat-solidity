import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import "./styles/scrollbar.css";
import { useDataContextVal } from "./context/dataContext";

function App() {
  const [{ active }] = useDataContextVal();
  return (
    <Router>
      <div
        className={`App bg-bgWhite h-screen max-h-screen md:overflow-y-hidden 
        ${
          active === "Participants"
            ? "overflow-y-scroll styleScroll"
            : "overflow-y-hidden"
        } 
        `}
      >
        {/* <ChatPage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
