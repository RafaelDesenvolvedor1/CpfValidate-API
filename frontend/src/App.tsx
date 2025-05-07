import "./App.css";
import Main from "./components/Main";
import { AuthProvider } from "./contexts/auth";

import 'animate.css';


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
