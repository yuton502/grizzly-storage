import * as React from "react"
import { HeadFC } from "gatsby"
import Header from "../parts/header";
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTitle from "../parts/main_title"
import BmiCalc from "../parts/bmi_calc"
import { pageStyle, changeFont, noBreak, paddingPosition } from "../parts/styles"


// markup
const ExtraPage = () => {

  return (
    <body>      
      <Header />
      <main style={pageStyle}>
        <title>Extra - Grizzly Storage</title>

        <MainTitle />
        <br />
        <div className="justify-content-md-center  text-center">
        <h1 style={changeFont}><AiOutlineInfoCircle size={32}/> Extra</h1>
        </div><br />
        <div style={paddingPosition}>
          <p style={noBreak}>
            自分用に置いておくだけです。
          </p>
          <p>
            気が向いたら使ってあげてください。
          </p><hr />

          <p style={noBreak}>「親友以上の気持ち」の世界に順次したBMIで計算します。</p>
          <p>登場人物は大体6頭身くらいなので、通常は身長(m)^2のところを、身長(m)^2.25で計算します。</p>
          <BmiCalc />
        </div>
      </main>
    </body>
  )
}


export default ExtraPage

export const Head: HeadFC = () => <title>Extra - Grizzly Storage</title>
