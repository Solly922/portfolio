import { ThemeProvider } from "./components/theme-provider";
import "./App.css";
import StarBackground from "./components/star-background";

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <StarBackground />
      {/* <Topbar /> */}
      <div className="container h-fit md:py-18 grow">
        {/* <main className="pt-12 pb-12 grow "> */}
        <h1>Hello World!</h1>
        {/* </main> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
