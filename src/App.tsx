import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
