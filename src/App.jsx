import LandingPage from "./pages/LandingPage"; // Misalkan Anda memiliki folder 'pages' untuk menyimpan halaman-halaman
import TreeDetail from "./pages/TreeDetail"; // Impor komponen TreeDetail
import treesData from "./data/trees.json"; // Impor data JSON
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tree/:id" element={<TreeDetail />} treesData={treesData} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
