import React, { useState } from "react"
import { Button, Form, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Arts from "../data/ai_art_data.json";
import ArtData from "./art_data_impl";
import InfiniteScrollArts from "./infinite_scroll_arts";

const ArtTable = () => {
  const [filteredArts, setFilteredArts] = useState(Arts.data)
  const [useRegex, setUseRegex] = useState<boolean>(false)
  const [keyword, setKeyword] = useState("");
  const [isRegexInvalid, setIsRegexInvalid] = useState(false);
  const [showArts, setShowArts] = useState<ArtData[]>([]);
  const [page, setPage] = useState(0);

  React.useEffect(() => {
    setPage(0);
    setShowArts([]);

    let list: string[] = keyword.split(/\s+/)
    let translate = Arts.translations
    //アルファベットの場合、Arts.translationsから翻訳しておく
    const translatedList: string[] = list.map((e) => {
      if (e.match(/[a-zA-Z]+/)) {
        try {
          const lowerKey = e.toLowerCase();
          return translate[lowerKey] ?? e;
        } catch (error) {
          return e;
        }
      }
      return e;
    })
    if (useRegex) {
      //正規表現検索
      try {
        const regex = RegExp(keyword)
        setFilteredArts(Arts.data
          .filter((e: ArtData) => regex
            .test(e.tags.join(""))
              || keyword === ""))
        setIsRegexInvalid(false)
      } catch (error) {
        //正規表現エラー
        setIsRegexInvalid(true)
      }
    }
    else {
      //正規表現なし検索
      const filteredData = Arts.data.filter((art: ArtData) => {
        return translatedList.every((k: string) => {
          // マイナス検索
          if (k.startsWith('-')) {
            const tagToExclude = k.substring(1);
            return !art.tags.includes(tagToExclude);
          }
          // 範囲ナンバー検索
          if (k.match(/^\.[0-9]*\-[0-9]*$/)) {
            const [start, end] = k.substring(1).split('-').map(Number);
            return start <= art.no && art.no <= end;
          }
          // ナンバー検索
          if (k.match(/^\.[0-9]*$/)) {
            const singleTargetNumber = Number(k.substring(1));
            return art.no === singleTargetNumber;
          }
          // 通常検索
          return art.tags.includes(k);
        }) || keyword === '';
      });
      setFilteredArts(filteredData);
    }
  }, [keyword, useRegex])

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" onChange={(e) => {setKeyword(e.target.value)}} placeholder="Search..." isInvalid={isRegexInvalid} />
        <Button variant={filteredArts.length == 0 ? "danger" : "secondary"} disabled >件数▼{filteredArts.length}</Button>
      </Stack>
      <Stack direction="horizontal" gap={3}>
        <Form.Check onClick={(e) => setUseRegex(Boolean(e.target.checked))} label="正規表現を使う" />
      </Stack>
      <hr />
      
      <InfiniteScrollArts showArts={showArts} setShowArts={setShowArts} page={page} setPage={setPage} filteredArts={filteredArts}/>
    </>
  )
}

export default ArtTable;
