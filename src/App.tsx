import { ThemeProvider } from "./components/theme-provider";
import StarBackground from "./components/star-background";
import Main from "./scenes/main";

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <StarBackground />
      <div className="container min-h-screen md:py-18 grow flex overflow-x-hidden">
        <main className="pb-12 grow flex">
          <Main />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
