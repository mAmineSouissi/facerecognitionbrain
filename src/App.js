import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";

function App() {
  const app = new Clarifai.App({
    apiKey: "3437a0eaf25c4b62bafbad6356dcfd2c",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleClick = () => {
    console.log("clicked");
    app.models
      .predict("3437a0eaf25c4b62bafbad6356dcfd2c", "https://samples.clarifai.com/dog1.jpeg")
      .then((response) => {
        console.log(response);
      }
    );
      
  };

  return (
    <div className="App">
      <ParticlesBg type="square" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={handleChange} onDetectClick={handleClick} />
      {/*
      <FaceRecognition/> */}
    </div>
  );
}

export default App;
