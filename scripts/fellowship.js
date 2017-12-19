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
   // add each land as an `article` tag
   for(let i = 0; i < lands.length; i++){
   		let landArticle = document.createElement("article");
   		landArticle.innerHTML = "<h1>" + lands[i] + "</h1>";
   		middleEarth.appendChild(landArticle)
   }
   // inside each `article` tag include an `h1` with the name of the land


   // append `middle-earth` to your document `body`
   document.body.appendChild(middleEarth);
};

makeMiddleEarth();
console.log("")

// Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // /html/body/article[1]
   let newUl = document.createElement("ul");
   let path = document.querySelector("article");
   path.appendChild(newUl);
   let pathUl = document.querySelector("ul");

   for(let x = 0; x < hobbits.length; x++){
   	let newli = document.createElement("li");
   	newli.className = "hobbit";
   	newli.innerHTML = hobbits[x];
   	pathUl.appendChild(newli);
   }
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};
makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   let divTheRing = document.createElement("div");
   divTheRing.id = "the-ring";
   // give the div a class of `'magic-imbued-jewelry'`
   divTheRing.className = "magic-imbued-jewelry";
   // add the ring as a child of `Frodo`
   let frodo = document.querySelector("li");
   frodo.appendChild(divTheRing);
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   let newAside = document.createElement("aside");
   // attach an `unordered list` of the `'buddies'` in the aside
   let newBuddiesUl = document.createElement("ul");
   for (var i = 0; i < buddies.length; i++) {
   		let buddyLi = document.createElement("li");
   		buddyLi.innerText = buddies[i];
   		newBuddiesUl.appendChild(buddyLi);
   };
   // insert your aside as a child element of `rivendell`
   //*[@id="middle-earth"]/article[2]
   let output = document.querySelector("#middle-earth");
   let output2 = output.getElementsByTagName("article");
   output2[1].appendChild(newBuddiesUl);
};

makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   let liArray = document.getElementsByTagName("li"); 
   liArray[7].innerText = "Aragon";
};

beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   let hobbitArray = document.getElementsByTagName("ul")[0];
   let hobbitUl = document.getElementsByTagName("article");
   hobbitUl[1].appendChild(hobbitArray);
};

leaveTheShire();


var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   let theFellowShip = document.createElement("div");
   theFellowShip.setAttribute("id", "the-fellowship");
   let rivendell = document.getElementsByTagName("article")[1];
   rivendell.appendChild(theFellowShip);
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   for (var i = 0; i < hobbits.length; i++) {
   		let hobbit = document.createElement("p");
   		hobbit.innerHTML = hobbits[i];
   		theFellowShip.appendChild(hobbit);
   		// alert(hobbits[i] + " has joined the party");
   };
   for (var i = 0; i < buddies.length; i++) {
   		let buddy = document.createElement("p");
   		buddy.innerHTML = buddies[i];
   		theFellowShip.appendChild(buddy);
   		// alert(buddies[i] + " has joined the party");
   };
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   let gan = document.getElementsByTagName("li");
   gan[2].innerText = "Gandalf the White";
   gan[2].style.background = "white";
   gan[2].style.border = "grey";
   // apply the following style to the element, make the // background 'white', add a grey border
};

theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert("The Horn of gondor has been blown");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   let boro = document.getElementsByTagName("p");
   let path = document.querySelector("#the-fellowship");
   path.removeChild(boro[boro.length-1])
};

hornOfGondor()

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // they never made it to the fellowship
   // add a div with an id of `'mount-doom'` to `Mordor`
   let path = document.querySelector("#the-fellowship");
   let hobbitToDelete = path.getElementsByTagName("p");
  
   let doom = document.createElement("div");
   doom.setAttribute("id", "mount-doom");
   let mordor = document.getElementsByTagName("article")[2];
   mordor.appendChild(doom);
   doom.appendChild(hobbitToDelete[0]);
   doom.appendChild(hobbitToDelete[1]);
};

itsDangerousToGoAlone();

 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   let gollum = document.createElement("div");
   gollum.setAttribute("id", "gollum");
   let mordor = document.getElementsByTagName("article")[2];
   mordor.appendChild(gollum);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   let gollumsDiv = document.querySelector("#gollum");
   let ring = document.querySelector("#the-ring")
   gollumsDiv.appendChild(ring);
   // Move Gollum into Mount Doom
   let doom = document.querySelector("#mount-doom");
   doom.appendChild(gollumsDiv);

};

weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   let gollum = document.querySelector("#gollum");
   let doom = document.querySelector("#mount-doom");
   doom.removeChild(gollum);
   // Move all the `hobbits` back to `the shire`
   let shire = document.getElementsByTagName("article")[0];
   let doomhobbits = document.querySelector("#mount-doom");
   let hobbits = doomhobbits.getElementsByTagName("p")[0];
   let hobbits2 = doomhobbits.getElementsByTagName("p")[1];

   shire.appendChild(hobbits); 
   shire.appendChild(hobbits2);
};

thereAndBackAgain();



