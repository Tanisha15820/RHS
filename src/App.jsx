import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Pages/HomePage";
import GeneralSurgery from "./Pages/GeneralSurgery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/general-surgery" element={<GeneralSurgery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;