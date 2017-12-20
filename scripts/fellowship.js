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
  let newSection = document.createElement('section');
  newSection.id = 'middle-earth';
   
   // add each land as an `article` tag
   for(let i=0; i < lands.length; i++){
    let newArticle = document.createElement('article')
    newArticle.setAttribute('id', 'lands[i]')
   // inside each `article` tag include an `h1` with the name of the land
   let headTag = document.createElement('h1')
   headTag.innerText = lands[i]
   // append `middle-earth` to your document `body`
   newSection.appendChild(newArticle)
   newArticle.appendChild(headTag);
 }
 document.body.appendChild(newSection)
};
makeMiddleEarth();


var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   let ul = document.createElement('ul')
   for(let i=0; i<hobbits.length; i++){
    let newHobbit = document.createElement('li');
    newHobbit.innerText = hobbits[i];
    newHobbit.classList.add('hobbit');
    ul.appendChild(newHobbit);
      // (which is the second article tag on the page)
   }
   // give each hobbit a class of `hobbit`
   document.getElementsById('The Shire').appendChild(newList)
};

makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'
   let div = document.createElement('div');
   div.setAttribute('id', 'the-ring')
   // give the div a class of `'magic-imbued-jewelry'`
   div.classList.add('magic-imbued-jewelry')
   // add the ring as a child of `Frodo`
   let frodo = document.getElementsByClassName('hobbit')[0]
   frodo.appendChild(div)
};

var makeBuddies = function () {
   // create an `aside` tag
   let newAside = document.createElement('aside');

   // attach an `unordered list` of the `'buddies'` in the aside
   let buddyList = document.createElement('ol');
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


var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   hobbitList = document.getElementsByClassName('hobbit');
   console.log(hobbitList);
  let newList = document.createElement('ul');

   for(i = hobbitList.length - 1; i >= 0; i--){
     console.log(hobbitList[i])
     newList.appendChild(hobbitList[i])
   }
   document.getElementById('Rivendell').appendChild(newList)
};
leaveTheShire(); 


+var forgeTheFellowShip = function () {
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

var theBalrog = function () {
    // change the `'Gandalf'` text to `'Gandalf the White'`


   let gandalf = document.getElementsByTagName('li')[8]
   gandalf.innerText = "Gandalf the White";
   console.log(gandalf)
   gandalf.style.backgroundColor = "white"
   gandalf.style.border = "2px solid grey"
};
theBalrog();


var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert("The horn of gondor has been blown");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
  console.log(document.getElementsByTagName('li')[4].remove()) 
};
hornOfGondor();

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   document.getElementById('Mordor').appendChild(document.getElementsByClassName('hobbit')[0])
   document.getElementById('Mordor').appendChild(document.getElementsByClassName('hobbit')[0])
   // add a div with an id of `'mount-doom'` to `Mordor`
   let newDiv = document.createElement('div');
   newDiv.classList.add('mount-doom');
   document.getElementById('Mordor').appendChild(newDiv);
};
itsDangerousToGoAlone();



var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   let newDiv = document.createElement('div');
   newDiv.id = 'gollum'
   document.getElementById('Mordor').appendChild(newDiv);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   document.getElementById('gollum').appendChild(document.getElementById("the-ring"))
   // Move Gollum into Mount Doom
   document.getElementsByClassName('mount-doom')[0].appendChild(document.getElementById('gollum'));
};
weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   document.getElementById('gollum').remove()
   // Move all the `hobbits` back to `the shire`
   let hobbitList = document.getElementsByClassName('hobbit')
   console.log(hobbitList)
     for(let i = 0; i < hobbitList.length; i++){
       document.getElementById('The Shire').appendChild(hobbitList[i])
     }
};
thereAndBackAgain();

 // remove `Gollum` and `the Ring` from the document
 document.getElementById('gollum').remove()

 // Move all the `hobbits` back to `the shire`
 let hobbitList = document.getElementsByClassName('hobbit')
 console.log(hobbitList)

 for(let i = 0; i < hobbitList.length; i++){
   document.getElementById('The Shire').appendChild(hobbitList[i])
 }
 };
 thereAndBackAgain();




