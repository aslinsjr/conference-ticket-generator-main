const form = document.querySelector("form")
const h1 = document.querySelector("h1")
const p = document.querySelector("p")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    h1.innerText = `Congrats, ${e.target.name.value} ! Your ticket is ready.`
    p.innerText = `We've emailed your ticket to ${e.target.email.value} and will send updates in the run up to the event.`


    form.innerHTML = `<img id="ticket" src="/assets/images/pattern-ticket.svg" alt="">
    <div id="info-container">
    <div class="logo">
    <img src="/assets/images/logo-mark.svg" alt="">
    <h2>Coding Conf</h2>
  </div>
  <p>Jan 31, 2025 / Austin, TX</p>
  </div>`

})