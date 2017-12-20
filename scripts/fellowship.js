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

// Part 1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   let middleEarth = document.createElement('section');
   for (let i = 0; i < lands.length; i++) {
     // add each land as an `article` tag
     let article = document.createElement('article');
     // add an h1 tag to the article with the correct name
     let h1 = document.createElement('h1');
     h1.innerText = lands[i]
     article.appendChild(h1) 
     // append it to middleEarth
     middleEarth.appendChild(article);
   }
   // append `middle-earth` to your document `body`
   document.body.appendChild(middleEarth);
};

makeMiddleEarth();


// // Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // create a unordered list
   let ul = document.createElement('ul');
   for (let i = 0; i < hobbits.length; i++) {
      // create a list item for each hobbit
      let li = document.createElement('li');
      li.innerText = hobbits[i];
      // console.log(hobbits[i])
      // give each hobbit a class of `hobbit`
      li.className = 'hobbits'
      ul.appendChild(li);
      // console.log(ul)
   }
   // get the Shire
   let theShire = document.querySelector('article')
   // console.log(theShire)
   // console.log(theShire)
   // append the hobbits list to the shire
   theShire.appendChild(ul);
};

makeHobbits()

// Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   let theRing = document.createElement('div');
   // give the div a class of `'magic-imbued-jewelry'`
   theRing.className = 'magic-imbued-jewelry';
   // add the ring as a child of `Frodo`
   // get frodo
   let frodo = document.querySelector('li');
   // console.log(frodo);
   frodo.appendChild(theRing);
};

keepItSecretKeepItSafe()

// Part 4
var makeBuddies = function () {
   // create an `aside` tag
   let aside = document.createElement('aside')
   // attach an `unordered list` of the `'buddies'` in the aside
   let ul = document.createElement('ul')
   for (let i = 0; i < buddies.length; i++) {
      let li = document.createElement('li')
      li.innerText = buddies[i]
      ul.appendChild(li)
   }
   aside.appendChild(ul)
   // get rivendell
   let lands = document.getElementsByTagName('article')
   // console.log(lands)
   let rivendell = lands[1]
   // console.log(rivendell)
   rivendell.appendChild(aside);
   // insert your aside as a child element of `rivendell`
};

makeBuddies()

// Part 5
var beautifulStranger = function () {
    // get rivendell
    let lands = document.getElementsByTagName('article')
    let rivendell = lands[1]
    // console.log(rivendell)
    // get the buddies list
    let buds = rivendell.getElementsByTagName('li')
    // find strider and make him aragorn
    buds[3].innerText = 'Aragorn'
    // console.log(buds[3])
};

beautifulStranger()

// Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   // get the lands of middle earth
   let lands = document.getElementsByTagName('article');
   // console.log(lands)
   // get the shire
   let theShire = lands[0];
   // console.log(theShire)
   // get rivendell
   let rivendell = lands[1];
   // console.log(rivendell)
   // get the hobbits
   let hobbits = theShire.querySelector('ul')
   // console.log(hobbits)
   // console.log(typeof hobbits)
   rivendell.appendChild(hobbits)
};

leaveTheShire()

// Part 7
var forgetTheFellowShip = function () {
   // create `'the-fellowship'` 
   let theFellowship = document.createElement('div')
   theFellowship.innerText = 'the Fellowship'
   // get rivendell
   let lands = document.querySelectorAll('article')
   let rivendell = lands[1]
   // console.log(rivendell)
   // get the buddies and the hobbits
   let partyMembers = rivendell.querySelectorAll('ul')
   // console.log(partyMembers)
   let hobbits = partyMembers[1]
   // console.log(hobbits)
   let buddies = partyMembers[0]
   // console.log(buddies)
   // console.log(typeof buddies)
   theFellowship.appendChild(hobbits)
   theFellowship.appendChild(buddies)
    // after each character is added make an alert that they // have joined your party
   for(let i = 0; i < theFellowship.querySelectorAll('li').length; i++) {
      alert(theFellowship.querySelectorAll('li')[i].innerText + ' has joined the party!')
   }
   // console.log(theFellowship)
   // console.log(typeof theFellowship)
   rivendell.appendChild(theFellowship);
};

forgetTheFellowShip();

// Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   let lands = document.querySelectorAll('article')
   let rivendell = lands[1]
   // console.log(rivendell)
   let theFellowship = rivendell.querySelector('div')
   // console.log(theFellowship)
   let fellowshipArray = theFellowship.querySelectorAll('ul')
   // console.log(fellowshipArray)
   let buddies = fellowshipArray[1]
   // console.log(buddies)
   let gandalf = buddies.querySelector('li')
   // console.log(gandalf)
   // apply the following style to the element, make the // background 'white', add a grey border
   gandalf.innerText = 'Gandalf the White'
   gandalf.style = "background-color: white; border: 1px solid grey"
};

theBalrog();

// Part 9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert('The Horn of Gondor has been blown!')
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   let rivendell = document.querySelectorAll('article')[1]
   let theFellowship = rivendell.querySelector('div')
   let buddies = theFellowship.querySelectorAll('ul')[1]
   let boromir = buddies.querySelectorAll('li')[4]
   // console.log(boromir)
   buddies.removeChild(boromir)

};

hornOfGondor()

// Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // get Frodo and Sam
   let rivendell = document.querySelectorAll('article')[1]
   let theFellowship = rivendell.querySelector('div')
   let hobbits = theFellowship.getElementsByClassName('hobbits')
   // console.log(hobbits)
   let frodo = hobbits[0]
   // console.log(frodo)
   let sam = hobbits[1]
   // console.log(sam)
   // get Mordor
   let mordor = document.querySelectorAll('article')[2]
   // console.log(mordor)
   mordor.appendChild(frodo)
   mordor.appendChild(sam)
   // add a div with an id of `'mount-doom'` to `Mordor`
   let mountDoom = document.createElement('div')
   mountDoom.innerText = 'Mount Doom'
   mordor.appendChild(mountDoom)
};

itsDangerousToGoAlone()

// Part 11
 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // make gollum
   let gollum = document.createElement('div')
   gollum.innerText = 'Gollum'
   // get mordor
   let mordor = document.querySelectorAll('article')[2]
   // move gollum to mordor
   mordor.appendChild(gollum)
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // get frodo
   let frodo = mordor.getElementsByClassName('hobbits')[0]
   // console.log(frodo)
   // get Frodos ring
   let theOneRing = frodo.querySelector('div')
   // console.log(theOneRing)
   gollum.appendChild(theOneRing)
   // Move Gollum into Mount Doom
   let mountDoom = mordor.querySelector('div')
   // console.log(mountDoom)
   mountDoom.appendChild(gollum)
};

weWantsIt()

// Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // get gollum
   let mordor = document.querySelectorAll('article')[2]
   let mountDoom = mordor.querySelector('div')
   let gollum = mountDoom.querySelector('div')
   // console.log(gollum)
   mountDoom.removeChild(gollum)
   // Move all the `hobbits` back to `the shire`
   // get the hobbits
   let frodo = mordor.querySelectorAll('li')[0]
   let sam = mordor.querySelectorAll('li')[1]
   let rivendell = document.querySelectorAll('article')[1]
   let theFellowship = rivendell.querySelector('div')
   let hobbits = theFellowship.getElementsByClassName('hobbits')
   let merry = hobbits[0]
   let pip = hobbits[1]
   // console.log(frodo)
   // console.log(sam)
   // console.log(hobbits)
   // get the shire
   let theShire = document.querySelectorAll('article')[0]
   // put the hobbitses back in the shire
   // I could have done this much faster with a for loop:
   theShire.appendChild(frodo)
   theShire.appendChild(sam)
   theShire.appendChild(merry)
   theShire.appendChild(pip)
};

thereAndBackAgain()

console.log(document);










