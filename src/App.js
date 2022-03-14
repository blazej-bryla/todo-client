import { Route, Routes } from "react-router-dom";
import All from "./pages/all";
import New from "./pages/new";

function App() {
  return (
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}

export default App;
