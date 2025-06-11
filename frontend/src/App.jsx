import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GetQuoteForm from './components/GetQuoteForm';

export default function App() {
  return (
    <BrowserRouter basename="/Tradingsit">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getquoteform" element={<GetQuoteForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}