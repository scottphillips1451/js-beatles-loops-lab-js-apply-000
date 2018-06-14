var names = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["guitar", "bass", "guitar", "drums"];

console.log(names)
console.log(instruments)

function theBeatlesPlay(member, instrument){
  var descriptions = [];
  for (var i = 0; i < member.length; i++) {
    descriptions[i] = member[i] + ' plays ' + instrument[i];
  }
  return descriptions;
}

const notesOfInterest = [
  "He wrote Imagine.",
  "He was never a vegetarian.",
  "He was killed in 1980.",
  "He was a choir boy and boy scout."
  ];

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] += "!!!";
    i++;
  }
  
}
