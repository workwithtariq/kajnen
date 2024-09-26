import "./styles/App.css";
import AppRoutes from "./routes/AppRoutes";
// import Header from './components/Header/Header';
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS

function App() {

  return (
    <UserProvider>
      <div className="App">
        {/* <Header /> */}
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          draggable
          pauseOnHover
        />
      </div>
    </UserProvider>
  );
}

export default App;
