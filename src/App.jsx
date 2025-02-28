import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/PremioRouter";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
