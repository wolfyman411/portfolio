var retString = ""
const maxHp = document.getElementById('maxHP');
const maxSp = document.getElementById('maxSP');
const maxCp = document.getElementById('maxCP');
const maxSpeed = document.getElementById('maxSpeed');
const Agility = document.getElementById('Agility');
const Anger = document.getElementById('Anger');
const initiative = document.getElementById('initiative');

function getClassInfo(classname, level)
{
    if (classname == 'Fighter'){
        {
            if (level == 2){
                retString = "[Warriors Breath]: Once every long rest you can restore 1d4 HP."
                addItem("Abilities",retString)
            }
            if (level == 3){
                retString = "[MultiAttack]: When you make a primary attack with any weapon class other than heavy, you can attack twice without the SP cost increasing. This can only be done once per turn."
                addItem("Abilities",retString)
            }
            if (level == 4){
                retString = "[Battlefield Survivor]: Your death save count increases from 3 to 4."
                addItem("Bonuses",retString)
            }
            if (level == 6){
                retString = "[Watching Eye]: You gain advantage when rolling for initiative."
                addItem("Bonuses",retString)
            }
            if (level == 7){

            }
            if (level == 8){
                retString = "[Iron Will]: If an attack drops you to 0 HP and doesn't outright kill you, roll a d5. If you roll a 5, you return to 1 HP and continue fighting."
                addItem("Passive",retString)
            }
            if (level == 9){
                retString = "[Battle Leech]: When you drop a creature to 0 HP, you gain 1d4 HP."
                addItem("KillEnemy",retString)
            }
            if (level == 10){
                retString = "[Final Stand]: If an ally goes down, you regain 1d4 HP and 1 SP."
                addItem("Passive",retString)
            }
        }
    }
    if (classname == 'Medic'){
        {
            if (level == 1){
                retString = "Survival"
                addItem2("ProficienciesL",retString)
            }
            if (level == 2){
                retString = "[Field Experience]: Melee attacks do an additional 1 damage."
                addItem("Bonuses",retString)
            }
            if (level == 3){
                retString = "[Stabilizer]: When a creature is in critical condition, you can stabilize them."
                addItem("Abilities",retString)
            }
            if (level == 4){
                retString = "[Lab Assistant]: If you administer a drug to someone, they cannot get addicted."
                addItem("Passive",retString)
            }
            if (level == 6){
            }
            if (level == 7){
                retString = "[Grave Keeper]: If a creature has been dead for less than 1 hour, you can revive them, but they will gain an affliction. This can only be done once per long rest."
                addItem("Abilities",retString)
            }
            if (level == 8){
                retString = "[Stimulative Healing]: When you heal a creature, they will gain advantage on their next attack."
                addItem("Passive",retString)
            }
            if (level == 9){
                retString = "[Mutual Benefit]: When a teammate within 30ft drops an enemy to 0 HP, both of you gain 1d4 temporary points."
                addItem("KillEnemy",retString)
            }
            if (level == 10){
                retString = "[Medical Provisioner]: If an ally goes down within 30ft of you, you can immediately revive them with half HP. This can only be done once per longrest."
                addItem("Abilities",retString)
            }
        }
    }
    if (classname == 'Mercenary'){
        {
            if (level == 1){
                retString = "Accuracy"
                addItem2("ProficienciesL",retString)
            }
            if (level == 2){
                retString = "[Readied Shot]: The first shot of combat will always have advantage."
                addItem("Bonuses",retString)
            }
            if (level == 3){
                retString = "[Hall Sweeper]: When making a melee primary attack, if there is an enemy within 5ft of the attack, you can also make an attack against them as well without taking an additional SP point."
                addItem("Passive",retString)
            }
            if (level == 4){
                retString = "[Compounding Prejudice]: When you roll a 5 to attack, roll another 5 and add your weapons primary attack damage to your total damage. Continue doing this until you do not roll a 5. This can only be done once per turn."
                addItem("Abilities",retString)
            }

            if (level == 5){
                retString = "[Cover Tactician]: When behind cover, your AC will increase by 1."
                addItem("Bonuses",retString)
            }
            if (level == 6){
                retString = "[Aggressive Strike]: When you make a crit attack, you can make an additional primary attack without additional SP cost. This can only be done once per turn."
                addItem("Passive",retString)
            }
            if (level == 7){
                retString = "[Quick Refresh]: Three times per long rest you can restore 1d4 HP."
                addItem("Abilities",retString)
            }
            if (level == 8){
                retString = "[Fiend Killer]: Enemies that have AC lower than yours take an additional 2 damage from all attacks done to you."
                addItem("Passive",retString)
            }
            if (level == 9){
                retString = "[Dueling Artisan]: Pick a creature that you can see to duel with, when you deal damage to that creature itll do double damage, but if the creature hits you youll take double damage. If the creature dies you can pick a new creature to duel."
                addItem("Abilities",retString)
            }
            if (level == 10){
                retString = "[Rage Build]: When you kill a creature, youll gain an extra 1 damage until the end of your next turn."
                addItem("KillEnemy",retString)
            }
        }
    }
    if (classname == 'Soldier'){
        {
            if (level == 1){
                retString = "Dodge"
                addItem2("ProficienciesL",retString)
            }
            if (level == 2){
                retString = "[Multiattack]: When you make a primary attack with any weapon class other than heavy, you can attack twice without the SP cost increasing. This can only be done once per turn."
                addItem("Abilities",retString)
            }
            if (level == 3){
                retString = "[Ballista]: When you make an attack with a heavy weapon, you can push a target 5ft back."
                addItem("Passive",retString)
            }
            if (level == 4){
                retString = "[Hardened Skin]: When you take damage that is higher than 1, it is reduced by 1."
                addItem("Passive",retString)
            }

            if (level == 5){
                retString = "[Slam Attack]: When you make a primary attack with a melee weapon, you can make 2 more additional primary attacks with the melee weapon without an additional SP cost. This can only be done once per turn."
                addItem("Abilities",retString)
            }
            if (level == 6){
                retString = "[Iron Will]: If an attack drops you to 0 HP and doesn't outright kill you, roll a d5. If you roll a 5, you return to 1 HP and continue fighting."
                addItem("Passive",retString)
            }
            if (level == 7){
                retString = "Melee Attacks"
                addItem2("Resistances",retString)
            }
            if (level == 8){
                retString = "[Shrug Off]: Once per long rest, if you take damage, you can choose to not take that damage."
                addItem("Abilities",retString)
            }
            if (level == 9){
                retString = "[Pack Tactics]: If an ally is within 5ft of you, you gain advantage on your attacks."
                addItem("Passive",retString)
            }
            if (level == 10){
                retString = "[Rage Build]: When you kill a creature, youll gain an extra 1 damage until the end of your next turn."
                addItem("KillEnemy",retString)
            }
        }
    }
    if (classname == 'Technician'){
        {
            if (level == 1){
                retString = "Mechanic"
                addItem2("ProficienciesL",retString)
            }
            if (level == 2){
                retString = "[Fast Reflexes]: You can now take 2 free dodge responses before you need to use SP for them."
                addItem("Bonuses",retString)
            }
            if (level == 3){
                retString = "[Machine Doctor]: You gain advantage on all mechanic checks."
                addItem("Bonuses",retString)
            }
            if (level == 4){
                retString = "[Multiattack]: When you make a primary attack with any weapon class other than heavy, you can attack twice without the SP cost increasing. This can only be done once per turn."
                addItem("Abilities",retString)
            }
            if (level == 6){
                retString = "[Speed Demon]: Once per long rest your movement speed doubles until the start of your next turn."
                addItem("Abilities",retString)
            }
            if (level == 7){
                retString = "[Robot Sapper]: You deal double damage to machines and robots."
                addItem("Passive",retString)
            }
            if (level == 9){
                retString = "[Allied Protection]: If you are within 5ft of an ally, attacks against you have disadvantage."
                addItem("Passive",retString)
            }
            if (level == 10){
                retString = "[Armor Piercer]: When you make an attack the targets AC will be reduced by 2. This cannot be reduced lower than 0."
                addItem("Passive",retString)
            }
        }
    }
}

function getClassStats(classname, level){
    document.getElementById('Proficiencies').innerHTML = 1
    document.getElementById('AC').innerHTML = 0

//Skills
    document.getElementById('upAgility').innerHTML = document.getElementById('Agility').value
    document.getElementById('upFinesse').innerHTML = document.getElementById('Finesse').value
    document.getElementById('upDodge').innerHTML = document.getElementById('Dodge').value
    document.getElementById('upPistolTraining').innerHTML = document.getElementById('PistolTraining').value
    document.getElementById('upSpeed').innerHTML = document.getElementById('Speed').value
    document.getElementById('upTrickery').innerHTML = document.getElementById('Trickery').value
    document.getElementById('upSleightofHand').innerHTML = document.getElementById('SleightofHand').value
    document.getElementById('upStealth').innerHTML = document.getElementById('Stealth').value
    document.getElementById('upDeception').innerHTML = document.getElementById('Deception').value
    document.getElementById('upCharm').innerHTML = document.getElementById('Charm').value
    document.getElementById('upLuck').innerHTML = document.getElementById('Luck').value
    document.getElementById('upRifleTraining').innerHTML = document.getElementById('RifleTraining').value
    document.getElementById('upAccuracy').innerHTML = document.getElementById('Accuracy').value
    document.getElementById('upScavenge').innerHTML = document.getElementById('Scavenge').value
    document.getElementById('upPilot').innerHTML = document.getElementById('Pilot').value
    document.getElementById('upAnger').innerHTML = document.getElementById('Anger').value
    document.getElementById('upConstitution').innerHTML = document.getElementById('Constitution').value
    document.getElementById('upMeleeTraining').innerHTML = document.getElementById('MeleeTraining').value
    document.getElementById('upHeavyWeaponTraining').innerHTML = document.getElementById('HeavyWeaponTraining').value
    document.getElementById('upWrath').innerHTML = document.getElementById('Wrath').value
    document.getElementById('upSmarts').innerHTML = document.getElementById('Smarts').value
    document.getElementById('upAnimalHandling').innerHTML = document.getElementById('AnimalHandling').value
    document.getElementById('upAwareness').innerHTML = document.getElementById('Awareness').value
    document.getElementById('upSurvival').innerHTML = document.getElementById('Survival').value
    document.getElementById('upMechanic').innerHTML = document.getElementById('Mechanic').value
//General Stats
    document.getElementById('Throwing').innerHTML = 15
    document.getElementById('AC').innerHTML = 0
    //Throw Calculation
    if (parseInt(document.getElementById('Agility').value) >= 2)
    {
        document.getElementById('Throwing').innerHTML = parseInt(document.getElementById('Agility').value)*15
    }
    //Second Chance Calculation
    if (parseInt(document.getElementById('Trickery').value) >= 3)
    {
        document.getElementById('chance1').hidden = ""
        if (parseInt(document.getElementById('Trickery').value) >= 5)
        {
            document.getElementById('chance2').hidden = ""
        }
    }
    else{
        document.getElementById('chance1').hidden = "hidden"
        document.getElementById('chance2').hidden = "hidden"
    }

    if (classname == 'Fighter'){
        maxHp.innerHTML = 4+parseInt(Anger.value)
        maxSp.innerHTML = 1
        maxCp.innerHTML = 0
        maxSpeed.innerHTML = 30+parseInt(Agility.value)*5
        document.getElementById('Proficiencies').innerHTML = parseInt(document.getElementById('Proficiencies').innerHTML)+1
        if (level >= 2){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
            maxSp.innerHTML =  parseInt(maxSp.innerHTML)+1
        }
        if (level >= 4){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
            maxSp.innerHTML =  parseInt(maxSp.innerHTML)+1
        }
        if (level >= 5){
            document.getElementById('Proficiencies').innerHTML = parseInt(document.getElementById('Proficiencies').innerHTML)+1
        }
        if (level >= 7){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
            maxSpeed.innerHTML =  parseInt(maxSpeed.innerHTML)+10
        }
        if (level >= 10){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
    }
    if (classname == 'Medic'){
        maxHp.innerHTML = 3+parseInt(Anger.value)
        maxSp.innerHTML = 2
        maxCp.innerHTML = 3
        maxSpeed.innerHTML = 35+parseInt(Agility.value)*5
        if (level >= 4){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+1
            maxSpeed.innerHTML =  parseInt(maxSpeed.innerHTML)+5
        }
        if (level >= 5){
            document.getElementById('Proficiencies').innerHTML = parseInt(document.getElementById('Proficiencies').innerHTML)+1
            maxCp.innerHTML =  parseInt(maxCp.innerHTML)+1
            maxSp.innerHTML =  parseInt(maxSp.innerHTML)+1
        }
        if (level >= 6){
            maxSpeed.innerHTML =  parseInt(maxSpeed.innerHTML)+5
        }
        if (level >= 8){
            maxCp.innerHTML =  parseInt(maxCp.innerHTML)+1
        }
        if (level >= 10){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
            maxCp.innerHTML =  parseInt(maxCp.innerHTML)+1
        }
    }
    if (classname == 'Mercenary'){
        maxHp.innerHTML = 3+parseInt(Anger.value)
        maxSp.innerHTML = 2
        maxCp.innerHTML = 0
        maxSpeed.innerHTML = 25+parseInt(Agility.value)*5
        if (level >= 4){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
        if (level >= 5){
            maxSp.innerHTML =  parseInt(maxSp.innerHTML)+1
        }
        if (level >= 6){
            maxSpeed.innerHTML =  parseInt(maxSpeed.innerHTML)+5
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
        if (level >= 7){
            maxSp.innerHTML =  parseInt(maxSp.innerHTML)+1
        }
        if (level >= 8){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
        if (level >= 9){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
    }
    if (classname == 'Soldier'){
        maxHp.innerHTML = 6+parseInt(Anger.value)
        maxSp.innerHTML = 1
        maxCp.innerHTML = 0
        maxSpeed.innerHTML = 20+parseInt(Agility.value)*5
        if (level >= 2){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
        if (level >= 3){
            maxSp.innerHTML =  parseInt(maxSp.innerHTML)+1
        }
        if (level >= 4){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
        if (level >= 6){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
        if (level >= 8){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
        if (level >= 10){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
    }
    if (classname == 'Technician'){
        maxHp.innerHTML = 3+parseInt(Anger.value)
        maxSp.innerHTML = 3
        maxCp.innerHTML = 2
        maxSpeed.innerHTML = 30+parseInt(Agility.value)*5
        if (level >= 2){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+2
        }
        if (level >= 3){
            maxCp.innerHTML =  parseInt(maxCp.innerHTML)+1
        }
        if (level >= 5){
            document.getElementById('Proficiencies').innerHTML = parseInt(document.getElementById('Proficiencies').innerHTML)+2
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+1
        }
        if (level >= 6){
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+1
            maxCp.innerHTML =  parseInt(maxCp.innerHTML)+1
        }
        if (level >= 8){
            document.getElementById('AC').innerHTML = parseInt(document.getElementById('AC').innerHTML)+1
            maxHp.innerHTML =  parseInt(maxHp.innerHTML)+1
        }
    }
    //Initiative Calculator
    initiative.innerHTML = document.getElementById('upSpeed').innerHTML
}

function addItem(list,text)
{
    var textnode=document.createTextNode(text);
    var node=document.createElement("li");
    node.appendChild(textnode);
    document.getElementById(list).appendChild(node);
}