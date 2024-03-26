import { useEffect, useState } from "react";

import { letters } from "./helpers/letters";
import { getRandomWord } from "./helpers/getramdomword";
import { Hanglimage } from "./componentes/Hanglmage";

import "./App.css";

function App() {
  const [word, setWord] = useState(getRandomWord());

  const [hiddenWord, setHiddenWord] = useState("_ ".repeat(word.length));
  const [attempts, setAttempts] = useState(0);

  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(" ").join("");

    if (currentHiddenWord === word) {
      setWon(true);
    }

    console.log(word);
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if (lose) return;
    if (won) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));

      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(" "));
  };
  const newGame = () => {
    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord("_ ".repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);

    console.log("new Game");
  };

  return (
    <div className="app">
      {/* imagenes */}
      <Hanglimage imagenumber={attempts} />

      {/* palabra oculta */}
      <h4>{hiddenWord}</h4>

      {/* contador 20*/}
      <h3>intentos: {attempts}</h3>

      {lose ? <h2>PERDISTE: {word} </h2> : ""}
      {won ? <h2>FELCIDADES GANASTE! </h2> : ""}

      {/* botones de letras */}
      {letters.map((letter) => (
        <button onClick={() => checkLetter(letter)} key={letter}>
          {letter}
        </button>
      ))}

      <br />
      <br />
      <button onClick={() => newGame()}>¿REINICIAR?</button>
    </div>
  );
}

export default App;
