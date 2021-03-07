import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import ROUTER from './router/index'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ROUTER />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
