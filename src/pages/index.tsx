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
    url: "https://bsky.app/profile/yuton502.bsky.social",
    button: <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565C.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479c.815 2.736 3.713 3.66 6.383 3.364c.136-.02.275-.039.415-.056c-.138.022-.276.04-.415.056c-3.912.58-7.387 2.005-2.83 7.078c5.013 5.19 6.87-1.113 7.823-4.308c.953 3.195 2.05 9.271 7.733 4.308c4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056c2.67.297 5.568-.628 6.383-3.364c.246-.828.624-5.79.624-6.478c0-.69-.139-1.861-.902-2.206c-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8"/></svg>,
    text: <>
      <h3>Bluesky</h3>
      <hr />
      <p>
        　時折つぶやいています。<br />
        　Twitterがサ終しない限りは、こちらで創作中心のことをつぶやいています。
      </p>
      <p>
        　一応こちらでも絵は投稿しますが、解像度が低くなるように圧縮されるため、見る場合はpixivかTwitterをご覧ください。
      </p>
    </>
  },
  {
    key: "link3",
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
    key: "link4",
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
    key: "link5",
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
    key: "link6",
    url: "https://grizzly-storage-blog.pages.dev/",
    button: <GiFeather size={35}/>,
    text: <>
      <h3>Grizzly Storage Blog</h3>
      <hr />
      <p>
        　勢いで始めたブログ。Twitterでは語り尽くせないような創作、備忘録などを記事としてまとめています。<br />
        　2024/09を以って新設したので、今回はさらに自由に書いていきたいと考えています。
      </p>
      <p>
        　以前のLivedoorブログの方は以下のリンクからご覧になってください。
      </p>
      <ul>
        <li><a href="http://hobbynote-yuton502.blog.jp/">Livedoorブログ</a></li>
      </ul>
      </>
  },
  {
    key: "link7",
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
    key: "link8",
    url: "",
    button: <BsBoxArrowUpRight size={35}/>,
    text: <>
      <h3>その他</h3>
      <hr />
      <h5>● SNS</h5>
      <ul>
        <li><a href="https://pawoo.net/@yuton502">Pawoo - @yuton502</a><br />
        Mastodonでアカウントが作りたくて作成。そんなにトゥートしないかも。</li>
        <li><a href="https://misskey.design/@yuton502">Misskey.design - @yuton502</a><br />
        一次創作用と聞いて作成。一次創作の話はこちらにノートすることが多くなるかもしれません。</li>
        <li><a href="https://twitter.com/photo_switch_yc">Twitter - ゆうとん+α@Switch用</a><br />
        Switchからの投稿用アカウント。投稿したりしてなかったりします。</li>
        </ul>
        <h5>● その他</h5>
        <ul>
        <li><a href="https://stat.ink/@yuton502">stat.ink - yuton502</a></li>
        <li><a href="https://skeb.jp/@yuton502">Skeb - @yuton502</a></li>
        <li><a href="https://www.ikaclo.jp/users/6215/">イカクロ - ゆうとん</a></li>
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
