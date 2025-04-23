import HeroSection from './components/hero';
import Hero2 from './components/hero2';
import Hero3 from './components/hero3';
import DataSEO from './components/dataSEO';
import MainForm from './components/form';
import Slideshow from './components/slideshow';
import { Footer } from './components/form';
// import { motion, useScroll } from "framer-motion"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // const { scrollYProgress } = useScroll()
  return (
    <>
      {/* <motion.div
        id="scroll-indicator"
        style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#ffd369",
            zIndex:1000
        }}
      /> */}
      <HeroSection />
      <Hero2 />
      <Hero3 />
      <DataSEO />
      <Slideshow />
      <MainForm />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="custom-toast"
        icon={({ type }) => {
          switch (type) {
            case 'success':
              return '🎉';
            case 'error':
              return '❌';
            default:
              return '🔔';
          }
        }}
      />
    </>
  )
}

export default App