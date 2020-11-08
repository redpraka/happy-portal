import logo from './logo.svg';
import StockData from './components/StockData'
import './App.css';
const title = "Stock Data";

function App() {
  return (

    <div>
    <nav className="app-header layout-row align-items-center justify-content-center">
      <div className="layout-row align-items-center">
        <img alt="" src={logo} className="logo"/>
        <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
      </div>
    </nav>
      <StockData/>    
  </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
