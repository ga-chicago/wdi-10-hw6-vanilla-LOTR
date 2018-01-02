console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo-Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf-the-Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The-Shire', 'Rivendell', 'Mordor'];
var body = document.body;

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
  let middleEarth = document.createElement('section');
    // append `middle-earth` to your document `body`
    document.body.appendChild(middleEarth);
    // add id that says middle-earth
    middleEarth.setAttribute('id', 'middle-earth');
    middleEarth.innerHTML = "Middle Earth";


    // add each land as an `article` tag
  for(let i = 0; i<lands.length; i++) {
    // create article tags
     let article = document.createElement('article');
     // set article tag id to equal the land
     article.setAttribute('id',lands[i] );
     article.innerHTML = "Lands"

     // append article to middle earth section element
     document.getElementById('middle-earth').appendChild(article);
      // inside each `article` tag include an `h1` with the name of the land
      // (h1 is probably not the best thing to name a variable since it is a css thing)
      let h1 = document.createElement('h1');
      h1.innerHTML = lands[i];

      // append h1 to the corresponding land article element
      document.getElementById(lands[i]).appendChild(h1);
      // add id that says header and the name of the land
      //(I'm pretty sure this is not the best thing to make your id for a header)
      // (I'm not even sure headers are supposed to have tags)
      h1.setAttribute('id', "header" + " " + lands[i]);
  }






};

// document.getElementById("middle-earth")

makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire

   // make variable to store unordered list
   let hobbitsInTheShire = document.createElement('ul');

      // give hobbitsInTheShire an id
      hobbitsInTheShire.setAttribute('id', "Hobbits-in-the-Shire" );



      // append to body
      document.body.appendChild(hobbitsInTheShire);
   // give each hobbit a class of `hobbit`
   for(let i = 0; i<hobbits.length; i++) {
      let hobbit = document.createElement("li");
          // give hobbit an id
          hobbit.setAttribute('id', hobbits[i]);
          // append hobbit li to ul
          document.getElementById("Hobbits-in-the-Shire").appendChild(hobbit);
          hobbit.innerHTML = hobbits[i];
    }


};

makeHobbits();

var keepItSecretKeepItSafe = function () {
 // create a div with an id of `'the-ring'`
 let div = document.createElement('div');
    div.setAttribute('id', 'the-ring')
 // give the div a class of `'magic-imbued-jewelry'`
    div.setAttribute('class', 'magic-imbued-jewelry');
    div.innerHTML = "Magic-Imbued-Jewelry";


 // add the ring as a child of `Frodo`
    document.getElementById("Frodo-Baggins").appendChild(div);
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   let aside = document.createElement('aside');
   aside.setAttribute('id', 'aside')
   aside.innerHTMl = "buddies"

   // insert your aside as a child element of `rivendell`
   document.getElementById("Rivendell").appendChild(aside);
   // attach an `unordered list` of the `'buddies'` in the aside
   for(let i = 0; i<buddies.length; i++) {
      let buddiesList = document.createElement("li");
          // give hobbit an id
          buddiesList.setAttribute('id', buddies[i]);
          buddiesList.innerHTML = buddies[i];


          // append hobbit li to ul
          document.getElementById('aside').appendChild(buddiesList);

    }
}

makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   let strider = document.getElementById("Strider");


   strider.setAttribute('id', 'Aragorn');
   strider.innerHTML = "Aragorn"


};
beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   let shire = document.getElementById("Hobbits-in-the-Shire");
   document.getElementById('Rivendell').appendChild(shire);
};
leaveTheShire();

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   let div = document.createElement("div");
   div.setAttribute("id", "the-fellowship");
   div.innerHTML = "The Fellowship"
   document.getElementById('Rivendell').appendChild(div)

   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   for(let i=0; i<hobbits.length; i++)
   {
     let hobbit = document.getElementById(hobbits[i]);


     document.getElementById("the-fellowship").appendChild(hobbit);
   }
   buddies[3]="Aragorn";
   for(let i=0; i<buddies.length; i++)
   {


     let buddyIndex = buddies[i]
    let buddy = document.getElementById(buddyIndex);


      let x =document.getElementById("the-fellowship")


    x.appendChild(buddy);
    }
   // after each character is added make an alert that they // have joined your party

};
forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   //let theWhite = document.getElementById('Gandalf the White');
   //let theGrey = document.getElementById('Gandalf');

   let x = document.getElementById('Gandalf-the-Grey')
   x.innerHTML = 'Gandalf the White';


   // apply the following style to the element, make the // background 'white', add a grey border
   //document.getElementById('Gandalf the White').style.background-color = "white";
   x.style.backgroundColor = "white";
   x.style.borderStyle = "groove";
};
theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert("The Horn of Gondor has been blown!");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
  let theFellowship =  document.getElementById('the-fellowship');
  let boromir = document.getElementById("Boromir");
   theFellowship.removeChild(boromir);
};
hornOfGondor();

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   let mordor = document.getElementById('Mordor')

   let frodo = document.getElementById('Frodo-Baggins')
   let sam = document.getElementById('Samwise \'Sam\' Gamgee')

   mordor.appendChild(frodo);
   mordor.appendChild(sam);
   // add a div with an id of `'mount-doom'` to `Mordor`
   let article = document.createElement("article");

   article.setAttribute('id','Mount-Doom')

   document.getElementById('Mordor').appendChild(article);
   article.innerHTML = "Mount Doom";
};
itsDangerousToGoAlone();


var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   let div = document.createElement("div");
   div.setAttribute("id", "Gollum")
   div.innerHTML = "Gollum"

   document.getElementById('Mordor').appendChild(div)
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   let theRing = document.getElementById('the-ring')
   let gollum = document.getElementById('Gollum')

   gollum.appendChild(theRing);


};
weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   let theRing = document.getElementById('the-ring')
   let gollum = document.getElementById('Gollum')
   let mordor = document.getElementById('Mordor')

   gollum.removeChild(theRing);
   mordor.removeChild(gollum);
   // Move all the `hobbits` back to `the shire`
   for(let i = 0; i<hobbits.length; i++){
   let hobbit = document.getElementById(hobbits[i]);

   let shire = document.getElementById('The-Shire');
   shire.appendChild(hobbit);

   }
};
thereAndBackAgain();
