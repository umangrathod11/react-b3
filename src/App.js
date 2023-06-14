import "./styles.css";
import NewsArticle from "./components/NewsArticle";
import RelatedArticles from "./components/RelatedArticles";
import Profile from "./components/Profile";


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
      <br />
      <div style={{ display: "flex", gap: '1rem', flexWrap: 'wrap', padding: '1rem', border: '2px solid #bd778d' }}>
        <Profile 
          name="Ghana"
          designation="Senior Engineer at ABC Tech"
          imageUrl="https://sbr-technologies.com/wp-content/uploads/2021/06/react_logo.png"
        />

        <Profile 
          name="Anil"
          designation="Manager at Volvo Tech"
        />

        <Profile 
          name="Rajath Kumar Shetty"
          designation="Director at IBMB Tech Solutions"
        />

        <Profile 
          name="R Kumaran Shah"
          designation="Intern at Ashok Motors Pvt Ltd"
          imageUrl="https://static01.nyt.com/images/2023/05/11/business/00ai-sparks/00ai-sparks-articleLarge-v2.jpg"
        />
      </div>
    </div>
  );
}
