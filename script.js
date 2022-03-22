function showInfo() {
	totalDraw = document.getElementById('totalDraw').value;
	furnacePressure = document.getElementById('furnacePressure').value;
	recurpratorLeftMiddleTemp = document.getElementById('recurpratorLeftMiddleTemp').value;
	airToFuelRatio = document.getElementById('airToFuelRatio').value;
	NCV1 = document.getElementById('NCV1').value;
	NCV2 = document.getElementById('NCV2').value;

	var gfr = 0;
	var str = "";

	gfr = 1194.906072 -0.2282257906*totalDraw +0.00002882836045*NCV1 + 2.554248499*furnacePressure + 0.04317710689*recurpratorLeftMiddleTemp - 38.91042346*airToFuelRatio; 
	str += "<h2>Gas Flow Rate for Stream 1 = " + gfr + "<br></h2>";
	gfr = 1195.065239 -0.2278825172*totalDraw +0.00000851706215591783*NCV2 + 2.553379799*furnacePressure + 0.04311138584*recurpratorLeftMiddleTemp - 38.90752661*airToFuelRatio;
	str += "<h2>Gas Flow Rate for Stream 2 = " + gfr + "<br></h2>";
	
	document.getElementById('info').innerHTML = str;
	document.getElementById('inputInfo').style.display = "none";
	document.getElementById('outputInfo').style.display = "block";
}

// async function postData(url, data = {}) {
// 	// Default options are marked with *
// 	const response = await fetch(url, {
// 		method: 'POST', // *GET, POST, PUT, DELETE, etc.
// 		mode: 'cors', // no-cors, *cors, same-origin
// 		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// 		credentials: 'same-origin', // include, *same-origin, omit
// 		headers: {
// 		'Content-Type': 'application/json'
// 		// 'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		redirect: 'follow', // manual, *follow, error
// 		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// 		body: JSON.stringify(data) // body data type must match "Content-Type" header
// 	});
// 	return response; // parses JSON response into native JavaScript objects
//   }
  

function resetForm() {
	document.getElementById('inputInfo').style.display = "block";
	document.getElementById('outputInfo').style.display = "none";

	document.getElementById("inputForm").reset();
}

document.getElementById('outputInfo').style.display = "none";