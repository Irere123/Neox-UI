import React from "react";

import Channels from "../components/kousa/Channels";
import Teams from "../components/kousa/Teams";

export default class Sidebar extends React.Component {
  render() {
    return [<Teams />, <Channels />];
  }
}
