import { useState, createContext } from "react";
import ReactSwitch from "react-switch";
import Form from "./components/Form";
import "./styles/styles.scss";

const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <Form />
      </div>
      <div className="switch-theme">
        <label htmlFor="react-switch">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </label>
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          id="react-switch"
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
