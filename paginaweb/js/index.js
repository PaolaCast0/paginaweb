var url ='https://api.nasa.gov/planetary/apod'
var key ='?api_key=XpOvDkdTN0TLcI8oLVWMe6IzSeSgatdiYiITV5Nq'
var urlWithKey = url+key

var sign = prompt("Hola!, ingresa una fecha");
var date = '&date='+sign
var urlWithSign = urlWithKey+date

if (sign.toLowerCase() == "2022-05-03") {
  alert(urlWithDate);
}

fetch(urlWithSign)
.then(response => {
  console.log(response.json())
})
