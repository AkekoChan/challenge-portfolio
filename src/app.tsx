import { lazy, LocationProvider, Router } from "preact-iso";

import Home from "./pages/home.tsx";

const About = lazy(() => import("./pages/about.tsx"));
const NotFound = lazy(() => import("./pages/_404.tsx"));

const app = () => (
  <LocationProvider>
    <Router>
      <Home path="/" />

      <About path="/about" />
      <NotFound default />
    </Router>
  </LocationProvider>
);
export default app;
