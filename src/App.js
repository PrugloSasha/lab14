import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';



function NavMenu() {
  return (
  <>
  <Link to="/" className="links"> Biography  </Link>
  <Link to="/tmpp" className="links">  The Most popular painting</Link>
  <Link to="/Allp" className="links"> Some Paintings </Link>
  </>
  );
 }
function Biography() {
  return (
    <div>
      <h1>Salvador Dali</h1>
      <p>
      Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marquess of Dalí de Púbol gcYC (/ˈdɑːli, dɑːˈliː/; Catalan: [səlβəˈðo ðəˈli]; Spanish: [salβaˈðoɾ ðaˈli]; 11 May 1904 – 23 January 1989) was a Spanish surrealist artist renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work.Born in Figueres, Catalonia, Dalí received his formal education in fine arts in Madrid. Influenced by Impressionism and the Renaissance masters from a young age, he became increasingly attracted to Cubism and avant-garde movements.He moved closer to Surrealism in the late 1920s and joined the Surrealist group in 1929, soon becoming one of its leading exponents. His best-known work, The Persistence of Memory, was completed in August 1931, and is one of the most famous Surrealist paintings. Dalí lived in France throughout the Spanish Civil War (1936 to 1939) before leaving for the United States in 1940 where he achieved commercial success. He returned to Spain in 1948 where he announced his return to the Catholic faith and developed his "nuclear mysticism" style, based on his interest in classicism, mysticism, and recent scientific developments.Dalí's artistic repertoire included painting, graphic arts, film, sculpture, design and photography, at times in collaboration with other artists. He also wrote fiction, poetry, autobiography, essays and criticism. Major themes in his work include dreams, the subconscious, sexuality, religion, science and his closest personal relationships. To the dismay of those who held his work in high regard, and to the irritation of his critics, his eccentric and ostentatious public behavior often drew more attention than his artwork. His public support for the Francoist regime, his commercial activities and the quality and authenticity of some of his late works have also been controversial.His life and work were an important influence on other Surrealists, pop art and contemporary artists such as Jeff Koons and Damien Hirst.There are two major museums devoted to Salvador Dalí's work: the Dalí Theatre-Museum in Figueres, Spain, and the Salvador Dalí Museum in St. Petersburg, Florida.
      </p>
    </div>
  );
}
function Tmpp() {
  return (<div><img src="/memory.jpg" alt = "none"/></div>);
}

function AllPictures() {
  return (
    <div>
      <img src="/Hristos.jpg" alt = "none"/>
      <img src="/Halla.jpg" alt = "none"/>
      <img src="/memory.jpg" alt = "none"/>
      <img src="/tigers.jpg" alt = "none"/>
    </div>
  );
}
function NotFound() {
  return <h2>Not found</h2>;
}
export default function App() {
  return (
    <div>
      <Router>
        <NavMenu/>
        <Switch>
          <Route exact path="/" component={Biography} />
          <Route path="/tmpp" component={Tmpp} />
          <Route path="/Allp" component={AllPictures} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

