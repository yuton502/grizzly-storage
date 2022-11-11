import * as React from "react"
import { HeadFC } from "gatsby"
import Header from "../parts/header";
import { RiArtboardFill } from "@react-icons/all-files/ri/RiArtboardFill"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTitle from "../parts/main_title"
import { pageStyle, changeFont, noBreak, paddingPosition, center, left } from "../parts/styles"
import ArtTable from "../parts/art_table";
import { json } from "stream/consumers";
import Arts from "../data/ai_art_data.json";
import { Figure, Placeholder } from "react-bootstrap";


// markup
const AiArtPage = () => {

  return (
    <body>      
      <Header />
      <main style={pageStyle}>
        <title>Ai Art Exhibition - Grizzly Storage</title>
        <MainTitle />

        <br />
        <div className="justify-content-md-center  text-center">
        <h1 style={changeFont}><RiArtboardFill size={32}/> Exhibition</h1>
        </div><br />
        <div style={paddingPosition}>
          <>
          <p style={noBreak}>Stable Diffusion WebUIを使って作成した作品です。</p>
          <p>モデルはyiffy-e18を使用させていただきました。なおR-18作品はありません。</p>
          <p style={noBreak}>下の検索スペースは通常、スペースを空けるとAND検索、ハイフンを先頭に付けるとマイナス検索も可能です。</p>
          <p>タグは作品から適当に確認してみてください。</p>
          <ArtTable />
          <Placeholder as={Figure} animation="glow">
            <Placeholder />
          </Placeholder>
          </>
        </div>
      </main>
    </body>
  )
}



export default AiArtPage

export const Head: HeadFC = () => <title>Ai Art Exhibition - Grizzly Storage</title>
