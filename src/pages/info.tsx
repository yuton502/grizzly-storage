import * as React from "react"
import { HeadFC, Link } from "gatsby"
import { Button, ButtonGroup, Col, Container, Row, ThemeProvider, Stack, Table, Card, CardGroup, Carousel, Popover, Dropdown, ListGroup, Tab, ListGroupItem, Tabs, Badge } from "react-bootstrap";
import Header from "../parts/header";
import tex from "../images/background_pattern_new.jpg"
import { FaUser } from "@react-icons/all-files/fa/FaUser"
import { BiLink } from "@react-icons/all-files/bi/BiLink"
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter"
import { SiYoutube } from "@react-icons/all-files/si/SiYoutube"
import { SiNiconico } from "@react-icons/all-files/si/SiNiconico"
import { SiPixiv } from "@react-icons/all-files/si/SiPixiv"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { GiFeather } from "@react-icons/all-files/gi/GiFeather"
import { BsBoxArrowUpRight } from "@react-icons/all-files/bs/BsBoxArrowUpRight"
import CardHeader from "react-bootstrap/esm/CardHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "@emotion/styled";

// styles
const pageStyles: React.CSSProperties = {
  color: "#232129",
  padding: "0%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const changeFont: React.CSSProperties = {
  fontFamily: "Fredoka One, Impact, sans-serif"
}

const noBreak: React.CSSProperties = {
  marginBottom: "0em",
}

const largeBreak: React.CSSProperties = {
  marginBottom: "2em",
}

const center: React.CSSProperties = {
  textAlign: "center"
}

const paddingPosition: React.CSSProperties = {
  padding: "0% 10% 50px"
}

const paddingNarrowPosition: React.CSSProperties = {
  padding: "0% 20% 50px"
}

const textOnImage: React.CSSProperties = {
  backgroundImage: `url(${tex})`,
  height: '240px',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: "48px 5%"
}

const iconOnSource: React.CSSProperties = {
  position: "absolute"
}
const iconOnVictom: React.CSSProperties = {
  position: "relative"
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

// markup
const InfoPage = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
>
      <body>      
        <Header />
        <main style={pageStyles}>
          <title>Grizzly Storage - Info</title>

          <div style={textOnImage} className="text-white" >
            <h1 style={changeFont}>
              Grizzly Storage
            </h1>
            <p style={changeFont}>
              　いろいろやってます。
            </p>
          </div>
          <br />
          <div className="justify-content-md-center  text-center">
          <h1 style={changeFont}><FaUser size={32}/> Details</h1>
          </div><br />
          <div style={paddingPosition}>
            <p>
              ゲームや今ハマっているものを書いていきます。
            </p>
            <p>
              タブを押すと説明が出てきます。
            </p>
            <Tabs
              defaultActiveKey="minecraft"
              id="justify-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="mario" title="マリオ系">
                <p style={noBreak}>　一番はじめにやったゲームです。(2007～)</p>
                <p>　最初はマリオカートWiiをやり始め、そこからNewスーパーマリオブラザーズWii、スーパーマリオギャラクシーと続きました。</p>
                <p style={noBreak}>　ギャラクシー2、3Dランド、3Dワールド、オデッセイなど、3D系を多くやりました。ほぼ完全にクリアしていますが、3Dワールドのハンコ集めだけは断念しました。</p>
                <p>　マリオカートもその後7、8、8DXとやっています。8は本当にやり込みました。</p>
                <p style={noBreak}>　好きなキャラはヨッシーとモートンです。ヨッシーは言わずもがなかわいいので。モートンは8で使っていたら愛着が湧いてきて今に至ります。といっても今は好き好き感情は薄れてしまっていますが……。</p>
              </Tab>
              <Tab eventKey="splatoon" title={
                <>Splatoon <Badge bg="warning">Hot</Badge></>
              }>
                <p style={noBreak}>　WiiUの購入時に同時に購入しました。(2016.3～)</p>
                <p>　動画でひと目見た時からローラーが強そうだと思い、1の最初期はスプラローラーコラボを使っていました。</p>
                <p style={noBreak}>　これ1本でウデマエSまで行きましたが、途中でカーボンの動画を見てしまい、そこから私のカーボン道が始まることに。</p>
                <p>　そこからスプラ2、果ては今日までカーボンを使い続けております。</p>
                <p style={noBreak}>　スプラ1のプレイ時間は1250時間、スプラ2のプレイ時間は1760時間です。スプラ2の方が生存期間が長かったのですが、密度で言えばスプラ1の方が上のようでした。</p>
                <p>　実質6年やっておりますが、当初のウデマエからはほぼ上手くなっておりません。マッチすることがあればよろしくお願いします。</p>
              </Tab>
              <Tab eventKey="doubutsu" title="どうぶつの森">
                <p style={noBreak}>　一番記憶に残るゲームです。(2009.9～)</p>
                <p>　最初は街へいこうよどうぶつの森の方を購入してやりました。当時は小学生ながらその遊びの幅の広さに感激してしまい、毎日プレイしたことを覚えています。</p>
                <p style={noBreak}>　朝早く起きては街森を起動して花の水やり、起きている住民に話しかけ。帰ってきてくるなり虫採ったり魚釣ったりしたりして。非常に楽しいゲームでした。</p>
                <p>　しかも2回も村を作り直すという暴挙に出ています。1年ずつ別々の村を過ごしていたのですが、正直2代目と3代目の記憶が曖昧です( ˘ω˘ )</p>
                <p style={noBreak}>　そんなこんなで街森は3年間ノンストップでやってきたのですが、次作のとび森もまあやり込みました。</p>
                <p style={noBreak}>　街森ほどやり込んではいませんでしたが、なにせあつ森まで8年あったわけですから。やる時間はたっぷりありました。</p>
                <p>　街森のときは咲かせられなかった青バラでしたが、とび森では自力で咲かすことができて当時はとても喜んでいました。</p>
                <p style={noBreak}>　そしてあつ森。残念ながらプレイ時間は他2作品と比べると全然短いんですが、かなり充実しています。ただし島はまだ作り終えていない。</p>
              </Tab><br />
              <Tab eventKey="minecraft" title="Minecraft">
                <p style={noBreak}>　私の人生史上最も遊んだゲームです。(2012.5～)</p>
                <p>　おそらく一番ネットの方々と交流して遊んだゲームでもあります。</p>
                <p style={noBreak}>　方向音痴のBellさんや、新世界の神になるえふやんさん等の動画を見てやりたくなった私は、製品版1.2.5から始めることとなりました。</p>
                <p>　今や昔のそのワールドが無いので覗くことができないのですが、何を作ったかは今でも覚えています。</p>
                <p style={noBreak}>　1.3時代もバニラでやって、1.4時代からModを使い始めた気がします。このときは結構好きなものをまばらに入れていました。</p>
                <p>　1.6時代からゲーム内部のNBTに手を付け、通常ではできないことをやったりして遊んでいました。同時期に工業Modにも手を出し始めました。最初はぬるい環境でやっていたのですが、次第にGregにも手を出し始めます。なおLV時代で終わってしまう模様。</p>
                <p style={noBreak}>　そして1.8からはコマンドが強化され、そこからコマンダーになりました。コマンダー自体は今でも継続している……つもりです。</p>
                <p>　ちなみに1.9～1.11までは使えるPCが無かったので触っていません。その代わり身内とWiiU Editionをやっていました。</p>
                <p style={noBreak}>　ちなみに、ワールド的には2017.5から(当時1.12)ずっとサバイバルで遊んでいるものがあります。だからといって色々作っていたりするわけではないんですけどね。</p>
              </Tab>
              <Tab eventKey="taiko" title="太鼓の達人">
                <p style={noBreak}>　おそらく一番古参です。(2007～)</p>
                <p>　最初にやったのはAC版でした。ナンバリングが7だったような気がします。現在調べてみると当時は9か10だったようですが、まあ店舗側が更新してなかったのでしょう。</p>
                <p style={noBreak}>　ゲームの方をやったのは太鼓の達人Wiiからです。これまでのゲームほどではないにしろ、結構やってました。</p>
                <p> 当時エンジェルドリーム(むずかしい)のカカドンが全然できなかったことを覚えています。</p>
                <p style={noBreak}>　ここから音ゲーはほぼこれ一択でした。だんだんおにもできるようになっていきましたが、現在でも★10最上位はクリアすらできません。永遠のエンジョイ勢です。よろしくお願いします。</p>
              </Tab>
              <Tab eventKey="other_games" title="その他ゲーム">
                <p>　やったことあるゲームを羅列だけします。</p>
                <ul>
                  <li>Deemo (2019.9)</li>
                  <li>東京放課後サモナーズ (2019.9) <Badge bg="primary">Playing</Badge></li>
                  <li>バイオハザード RE:2 (2020.4)</li>
                  <li>VRChat (2020.10) <Badge bg="primary">Playing</Badge></li>
                  <li>Apex Legends (2021.2)</li>
                  <li>クラフトピア (2021.12)</li>
                  <li>バイオハザード5 (2022.7)</li>
                  <li>バイオハザード6 (2022.8)</li>
                </ul>
              </Tab>
              <Tab eventKey="creation" title={
                <>創作 <Badge bg="warning">Hot</Badge></>
              }>
                <p style={noBreak}>　創作を始めたのは2015.6から。絵も小説も同時期に始めています。</p>
                <p>　最初はやっぱり絵も小説も拙いものでした。小説の方は自分でコンテンツを消費したかっただけなのでどこにも載せてはいないですが、今見るとひどいものです。</p>
                <p style={noBreak}>　マリオ系の絵を描いていたのは2018年末まで。2019年の3月から獣人(オスケモ)を描き始めています。最近は上手くなったんじゃないかと自画自賛ぎみです。</p>
                <p>　小説がオスケモに成り代わるのはもっと早くて、2018年の10月あたりでした。そこから自小説「親友以上の気持ち」を執筆しています。……全然終わる気配がありませんが。</p>
                <p style={noBreak}>　3Dモデリングの方は2019年の5月だったでしょうか。GWで作り終えた後放置し、2019年の9月にまた始めて放置。</p>
                <p style={noBreak}>　そこからまたじわじわやっている感じです。最近はまた放置しています。</p>
              </Tab>
            </Tabs>
          </div>
        </main>
      </body>
    </ThemeProvider>
  )
}

export default InfoPage

export const Head: HeadFC = () => <title>Grizzly Storage - Info</title>
