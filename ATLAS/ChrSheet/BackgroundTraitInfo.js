//Traits
function getTraitInfo(trait1,trait2)
{
    if (trait1 == 'LightFrame' || trait2 == 'LightFrame'){
        {
            document.getElementById('maxHP').innerHTML = parseInt(document.getElementById('maxHP').innerHTML)-1
            document.getElementById('maxSpeed').innerHTML = parseInt(document.getElementById('maxSpeed').innerHTML)+10
        }
    }
    if (trait1 == 'HeavyFrame' || trait2 == 'HeavyFrame'){
        {
            document.getElementById('maxHP').innerHTML = parseInt(document.getElementById('maxHP').innerHTML)+1
            document.getElementById('maxSpeed').innerHTML = parseInt(document.getElementById('maxSpeed').innerHTML)-10
        }
    }
    if (trait1 == 'PistolPacker' || trait2 == 'PistolPacker'){
        {
            document.getElementById('upPistolTraining').innerHTML = parseInt(document.getElementById('upPistolTraining').innerHTML)+1
            document.getElementById('upRifleTraining').innerHTML = parseInt(document.getElementById('upRifleTraining').innerHTML)-1
        }
    }
    if (trait1 == 'SlowDraw' || trait2 == 'SlowDraw'){
        {
            document.getElementById('upPistolTraining').innerHTML = parseInt(document.getElementById('upPistolTraining').innerHTML)-1
            document.getElementById('upRifleTraining').innerHTML = parseInt(document.getElementById('upRifleTraining').innerHTML)+1
        }
    }
    if (trait1 == 'FastLearner' || trait2 == 'FastLearner'){
        {
            
            document.getElementById('Proficiencies').innerHTML = parseInt(document.getElementById('Proficiencies').innerHTML)-1
            document.getElementById('pointsLeft').innerHTML = parseInt(document.getElementById('pointsLeft').innerHTML)+5
        }
    }
    if (trait1 == 'Gifted' || trait2 == 'Gifted'){
        {
            document.getElementById('Proficiencies').innerHTML = parseInt(document.getElementById('Proficiencies').innerHTML)+1
            document.getElementById('pointsLeft').innerHTML = parseInt(document.getElementById('pointsLeft').innerHTML)-5
        }
    }
    if (trait1 == 'Optimist' || trait2 == 'Optimist'){
        {
            document.getElementById('upCharm').innerHTML = parseInt(document.getElementById('upCharm').innerHTML)+2
            document.getElementById('upDeception').innerHTML = parseInt(document.getElementById('upDeception').innerHTML)-2
        }
    }
    if (trait1 == 'Altruist' || trait2 == 'Altruist'){
        {
            document.getElementById('upCharm').innerHTML = parseInt(document.getElementById('upCharm').innerHTML)-2
            document.getElementById('upDeception').innerHTML = parseInt(document.getElementById('upDeception').innerHTML)+2
        }
    }
    if (trait1 == 'Survivor' || trait2 == 'Survivor'){
        {
            retString = "Advantage on survival checks."
            addItemB("Bonuses",retString)
            retString = "Disadvantage on charm checks."
            addItemB("Bonuses",retString)
        }
    }
    if (trait1 == 'SilverTongued' || trait2 == 'SilverTongued'){
        {
            retString = "Advantage on charm checks."
            addItemB("Bonuses",retString)
            retString = "Disadvantage on survival checks."
            addItemB("Bonuses",retString)
        }
    }
    if (trait1 == 'FastFingers' || trait2 == 'FastFingers'){
        {
            document.getElementById('initiative').innerHTML = parseInt(document.getElementById('initiative').innerHTML)+1
            retString = "-1 to all melee attacks"
            addItemB("Bonuses",retString)
        }
    }
    if (trait1 == 'HeavyHanded' || trait2 == 'HeavyHanded'){
        {
            document.getElementById('initiative').innerHTML = parseInt(document.getElementById('initiative').innerHTML)-1
            retString = "+1 to all melee attacks"
            addItemB("Bonuses",retString)
        }
    }
    if (trait1 == 'FarSighted' || trait2 == 'FarSighted'){
        {
            document.getElementById('upAccuracy').innerHTML = parseInt(document.getElementById('upAccuracy').innerHTML)+1
            document.getElementById('upAwareness').innerHTML = parseInt(document.getElementById('upAwareness').innerHTML)-1
        }
    }
    if (trait1 == 'NearSighted' || trait2 == 'NearSighted'){
        {
            document.getElementById('upAccuracy').innerHTML = parseInt(document.getElementById('upAccuracy').innerHTML)-1
            document.getElementById('upAwareness').innerHTML = parseInt(document.getElementById('upAwareness').innerHTML)+1
        }
    }
}
function getBackgroundInfo(background)
{
    if (background == 'Bandit'){
        {
            retString = "You gain the ability to communicate with other bandits, and you're able to cut deals with them."
            addItemB("Bonuses",retString)
        }
    }
    if (background == 'Farmer'){
        {
            retString = "Being in adverse conditions, you arent bothered by heat or the cold. You no longer require a fire when setting up a shelter for a long rest."
            addItemB("Bonuses",retString)
        }
    }
    if (background == 'Pilot'){
        {
            document.getElementById('upPilot').innerHTML = parseInt(document.getElementById('upPilot').innerHTML)+1
        }
    }
    if (background == 'Thief'){
        {
            document.getElementById('upSleightofHand').innerHTML = parseInt(document.getElementById('upSleightofHand').innerHTML)+1
        }
    }
    if (background == 'Mercenary'){
        {
            retString = "Being a contracted worker, you know where things are and how to get things done. When applying for contract work you know how to get a better deal when being paid for a mission."
            addItemB("Bonuses",retString)
        }
    }
    if (background == 'Soldier'){
        {
            document.getElementById('upAccuracy').innerHTML = parseInt(document.getElementById('upAccuracy').innerHTML)+1
        }
    }
    if (background == 'Performer'){
        {
            retString = "You used to travel around and let your name be known by many. Being famous in your area may allow you to open up new avenues for your party."
            addItemB("Bonuses",retString)
        }
    }
    if (background == 'Mechanic'){
        {
            document.getElementById('upMechanic').innerHTML = parseInt(document.getElementById('upMechanic').innerHTML)+1
        }
    }
    if (background == 'Wanderer'){
        {
            retString = "You never stay in one place for too long. While this may come with the negative of not knowing too many people, you know how to get to many places."
            addItemB("Bonuses",retString)
        }
    }
    if (background == 'Scrapper'){
        {
            document.getElementById('upScavenge').innerHTML = parseInt(document.getElementById('upScavenge').innerHTML)+1
        }
    }
    if (background == 'Politician'){
        {
            retString = "You used to be a political figure, but things didnt turn out well in your favor. You may know the inner workings of the ISF, but there may be many who despise you."
            addItemB("Bonuses",retString)
        }
    }
    if (background == 'Leader'){
        {
            retString = "You are exceptional at gathering groups in times of strife and bringing them together for a common goal."
            addItemB("Bonuses",retString)
        }
    }
}

function addItemB(list,text)
{
    var textnode=document.createTextNode(text);
    var node=document.createElement("li");
    node.className = "trait"
    node.appendChild(textnode);
    document.getElementById(list).appendChild(node);
}