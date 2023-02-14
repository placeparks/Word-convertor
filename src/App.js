import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForms';

function App() {
  return (
    <div className="App">
    <Navbar title= "Mirac.eth"/>
    <div className='container'>
    <TextForm heading="Analyze your text below"/>
    </div>
    </div>
  );
}

export default App;
