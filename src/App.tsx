import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/common/ScrollToTop";
import AppRoutes from "./routes";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default App;
