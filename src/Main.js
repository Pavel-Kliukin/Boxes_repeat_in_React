import React from "react";
import './Main.css';
import Box from './Box'

const Main = () => {
  return <main className="main">
    <Box name="Pavel" title="CEO" age="32" />
    <Box name="Ivan" title="Junior dev" age="21" />
    <Box name="Arseniy" title="Middle dev" age="36" />
  </main>
}

export default Main;