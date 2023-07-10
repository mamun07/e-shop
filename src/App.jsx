import RootRouter from "./RootRouter";
import Header from "./container/Header";
import Footer from "./container/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RootRouter />
      <Footer />
    </div>
  );
}

export default App;
