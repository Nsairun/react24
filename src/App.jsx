import "./App.css";
import { useState } from "react";

function Hello(props) {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>hello world</p>
      <p>
        {props.name} is {props.age} years old
      </p>
      <p>so i was probably born in {bornYear()}</p>
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState(0)
  const [ allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)

  const handleClick = () => {
    setAllClicks(allClicks?.concat('right'))
     setCounter(counter +1)
  }
  const handleReduction = () => {
    setAllClicks(allClicks?.concat('left'))
    setCounter(counter -1)
  }
  const handleClearClicks = () => {
    setAllClicks(allClicks(''))
  }

  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "";
  const age = 32;
  const list = [{name: 'EMMANU', age: 20}]
  const subList = ['conquer this shit ', 'lkfwnlfeno']
  console.log(now, a + b);
  return (
    <div>
      <p>{now.toString()}</p>
      <div>
        <button onClick={handleClick}>
          +
        </button>
        <p>{counter}</p>
        <p>{allClicks.join(' ')}</p>
        <button onClick={handleReduction}>-</button>
        <p>
          {a} plus {b} is {a + b}{" "}
        </p>
        <button onClick={handleClearClicks}>clear clicks</button>
      </div>
      <Hello name={("Emma")} age={age} />
      <p>{list[0].name} {list[0].age}</p>
      <p>{subList[0]}</p>
    </div>
  );
}

export default App;
