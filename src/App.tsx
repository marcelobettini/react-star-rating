import "./App.css";
import StarRating from "./components/StarRating.jsx";

const starStyling = {
  backgroundColor: "tomato",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "90px",
  padding: '.5em 1em',
  textAlign: "center",
}

function App() {
  return (
    <main className="app-container">
      <StarRating style={starStyling} totalStars={10} />
    </main>
  );
}

export default App;
