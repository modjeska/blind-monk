import {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [pageState, setPageState] = useState({
    about: true,
    work: false,
    contact: false,
  })
 
  return (
    <>
    <CssBaseline/>
    <Navbar pageState={pageState} setPageState={setPageState}/>
    {pageState.about? <About/>: ''}
    {pageState.works? <Works/>: ''}
    {pageState.contact? <Contact/>: ''}
    <Footer/>
    </>
  );
}

export default App;
