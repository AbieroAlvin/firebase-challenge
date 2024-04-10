import Layout from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Layout />
      </AuthContextProvider>
    </div>
  );
}

export default App;
