import React from "react";
import "./Nominis.css";
import Header from "../Header/Header";
import Icon3 from "../Assets/Images/Icono3.png";

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

const Nominis = () => {
  const word = "I brush my teeth";
  const wordList = word.split(" ");
  const newWordList = shuffle(wordList);

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
            <div>
              <img src={Icon3} alt="Icon3" />
            </div>
            <div className="input-bar"></div>
            <div className="word-list-div">
              {newWordList.map((el) => (
                <div>{el}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nominis;
