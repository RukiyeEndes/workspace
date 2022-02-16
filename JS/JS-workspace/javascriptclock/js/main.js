
// get name
let fname = prompt("İsminiz :") 
let myName = document.querySelector("body>div>div.text1>strong>span#myName") 
myName.innerHTML = fname

// get date & hours
setInterval(showTime, 1000)
function showTime() {
    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    let day = time.getDay()

    hour = hour < 10 ? "0"+hour : hour
    minute = minute <10 ? "0"+minute : minute
    second = second <10 ? "0"+second : second
    const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

    switch(day){
        case 1:
            day = days[0]
            break
        case 2:
            day = days[1]
            break
        case 3:
            day = days[2]
            break
        case 4:
            day = days[3]
            break
        case 5:
            day = days[4]
            break
        case 6:
            day = days[5]
            break
        case 7:
            day = days[6]
            break
    }

    let currentTime = hour + ":"+minute+":"+ second + " "+day
    document.getElementById("myClock").innerHTML = currentTime
}
showTime()
