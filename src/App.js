import "./styles.css";
import NewsArticle from "./components/NewsArticle/component";

export default function App() {
  return (
    <div className="App">
      <h1>Date : June 9, 2023 </h1>
      <br />
      <div>
        <NewsArticle
          title="CSK Won 5th IPL"
          description="Some details... paragraph"
          likes={200}
        />
        <NewsArticle
          title="LG launched AR/VR device"
          description="Some details... paragraph"
          likes={250}
        />
        <NewsArticle
          title="LG launched AR/VR device"
          description="Some details... paragraph"
        />
      </div>
    </div>
  );
}

console.log("NewsArticle ", NewsArticle, "\n\n\n", typeof NewsArticle);
