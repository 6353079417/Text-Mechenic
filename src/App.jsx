import {useState} from 'react' 
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
    const [mode,setMode] = useState("light")

    const [btnText,setBtnText] = useState('Enable Dark Mode')

    const [alert,setAlert] = useState(null);

    const showAlert = (message,type) => {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      },1500);
    }

    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.background="black"
        document.body.style.color="white"
        setBtnText("Enable light Mode")  
        showAlert("Dark mode has been Enable","success")  ;
        setInterval(() => {
          document.title="Chauhan - Dhaval"
        },100);
        setInterval(() => {
          document.title="Chauhan - girishbhai"
        },100);
      } else {
        setMode("light");
        document.body.style.background="white";
        document.body.style.color="black";
        setBtnText("Enable Dark Mode");
        showAlert("light Mode Has Been Enable","success");
        document.title="SIT - satyam bhai"
      }
    }
    
  return (
    <>
      <Navbar title="SIT" aboutText="Contact Us" mode={mode} toggleMode = {toggleMode} btnText={btnText}/>
      <Alert alert = {alert}/>
      <TextForm toggleMode = {toggleMode} mode = {mode} heading="Enter Text to Analyse Below" showAlert={showAlert}/>
    </>
  );
}

export default App;
