import "./App.css"
import Footer from "./components/layouts/Footer"
import NavBar from "./components/layouts/NavBar"
import { BrowserRouter as Router } from "react-router-dom"
import RoutePageContent from "./components/layouts/RoutePageContent"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <RoutePageContent />
        <Footer />
      </Router>
    </QueryClientProvider>
  )
}

export default App
