import "./App.css";
import StarRating from "./components/StarRating.jsx";

const starStyling = {
  backgroundColor: "tomato",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "90px",
  width: "200px",
  textAlign: "center",
};

function App() {
  return (
    <main className="app-container">
      <StarRating style={starStyling} />
    </main>
  );
}

export default App;
