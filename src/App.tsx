import LogExplorer from "./components/LogExplorer";
import Layout from "./components/Layout/Layout";
import "./index.css";

function App() {
  return (
    <Layout id="App__layout">
      <main className="flex-grow container mx-auto px-4 py-12">
        <LogExplorer id="App__logExplorer" />
      </main>
    </Layout>
  );
}

export default App;
