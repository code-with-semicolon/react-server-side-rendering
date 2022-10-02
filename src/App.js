import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./server/Routers/Routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<>App is Loading ...</>}>
      <BrowserRouter>
        <Routes>
          {AppRoutes.forEach(({ path, comp: C }) => {
            <Route path={path} element={<C />} />;
          })}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
