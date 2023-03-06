import { createContext, useEffect, useState } from "react"
import parse from "rss-to-json"
import parseHtml from "html-react-parser"


export async function getServerSideProps () {

  const data = await parse('https://medium.com/feed/@ngodingo.team')
  .then(rss => JSON.stringify(rss))

  return {
    props: {
      data
    }
  }
}
 
export default function Test ({data}) {
  const dd = JSON.parse(data)
  // console.log(dd)

  return (
    <>
    <div>hello world</div>
    {/* {parseHtml(dd.items[0].content)} */}
    {dd.items.map((e,i) => (
      <div key={i}>{parseHtml(e.content)}</div>
    ))}
    </>
  )
}