import "./App.css";

function Hello(props) {
  return (
    <div>
      <p>hello world</p>
      <p>
        {props.name} is {props.age} years old
      </p>
    </div>
  );
}

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "";
  const age = 32;
  console.log(now, a + b);
  return (
    <div>
      <p>{now.toString()}</p>
      <div>
        <p>
          {a} plus {b} is {a + b}{" "}
        </p>
      </div>
      <Hello name={("Emma")} age={age} />
    </div>
  );
}

export default App;
