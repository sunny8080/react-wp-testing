import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { getWPHomePage } from './services/wp-services'

// const VITE_REACT_APP_BACKEND_URL: string | undefined = import.meta.env.VITE_REACT_APP_BACKEND_URL;
// console.log(VITE_REACT_APP_BACKEND_URL)
// let abc = "asd";
function App() {
  let [wpContent, setWpContent] = useState('');

  useEffect(() => {

    async function abc() {
      const tmp = await getWPHomePage();
      if (tmp) wpContent = tmp;
      console.log(tmp)
    }

    abc();


  }, []);

  return (
    <div className='h-screen'>
      <Navbar />


      <div className='h-full'>
        <div className='other-content'>
          <p>Welcome to my site, here i am testing wordpress with React</p>
          <p>Means testing headless Wordpress </p>
        </div>

        <div className='wp-content mt-5'>
          <p>Below are wp-content</p>
          <p></p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
