import './App.css';
import Logo from './pages/components/img/Logo.png';
import SCMPage from './pages/SCM-page';

function App() {
  return (
    <div className="App">
       <img  alt="Logo" src={Logo} /> <br/>
     <SCMPage/>
    </div>
  );
}

export default App;
