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


