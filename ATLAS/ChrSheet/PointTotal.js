const loadButton = document.getElementById('loadBtn')
const levelNum = document.getElementById('levelVal');
const pointsLeft = document.getElementById('pointsLeft');


var pointsTotal = 15
var allocatedPoints = 0
var finalResult = 0

window.addEventListener("load", updatePage)
loadButton.addEventListener('click', updatePage);
levelNum.addEventListener('change',updatePage)

function pointTotal()
{
    pointsTotal = parseInt(levelNum.value)*3+13
    allocatedPoints = (parseInt(Agility.value)
    +parseInt(Finesse.value)
    +parseInt(Dodge.value)
    +parseInt(PistolTraining.value)
    +parseInt(document.getElementById("Speed").value)
    +parseInt(Trickery.value)
    +parseInt(SleightofHand.value)
    +parseInt(Stealth.value)
    +parseInt(Deception.value)
    +parseInt(Charm.value)
    +parseInt(Luck.value)
    +parseInt(RifleTraining.value)
    +parseInt(Accuracy.value)
    +parseInt(Scavenge.value)
    +parseInt(Pilot.value)
    +parseInt(Anger.value)
    +parseInt(Constitution.value)
    +parseInt(MeleeTraining.value)
    +parseInt(HeavyWeaponTraining.value)
    +parseInt(Wrath.value)
    +parseInt(Smarts.value)
    +parseInt(AnimalHandling.value)
    +parseInt(document.getElementById("Awareness").value)
    +parseInt(Survival.value)
    +parseInt(Mechanic.value));
    pointsLeft.innerHTML = pointsTotal-allocatedPoints;
}