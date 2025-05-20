import React from "react";
import "./styles/styles.css";
import Card from "./components/Card";
function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="title">Josh Grant</div>
        <div className="address">
          <div className="text1">Blog</div>
          <div className="text2">About</div>
          <div className="text3">Contact</div>
        </div>

        <div className="subTitle">Blog</div>

        <Card
          message1="Rediscovering the beauty in life's simple momonts"
          message2="November 10, 2024"
          line
        />

        <Card
          message1="The healing power of embracing silence"
          message2="November 9, 2024"
        />

        <Card
          message1="Finding connection in a disconnected world"
          message2="November 6, 2024"
        />

        <Card
          message1="The endless conversation between sea and stone"
          message2="November 5, 2024"
        />

        <Card
          message1="When luxury emerges from the shadows of san Francisco"
          message2="November 3, 2024"
        />

        <Card
          message1="Finding grace amidst life's unseen struggles"
          message2="November 1, 2024"
        />

        <Card
          message1="Embracing the simple pleasures of unplanned jounerys"
          message2="October 31, 2024"
        />

        <Card
          message1="Where solitude meets profound reflection"
          message2="October 28, 2024"
        />

        <Card
          message1="A window to nowhere and everywhere along the coast"
          message2="October 26, 2024"
        />

        <Card
          message1="The lasting connections that shape a neighborhood"
          message2="October 25, 2024"
        />
        <div className="footer"> Josh Grant</div>
        <div className="text"> Poetic reflections on life's wonders</div>
      </div>
    </div>
  );
}

export default App;
