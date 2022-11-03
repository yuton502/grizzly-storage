import * as React from "react";
import tex from "../images/background_pattern_new.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { changeFont } from "./styles";

// styles
const textOnImage: React.CSSProperties = {
  backgroundImage: `url(${tex})`,
  height: '240px',
  backgroundPosition: 'center',
  backgroundSize: '25%',
  padding: "48px 5%"
}

// markup
const MainTitle = () => {
  return (
    <div style={textOnImage} className="text-white" >
      <h1 style={changeFont}>
        Grizzly Storage
      </h1>
      <p style={changeFont}>
        　いろいろやってます。
      </p>
    </div>
  )
}

export default MainTitle;