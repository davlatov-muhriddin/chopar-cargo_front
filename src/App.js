import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import AddUser from "./components/AddUser";
import UsersInfo from "./pages/UsersInfo";

function App() {
  return (
    <div className="container">
      <div>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/sarvar0622" element={<UsersInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
