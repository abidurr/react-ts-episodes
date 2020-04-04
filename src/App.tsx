import React from "react";
import { Store } from "./Store";

import { Link } from "@reach/router";

export default function App(props:any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </div>
        <div style={{}}>
          <h2>
          <Link to="/">Home</Link>
          {"   "}
          <Link to="/faves"> Favorites ({state.favorites.length})</Link>
          </h2>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  )
}
