import "./App.css";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";

function App() {
  return (
    <div id="App">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
