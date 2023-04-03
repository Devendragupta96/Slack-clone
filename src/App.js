import "./App.css";
import Chat from "./component/Chat";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/channel/:channelId" element={<Chat />}></Route>
                <Route path="/" element={<Chat />}></Route>
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
