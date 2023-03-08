import React from "react";
import Profile from "./profil/Profile";
import Image from "./alaasane.jpg";

function App() {
  let fullName = "Alasane Ouattara";
  return (
    <div className="App">
      <h1>Hello</h1>
      <Profile
        fullName={fullName}
        bio="je suis chargé de gouverner la nation ivoirienne, et cela fait plus d'une dizaine d'année que je suis chargé de diriger le pays. Je suis originaire de Kong, et titulaire d'un doctorat en économie au USA précisement à Washington"
        profession="President de la république de la Côte d'Ivoire"
      />
      <img src={Image} alt="president" />
      <Profile />
    </div>
  );
}

export default App;
