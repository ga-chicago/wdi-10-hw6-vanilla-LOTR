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
  let middleEarth = document.createElement('section');
    // append `middle-earth` to your document `body`
    document.body.appendChild(middleEarth);
    // add id that says middle-earth
    middleEarth.setAttribute('id', 'middle-earth');


    // add each land as an `article` tag
  for(let i = 0; i<lands.length; i++) {
    // create article tags
     let article = document.createElement('article');
     // set article tag id to equal the land
     article.setAttribute('id',lands[i] );

     // append article to middle earth section element
     document.getElementById('middle-earth').appendChild(article);
      // inside each `article` tag include an `h1` with the name of the land
      // (h1 is probably not the best thing to name a variable since it is a css thing)
      let h1 = document.createElement('h1');

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
   // the readme for this assignment said = (which is the second article tag on the page).  it's the fouth unless I'm doing it wrong
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
    }


};

makeHobbits();

var keepItSecretKeepItSafe = function () {
 // create a div with an id of `'the-ring'`
 let div = document.createElement('div');
    div.setAttribute('id', 'the-ring')
 // give the div a class of `'magic-imbued-jewelry'`
    div.setAttribute('class', 'magic-imbued-jewelry');



 // add the ring as a child of `Frodo`
    document.getElementById("Frodo Baggins").appendChild(div);
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   let aside = document.createElement('aside');
   aside.setAttribute('id', 'aside')

   // insert your aside as a child element of `rivendell`
   document.getElementById("Rivendell").appendChild(aside);
   // attach an `unordered list` of the `'buddies'` in the aside
   for(let i = 0; i<buddies.length; i++) {
      let buddiesList = document.createElement("li");
          // give hobbit an id
          buddiesList.setAttribute('id', buddies[i]);
          console.log(buddiesList);
          // append hobbit li to ul
          document.getElementById('aside').appendChild(buddiesList);

    }
}

makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   buddies[3]="Aragorn"
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
   document.getElementById('Rivendell').appendChild(div)
   console.log(div);
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   for(let i=0; i<hobbits.length; i++)
   {
     let hobbit = document.getElementById(hobbits[i]);
     document.getElementById("the-fellowship").appendChild(hobbit)
   }
   for(let i=0; i<buddies.length; i++)
   {
    let buddy = document.getElementById(buddies[i])
    document.getElementById("the-fellowship").appendChild(buddy)
   }
   // after each character is added make an alert that they // have joined your party

};
forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   let theWhite = document.getElementById('Gandalf the White');
   let theGrey = document.getElementById('Gandalf');
   theWhite.appendChild(theGrey);

   // apply the following style to the element, make the // background 'white', add a grey border
   //document.getElementById('Gandalf the White').style.background-color = "white";
   document.getElementById('Gandalf the White').style.border = "grey";
};
theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert("The Horn of Gondor has been blown!");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   node.removeChild(document.getElementById("Boromir"));
};
hornOfGondor();
