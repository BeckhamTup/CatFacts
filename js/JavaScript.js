const ul = document.getElementById('cats'); // Get the list where we will place our authors
const url = 'https://cat-fact.herokuapp.com/facts'; 
//runs scripts inside on site load


window.onload = function ()
{
 fetchData()
 
}



function fetchData(){
fetch('https://cat-fact.herokuapp.com/facts')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		appendData(data);
	})
	.catch(function (err) {
		console.log('error: ' + err);
	}).catch(function (error){
		console.error('Something went wrong!');
		console.error(error);
	});
}

function appendData(data) {
	console.log(data);
	var mainContainer = document.getElementById("cardContainer");
	//var MostUpvotes = getMostUpvotes(data);
	//var newdata = sortedData(MostUpvotes, data);
	for (var i = 0; i < 5; i++) {
		var Break = document.createElement("br");
		var Header = document.createElement("div");
		Header.classList.add("card-header");
		var cardBody = document.createElement("div");
		cardBody.classList.add("card-body");
		var Footer = document.createElement("div");
		Footer.classList.add("card-footer");
		var card = document.createElement("div");
		card.classList.add("card");
		card.classList.add("bg-dark");
		card.classList.add("text-white");
		Header.innerHTML = data.all[i].user.name.first + " " + data.all[i].user.name.last;
		cardBody.innerHTML = data.all[i].text;
		Footer.innerHTML = "Upvotes: " + data.all[i].upvotes;
		card.appendChild(Header);
		card.appendChild(cardBody);
		card.appendChild(Footer);
		mainContainer.appendChild(card);
		mainContainer.appendChild(Break)
	}
	
}

function bottomFunction() {
  document.body.scrollTop = 10000000; // For Safari
  document.documentElement.scrollTop = 1000000; // For Chrome, Firefox, IE and Opera
}
