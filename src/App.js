import { Provider } from "react-redux";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const contextValue = "Hello from Context!";
  return (
      <div className="App">
        <Counter />
      </div>
  );
}

export default App;
