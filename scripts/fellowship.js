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
   let newSection = document.createElement('section');
   newSection.id = 'middle-earth';
   
   // add each land as an `article` tag
   for(i = 0; i < lands.length; i++){
   	let newArticle = document.createElement('article');
   	newArticle.id = lands[i]
   	
   	// inside each `article` tag include an `h1` with the name of the land
   	let newHTag = document.createElement('h1');
   	newHTag.innerText = lands[i];
   	
   	newSection.appendChild(newArticle);
   	newArticle.appendChild(newHTag);
   }

   document.body.appendChild(newSection)
   
   // append `middle-earth` to your document `body`
};

makeMiddleEarth();