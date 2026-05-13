const Contact = () => {
    const handleFormSubmit = (fromData)=> {
        // console.log(fromData);
        const fromInputData = Object.fromEntries(fromData.entries())
        console.log(fromInputData);

    }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper">
        <form action={handleFormSubmit}>
          <input
            className="from-control"
            type="text"
            required
            placeholder="Enter Name"
            autoComplete="off"
            name="username"
          />
          <input
            className="from-control"
            type="email"
            required
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
          />
          <textarea
            className="from-control"
            name="message"
            rows="10"
            placeholder="Enter Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}
export default Contact
