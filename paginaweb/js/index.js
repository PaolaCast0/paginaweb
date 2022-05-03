var url ='https://api.nasa.gov/planetary/apod'
var key ='?api_key=XpOvDkdTN0TLcI8oLVWMe6IzSeSgatdiYiITV5Nq'
var date = '?date=2022-02-11'
var urlWithKey = url+key
var urlWithDate = url+date

fetch(urlWithKey)
.then(response => {
  console.log(response.json())
})

fetch(urlWithDate)
.then(response => {
  console.log(response.json())
})

var sign = prompt("Hola!, ingresa una fecha");

if (sign.toLowerCase() == "2022-05-03") {
  alert(urlWithDate);
}
