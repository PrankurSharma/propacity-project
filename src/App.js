import './App.css';
import { ContextProvider } from './context/ContextProvider';
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
