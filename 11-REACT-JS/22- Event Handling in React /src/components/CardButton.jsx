function CardButton() {
  function handleClick(e) {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>

      <input type="text" onChange={handleChange} />

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default CardButton;
