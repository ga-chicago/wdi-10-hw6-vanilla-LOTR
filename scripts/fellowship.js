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

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   let middleEarth = document.createElement("section");
   middleEarth.setAttribute("id", "middle-earth")
   console.log(middleEarth)
   // add each land as an `article` tag
   for(let i = 0; i < lands.length; i++){
   		let landArticle = document.createElement("article");
   		console.log(landArticle);
   		landArticle.innerHTML = "<h1>" + lands[i] + "</h1>";
   		document.body.appendChild(landArticle)
   }
   // inside each `article` tag include an `h1` with the name of the land


   // append `middle-earth` to your document `body`
   document.body.appendChild(middleEarth);
};

makeMiddleEarth();


