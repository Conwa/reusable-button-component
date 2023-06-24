import { Route, Routes } from "react-router-dom";

import ButtonView from "./components/ButtonView";
import Homepage from "./components/Homapage";
import WorkInProgress from "./components/WorkInProgress";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/colors" element={<WorkInProgress />} />
        <Route path="/typography" element={<WorkInProgress />} />
        <Route path="/spaces" element={<WorkInProgress />} />
        <Route path="/buttons" element={<ButtonView />} />
        <Route path="/inputs" element={<WorkInProgress />} />
        <Route path="/grid" element={<WorkInProgress />} />
      </Routes>
    </>
  );
}

export default App;
