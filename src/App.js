import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: "a6f0e2a0a9e64f6c9c0f4a5e9a2b3a4d5",
})

function App() {
  const handleChange = (e) => {
    console.log(e.value);
  };

  const handleClick = () => {
    console.log("clicked");
    app.models
      .predict(
        "6dc7e46bc9124c5c8824be4822abe105",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function (res) {
          console.log(res);
        },
        function (err) {
          console.log(err);
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
