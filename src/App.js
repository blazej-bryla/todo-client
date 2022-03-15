import { Route, Routes } from "react-router-dom";
import All from "./pages/all";

function App() {
  return (
    <Routes>
      <Route path="/" element={<All />} />
    </Routes>
  );
}

export default App;
