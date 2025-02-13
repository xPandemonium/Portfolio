import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main className='h-screen flex'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
