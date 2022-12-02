import * as React from "react"
import { HeadFC} from "gatsby"
import { Button, Col, Row, ListGroup, Tab, ListGroupItem } from "react-bootstrap";
import Header from "../parts/header";
import { FaUser } from "@react-icons/all-files/fa/FaUser"
import { BiLink } from "@react-icons/all-files/bi/BiLink"
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter"
import { SiYoutube } from "@react-icons/all-files/si/SiYoutube"
import { SiNiconico } from "@react-icons/all-files/si/SiNiconico"
import { SiPixiv } from "@react-icons/all-files/si/SiPixiv"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { GiFeather } from "@react-icons/all-files/gi/GiFeather"
import { BsBoxArrowUpRight } from "@react-icons/all-files/bs/BsBoxArrowUpRight"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTitle from "../parts/main_title";
import { pageStyle, changeFont, paddingPosition } from "../parts/styles";


const linkList = [
  {
    key: "link1",
    url: "https://twitter.com/yuton502",
    button: <SiTwitter size={35}/>,
    text: <>
      <h3>Twitter</h3>
      <hr />
      <p>
        　毎日つぶやいています。<br />
        　特にジャンルとかは決めておらず、色々なことをぺちゃくちゃつぶやいている感じです。
      </p>
      <p>
        　下記のハッシュタグは自分のツイートをまとめたものです。クリックで検索結果に飛びます。
      </p>
      <ul>
        <li><a href="https://twitter.com/search?q=%23yuton502_art&src=typed_query">#yuton502_art</a></li>
        <li><a href="https://twitter.com/search?q=%23yuton502_note&src=typed_query">#yuton502_note</a></li>
        <li><a href="https://twitter.com/search?q=%23yuton502_photo&src=typed_query">#yuton502_photo</a></li>
      </ul>
      </>
  },
  {
    key: "link2",
    url: "https://www.youtube.com/channel/UC9xg0XqDwkZPl4ERET4_wjw?view_as=subscriber",
    button: <SiYoutube size={35}/>,
    text: <>
      <h3>Youtube</h3>
      <hr />
      <p>
        　あんまり投稿はしていませんが、一応チャンネルは持っています。<br />
        　投稿したい！っていう気持ちになること自体が珍しいので、ほとんど投稿はしていません。限定公開ならいっぱい出してるんですけどね。
      </p></>
  },
  {
    key: "link3",
    url: "https://www.nicovideo.jp/user/30385466",
    button: <SiNiconico size={35}/>,
    text: <>
      <h3>niconico</h3>
      <hr />
      <p>
        　こちらもほとんど投稿はしていません。<br />
        　めちゃくちゃ出しっぱなしの動画が投稿されていますが、続きも出す予定はないかな、と。
      </p></>
  },
  {
    key: "link4",
    url: "https://www.pixiv.net/member.php?id=12254272",
    button: <SiPixiv size={35}/>,
    text: <>
      <h3>Pixiv</h3>
      <hr />
      <p>
        　専ら絵を投稿しています。たまに小説も出します。<br />
        　ケモホモ題材が多いですが、一番好きな界隈に辿り着いたのでこれ以上変化することはないかなーと感じています。
      </p></>
  },
  {
    key: "link5",
    url: "http://hobbynote-yuton502.blog.jp/",
    button: <GiFeather size={35}/>,
    text: <>
      <h3>Livedoorブログ</h3>
      <hr />
      <p>
        　勢いで始めたブログ。Twitterでは語り尽くせないようなことを記事としてまとめています。<br />
        　ただ、いかんせん更新頻度がめちゃくちゃ低いです。ほぼ文字だけなので、なんとかなると思ったんですけどね。
      </p></>
  },
  {
    key: "link6",
    url: "https://github.com/yuton502/",
    button: <SiGithub size={35}/>,
    text: <>
      <h3>Github</h3>
      <hr />
      <p>
        　データパックとかを公開しています。<br />
        　これが作りたい！とかは特にないんですけど、何か作れたら公開していきたいですね。
      </p></>
  },
  {
    key: "link7",
    url: "",
    button: <BsBoxArrowUpRight size={35}/>,
    text: <>
      <h3>その他</h3>
      <hr />
      <ul>
        <li><a href="https://stat.ink/@yuton502">stat.ink - yuton502</a></li>
        <li><a href="https://twitter.com/photo_switch_yc">Twitter - ゆうとん+α@Switch用</a></li>
        <li><a href="https://skeb.jp/@yuton502">Skeb - @yuton502</a></li>
      </ul>
    </>
  },
]

// markup
const IndexPage = () => {
  return (
    <body>      
      <Header />
      <main style={pageStyle}>
        <title>Home - Grizzly Storage</title>

        <MainTitle />
        <br />
        <div className="justify-content-md-center  text-center">
        <h1 style={changeFont}><FaUser size={32}/> Profile</h1>
        </div><br />
        <div style={paddingPosition}>
          <p>
            皆さんはじめまして。ゆうとんと申します。<br />
            Nintendoのゲームだったり、太鼓の達人だったり、Minecraftなどを遊んでいたりします。
          </p>
          <p>
            その他にもコーディングや3Dモデリング、絵や小説なども書いてきました。Infoに詳細を載せておくので、よければご覧ください。
          </p>
        </div>
        <div className="justify-content-md-center  text-center">
          <h1 style={changeFont}><BiLink size={32} /> Links</h1>
        </div><br />
        
        <div style={paddingPosition}>
          <p>
            アイコンを直接押すと外部リンクへ飛びます。<br />
            外側を押すと説明が出ます。
          </p>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="link1">
            <Row>
              <Col xs={5} sm={3}>
                <ListGroup>
                  {linkList.map((val) => 
                    <ListGroupItem action key={val.key} eventKey={val.key}>
                      <Button variant="outline-primary" id="dropdown-split-basic" href={val.url} className="bg-white text-primary" >{val.button}</Button>
                    </ListGroupItem>
                  )}                   
                </ListGroup>
              </Col>
              <Col xs={7} sm={9}>
                <Tab.Content>
                  {linkList.map((val) =>
                    <Tab.Pane eventKey={val.key} key={val.key}>
                      {val.text}
                    </Tab.Pane>
                  )}     
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </main>
    </body>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Grizzly Storage</title>
