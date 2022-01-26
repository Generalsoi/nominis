import React, { useState } from "react";
import "./Nominis.css";
import Header from "../Header/Header";
import Icon3 from "../Assets/Images/Icono3.png";
import ClickButton from "../ClickButtons/ClickButton";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const word = "I brush my teeth.";
const wordList = word.split(" ");
const newWordList = shuffle(wordList);

const Nominis = () => {
  const [content, setContent] = useState(" ");
  const [reset, setReset] = useState(false);

  return (
    <div className="nominis">
      <Header />

      <div className="nominis-content-heading">
        <h3>Let's practice</h3>

        <div className="nominis-content">
          <div>
            <p>
              Put the words in order to make <br /> a correct sentence
            </p>
          </div>

          <div>
            <div
              onClick={() => {
                setContent(" ");
                setReset(true);
              }}
            >
              <img src={Icon3} alt="Icon3" />
            </div>
            <div className="input-bar">{content}</div>
          </div>
        </div>

        <div className="word-list">
          <div className="word-list-div">
            {newWordList.map((el, index) => (
              <ClickButton
                key={index}
                textContent={el}
                setContent={setContent}
                content={content}
                reset={reset}
                setReset={setReset}
              />
              // <div onClick={() => setContent(content + " " + el)}>{el}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nominis;
