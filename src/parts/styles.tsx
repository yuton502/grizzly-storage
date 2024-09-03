import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const pageStyle: React.CSSProperties = {
  color: "#232129",
  padding: "0%",
  fontFamily: "Varela Round, Kosugi Maru, -apple-system, sans-serif, serif",
}

export const changeFont: React.CSSProperties = {
  fontFamily: "Fredoka One, Impact, sans-serif"
}

export const noBreak: React.CSSProperties = {
  marginBottom: "0em",
}

export const NoBreakP = (props: any) => {
  return <p style={noBreak}>{props.children}</p>
}

export const largeBreak: React.CSSProperties = {
  marginBottom: "2em",
}

export const LargeBreakP = (props: any) => {
  return <p style={largeBreak}>{props.children}</p>
}

export const center: React.CSSProperties = {
  textAlign: "center"
}

export const left: React.CSSProperties = {
  textAlign: "left"
}

export const paddingPosition: React.CSSProperties = {
  padding: "0% 10% 50px"
}

export const paddingNarrowPosition: React.CSSProperties = {
  padding: "0% 20% 50px"
}
