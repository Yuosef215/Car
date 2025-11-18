import Home from './components/Home/Home';
import Middlepage from './components/Middlepage/Middlepage';
import Pagethree from './components/Pagethree/Pagethree';
import Pagefour from './components/Pagefour/Pagefour';
import Pagefive from './components/Pagefive/Pagefive';
import Pagesex from './components/Pagesex/Pagesex';
import Footer from './components/Footer/Footer';
import Allcars from './components/Allcars/Allcars';
import Details from './components/Details/Details';
import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={
            <>
              <Home />
              <Middlepage />
              <Pagethree />
              <Pagefour />
              <Pagefive />
              <Pagesex />
              <Footer />
            </>
          }
        />
        <Route path="/allcars" element={<Allcars />} />
        <Route path="/detiles" element={< Details/>} />
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
