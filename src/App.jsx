import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "./lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./lib/ThemeContext";
import ScrollToTop from './hooks/scroll'

import Layout from "./components/Layout";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import GymDetail from "./pages/GymDetail";
import PageNotFound from "./lib/PageNotFound";



function App() {
   

  return (

   
    <ThemeProvider>

      <QueryClientProvider client={queryClientInstance}>
        <Router>
                  <ScrollToTop /> 
          <Routes>
            
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/pobocky/:slug" element={<GymDetail />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    

    </ThemeProvider>
  );
}

export default App;