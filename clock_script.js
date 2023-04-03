var hour = document.querySelector(".hour");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");


// var dateid = document.querySelector(".date");
// const da=new Date();
// var day=da.getDate();
// let options2={month:'long'}
// var month1=da.toLocaleDateString("en-US",options2);
// var year = da.getUTCFullYear();
// let options = { weekday: 'short' }; 
// let weekday1 = da.toLocaleDateString('en-US', options); 

// let fulldate=","+day+" "+month1;
// dateid.innerHTML=fulldate;

var dot = document.querySelector(".dot");
var dot2 = document.querySelector(".dot2");
var tick = true;
var tick1 = false;

function updateTime() {
  const d =new  Date();

  hour.innerHTML = d.getHours();
  min.innerHTML = d.getMinutes();
  sec.innerHTML = d.getSeconds();
    // if (tick === true) {
    //   dot.classList.add("white_dot");
    //   dot.classList.remove("dot");
    //   tick = !tick;
    // } 
    // else {
    //   dot.classList.add("dot");
    //   dot.classList.remove("white_dot");
    //   tick = !tick;
    // }
    // if (tick === true) {
    //   dot2.classList.add("dot2");
    //   dot2.classList.remove("white_dot");
    //   tick1 = !tick1;
    // } else {
    //   dot2.classList.add("white_dot");
    //   dot2.classList.remove("dot2");
    //   tick1 = !tick1;
    // }
}

setInterval(updateTime, 1000);


// const options8 = {
// 	method: 'GET',
	// headers: {
		// 'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		// 'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
	// }
// };
// let api_key="3nMt5qfVeG66nzSb5J4jETtS62beB4xb";
fetch( "https://www.7timer.info/bin/astro.php?lon=77.1&lat=28.7&ac=0&unit=metric&output=json" ,{method: 'GET'})
	.then(response => response.json())
	.then(data => console.log(data.dataseries[0].temp2m))
	.catch(err => console.error(err));

