const months = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2021, 0, 1, 0, 0, 00)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const weekday = days[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`

const futureTime = futureDate.getTime()

function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today

    const oneMinute = 60 * 1000
    const oneHour = oneMinute * 60
    const oneDay = oneHour * 24

    let secs = Math.floor((t % oneMinute) / 1000)
    let mins = Math.floor((t % oneHour) / oneMinute)
    let hours = Math.floor((t % oneDay) / oneHour)
    let days = Math.floor(t / oneDay)

    const values = [days, hours, mins, secs]

    items.forEach((item, index) => {
        if(values[index] < 10) {
            values[index] = `0${values[index]}`
        }
        item.innerHTML = values[index]
    })
}

setInterval(() => {
    getRemainingTime()
}, 1000)
