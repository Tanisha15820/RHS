import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Pages/HomePage";
import Urology from "./Components/Products/Urology";
import Blogs from "./Pages/Blogs";
import MachinePage from "./Pages/MachinePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/machine" element={<MachinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
