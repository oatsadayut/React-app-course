import "./App.css";
import Footer from "./components/layouts/Footer";
import NavBar from "./components/layouts/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePageContent from "./components/layouts/RoutePageContent";
import { QueryClient, QueryClientProvider } from "react-query"; //React Query
import { ToastProvider } from "react-toast-notifications"; // Toast Alert

//Redux Setup ------------------------------------------//
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./redux/reducer/indexReducer";
import { PersistGate } from "redux-persist/integration/react";

import configStore from "./redux/configureStore";
const { store,persistor } = configStore();

// const store = createStore(configStore);
// -----------------------------------------------------//

//React Query
const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
