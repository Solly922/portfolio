import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <div className="border border-foreground">
        <h1>Hello World!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;

// #9cc6e6
// #0d0101
// #cecef5
