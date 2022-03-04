import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";
function App() {
  const cardList = data.map((e, i) => {
    return <Card key={i} item={e} />;
  });
  return (
    <div className="App">
      <Nav />
      <div className="card-list">
        {cardList}
      </div>
    </div>
  );
}

export default App;
