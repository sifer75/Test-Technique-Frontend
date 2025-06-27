import Array from "./components/ArrayOfLogs/Array";
import Layout from "./components/Layout/Layout";
import "./index.css";

function App() {
  return (
    <Layout id="App__layout">
      <main className="flex-grow container mx-auto px-4 py-12">
      <Array id="App__array" />
      </main>
    </Layout>
  );
}

export default App;
