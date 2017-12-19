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
   let buddyList = document.createElement('ul');
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
   // console.log(strider)
   strider.innerText = "Aragorn"
};
beautifulStranger();


var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   hobbitList = document.getElementsByClassName('hobbit');
   // console.log(hobbitList);
   let newList = document.createElement('ul');

   for(i = hobbitList.length - 1; i >= 0; i--){
   	// console.log(hobbitList[i])
   	newList.appendChild(hobbitList[i])
   }
   document.getElementById('Rivendell').appendChild(newList)
};
leaveTheShire();	


var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   let newDiv = document.createElement('div');
   newDiv.classList.add('the-fellowship');

   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   let listItems = document.getElementsByTagName('li');
   for(i = listItems.length - 1; i >= 0; i--){
   	alert(listItems[i] + " has joined your party")
   	newDiv.appendChild(listItems[i])
   }
   document.getElementById('Rivendell').appendChild(newDiv);
   // after each character is added make an alert that they // have joined your party
};
forgeTheFellowShip();


// var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`


   // apply the following style to the element, make the // background 'white', add a grey border
// };






















