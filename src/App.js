import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './components/homescreen';

function App() {
  // ReactDOM.render(element, document.body)
  const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');


  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
      </style> 
      <Navbar />
      <Homescreen />
    </div>
  );
}

export default App;
