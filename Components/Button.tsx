import * as React from "react";

interface IButton {}
export default function Button(props) {
  return <button className="button">{props.children}</button>;
}
