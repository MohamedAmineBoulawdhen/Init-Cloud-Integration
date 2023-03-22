import Map from "./components/map/Map";


function App() {
  const location = {
    address: 'Tunis, Rawad',
    lat: 36.910993,
    lng: 10.187284,
  }
  return (
    <div className="App">
      <Map location={location} zoomLevel={17} />
    </div>
  );
}

export default App;
