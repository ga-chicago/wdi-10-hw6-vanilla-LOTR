console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;



//created makemiddleearth function that, when called, fills in missing pieces of middle earth
var makeMiddleEarth = function() {
	//creates a new section & gives it an id of 'middle-earth'
	let newSection = document.createElement('section');
	newSection.id = "middle-earth";
	//loops through the lands array, creating new article and h1 tags and appending them to the section
	for (let i = 0; i < lands.length; i++) {
		let tempArticle = document.createElement('article');
		let newLand = document.createElement('h1');
		newLand.innerHTML = lands[i];
		tempArticle.appendChild(newLand);
		newSection.appendChild(tempArticle);
	}
	//appends the entire section to the body of the document
	document.body.appendChild(newSection);
}































