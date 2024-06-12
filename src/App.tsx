import { ThemeProvider } from "./components/theme-provider";
import "./App.css";
import StarBackground from "./components/star-background";
import Main from "./scenes/main";

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <StarBackground />
      {/* <Topbar /> */}
      <div className="container min-h-screen md:py-18 grow flex">
        <main className="pt-12 pb-12 grow flex">
          <Main />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
