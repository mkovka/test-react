import React, { useState } from "react";
import "./colorme.scss";

const NumIcon = props => {
  return <div className={`num-${props.styleName}`}>{props.num}</div>;
};

function handleChange (value, func1, func2) {
  const patt = /^([1-9])$/g;
  if (value.match(patt)) {
    func2(Number(value));
    func1(false);
  } else {
    func1(true);
  }
};

export default function ColorMe() {
  const [num, setNum] = useState(0);
  const [inputNum, setInputNum] = useState(0);
  const [error, setError] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="colorme-container">
      <div>
        <input onChange={e => handleChange(e.target.value, setError, setInputNum)} />
        <button onClick={e => setNum(inputNum)}>Color Me</button>
        {error ? <p>Please input a number between 1-9</p> : null}
      </div>
      <div>
        {numbers.map((item, i) => (
          <NumIcon
            key={i}
            num={item}
            styleName={item === num ? "green" : "white"}
          />
        ))}
      </div>
    </div>
  );
}