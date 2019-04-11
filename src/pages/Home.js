import React from "react";

function HomePage(props) {
  return (
    <div className="HomePage">
      <h2>{props.name}</h2>
      <h2>T-rex Scans 2.1</h2>
      <p>A multilingual scanlation group.</p>
      <embed src="https://img.shields.io/discord/518583314710528005.svg?style=badge" />
    </div>
  );
}

export default HomePage;
