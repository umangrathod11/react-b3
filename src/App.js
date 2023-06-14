import "./styles.css";
import NewsArticle from "./components/NewsArticle";
import RelatedArticles from "./components/RelatedArticles";


const releatedArticlesData = [
  { likes: 200, title: 'Title 1', description: 'descroption 1' },
  { likes: 150, title: 'Title 2', description: 'descroption 2' },
];

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
          likes={20}
        />

        <NewsArticle
          title="JIO AR Devide launch"
          likes={500}
          description="Be ready to get thrilled again with JIO"
        />
      </div>
      <RelatedArticles
        data={releatedArticlesData}
      />
    </div>
  );
}
