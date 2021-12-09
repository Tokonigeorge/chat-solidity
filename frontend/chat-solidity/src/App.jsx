import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import "./styles/scrollbar.css";

function App() {
  return (
    <Router>
      <div className="App bg-bgWhite h-screen md:overflow-y-hidden overflow-y-scroll styleScroll">
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
