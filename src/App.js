import './App.scss';
import Navbar from '../src/components/navbar/navbar'
import Body from '../src/components/body/body'
import Footer from '../src/components/footer/footer'



function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <Body />
    <Footer/>
    </div>
  );
}

export default App;
