var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

planets.reverse();

var select = document.getElementById('planets');
var input = document.getElementById('user-weight');
var button = document.getElementById('calculate-button');
var output = document.getElementById('output');

planets.forEach(function(planets){
    var name = (planets[0]);
    var option = document.createElement('option');
    option.text = name;
    select.appendChild(option);    
})

var userWeight;
var planetName;

function calculateWeight(weight,planet){ //passing in weight and planet from line 43
    for (var i = 0; i<planets.length; i++){
        if (planets[i][0] === planetName)
        return (weight * planets[i][1]);
        console.log(planets[i][1]);
    }
}

function handleClickEvent() {
    userWeight = input.value;
    planetName = select.value;
    var result = calculateWeight(userWeight, planetName);
    output.innerHTML = 'If you were on '+ planetName +', you would weigh ' + result + 'lbs!';
    }
