import { useContext } from 'react';
import './App.css';
import { Spinner } from './components/index';
import { AppContext, ContextProvider } from './context/ContextProvider';
import MainPage from './features/MainPage';
import Topbar from './features/Topbar';
import Dashboard from './features/Dashboard';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Dashboard />
      </div>
    </ContextProvider>
  );
}

export default App;
