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


var makeHobbits = function () {
	// display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
  let newList = document.createElement('ul');
  for (i = 0; i < hobbits.length; i++){
  	let newHobbit = document.createElement('li');
  	newHobbit.innerText = hobbits[i];
  	newHobbit.classList.add('hobbit');
  	newList.appendChild(newHobbit);	
  }
   document.getElementById('The Shire').appendChild(newList)
};
makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   let newDiv = document.createElement('div');
   newDiv.id = 'the-ring';
   // give the div a class of `'magic-imbued-jewelry'`
   newDiv.classList.add('magic-imbued-jewelry');
   // add the ring as a child of `Frodo`
   let frodo = document.getElementsByClassName('hobbit')[0];
   frodo.appendChild(newDiv);
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   let newAside = document.createElement('aside');

   // attach an `unordered list` of the `'buddies'` in the aside
   let buddyList = document.createElement('ol');
   		for(i = 0; i < buddies.length; i++){
   			let newBuddy = document.createElement('li');
   			newBuddy.innerText = buddies[i];
   			buddyList.appendChild(newBuddy);
		}
	newAside.appendChild(buddyList);
   // insert your aside as a child element of `rivendell`
   document.getElementById('Rivendell').appendChild(newAside);
};
makeBuddies()


var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   strider = document.getElementById('Rivendell').getElementsByTagName('li')[3]
   console.log(strider)
   strider.innerText = "Aragorn"
};
beautifulStranger();














