import "./App.css";
import Main from "./components/Main";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </>
  );
}

export default App;
