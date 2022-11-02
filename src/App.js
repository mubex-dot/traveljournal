// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from "./components/data.js";

function App() {
  const items = data.map((item) => {
    return <Hero key={item.title} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      <section>{items}</section>
    </div>
  );
}

export default App;
