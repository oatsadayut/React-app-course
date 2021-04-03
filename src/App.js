import "./App.css";
import Footer from "./components/layouts/Footer";
import NavBar from "./components/layouts/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePageContent from "./components/layouts/RoutePageContent";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "react-toast-notifications";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ToastProvider //Alert Toast
      autoDismiss
      autoDismissTimeout={3000}
      placement="top-right"
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <NavBar />
          <RoutePageContent />
          <Footer />
        </Router>
      </QueryClientProvider>
    </ToastProvider>
  );
};

export default App;
