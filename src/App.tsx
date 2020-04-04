import React from "react";
import { Store } from "./Store";

import { Link } from "@reach/router";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function App(props:any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">{state.favorites.length} episode(s) favorited.</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  )
}
