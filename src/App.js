import './App.scss';
import Main from './pages/MainPage/main';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="main">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
