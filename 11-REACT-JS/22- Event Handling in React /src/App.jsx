import CardButton from "./components/CardButton";

function App() {
  function handleClick() {
    alert("Hello World");
  }

  function handleClick2(e) {
    console.log(e);
  }

  function handleClick3(name) {
    alert(name);
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => alert("Hello India")}>Click Me</button>
      <button onClick={() => handleClick3("Arshad")}>Click Me</button>

      <CardButton />
    </>
  );
}

export default App;
