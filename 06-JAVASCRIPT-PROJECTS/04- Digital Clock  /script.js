let time = document.querySelector('#time')
let timeFormet = document.querySelector('#timeformet')

function updateClock() {
  let date = new Date()
  let hr = date.getHours()
  let getHours12 = hr % 12 || 12
  let mins = date.getMinutes()
  let sec = date.getSeconds()

  getHours12 = getHours12 < 10 ? `0${getHours12}` : getHours12
  mins = mins < 10 ? `0${mins}` : mins
  sec = sec < 10 ? `0${sec}` : sec
  time.textContent = `${getHours12} : ${mins} : ${sec}`
  timeFormet.textContent = hr < 12 ? 'AM' : 'PM'
}
updateClock()

setInterval(updateClock, 1000)

