import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { AboutMe } from "./pages/AboutMe";

export function App() {
  return (
    <div className="bg-background font-display text-primary-text min-h-svh flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<AboutMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
