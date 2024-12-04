import "./HomeView.css";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Feature from "../components/Feature.jsx"; 
import ScrollFeature from "../components/ScrollFeature.jsx"; 
import Footer from "../components/Footer.jsx";

function HomeView() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <hr className="section-divider" />
      <Feature /> 
      <ScrollFeature /> 
      <Footer />
    </div>
  );
}

export default HomeView;
