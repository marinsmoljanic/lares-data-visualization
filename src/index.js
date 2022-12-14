import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import C3 from "./pages/C3";
import ChartJs from "./pages/ChartJs";
import DyGraph from "./pages/DyGraph";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="c3" element={<C3 />} />
          <Route path="chartjs" element={<ChartJs />} />
          <Route path="dygraph" element={<DyGraph />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);