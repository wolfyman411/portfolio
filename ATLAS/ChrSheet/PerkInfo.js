var retString = ""

function getPerkInfo(perk1val,perk2val,perk3val, level)
{
//Mix
    if (perk1val == 'Scout' || perk2val == 'Scout' || perk3val == 'Scout'){
        {
            if (level == 1){
                retString = "1 SP [Vitals]: Pick a creature that you can see and hurt, and know its exact hitpoints. Cannot be done out of combat."
                addItemP("SupportA",retString)
            }
            if (level == 2){
                retString = "1 SP [Trained Eye]: Pick a creature you can see, and gain information on 2 talents or traits. This cannot be done on the same target. At level 5, you can pick 2 targets."
                addItemP("SupportA",retString)
            }
            if (level == 5){
                retString = "[Moving Shadows]: Stealth checks against you have disadvantage."
                addItemP("Bonuses",retString)
            }
            if (level == 6){
                retString = "2 SP [Predictive Action]: Pick a creature and know its intentions for its turn."
                addItemP("DefensiveA",retString)
            }
        }
    }
    if (perk1val == 'MartialAdept' || perk2val == 'MartialAdept' || perk3val == 'MartialAdept'){
        {
            if (level == 1){
                retString = "[Patient Defense]: When you take a defensive stance, you gain an additional AC point."
                addItemP("Abilities",retString)
                retString = "1 SP [Retorted Defense]: If a creature attacks you and misses whether by a dodge response or not beating your AC, you can attack them as a response with a melee primary attack without needing to beat their AC."
                addItemP("OffensiveA",retString)
            }
            if (level == 3){
                retString = "2 SP [Whirlwind]: When you make a melee successful attack, you can immediately follow it up with another melee  primary attack without needing to beat their AC. At level 7 you can make 2 additional attacks."
                addItemP("OffensiveA",retString)
            }
            if (level == 5){
                retString = "[Fast Reflexes]: You now get an additional free dodge response."
                addItemP("Bonuses",retString)
            }
        }
    }
    if (perk1val == 'Hunter' || perk2val == 'Hunter' || perk3val == 'Hunter'){
        {
            if (level == 1){
                retString = "[Beast Sense]: You gain advantage when tracking animals."
                addItemP("Bonuses",retString)
                retString = "1 SP [Creature Killer]: When you successfully hit a beast and they are resistant to that kind of damage, they will no longer be resistant to it. This only applies to damage you deal."
                addItemP("OffensiveA",retString)
            }
            if (level == 3){
                retString = "2 SP [Bestiary Weaknesses]: Pick a creature you can see and learn of one of its resistances or weaknesses. This can not be used on the same creature twice. At level 7 you can learn of two if its resistances or weaknesses."
                addItemP("SupportA",retString)
            }
            if (level == 5){
                retString = "[Wilderness Defense]: When you take more than 1 damage from an animal, it is reduced by 1."
                addItemP("Passive",retString)
            }
        }
    }
    if (perk1val == 'Wanderer' || perk2val == 'Wanderer' || perk3val == 'Wanderer'){
        {
            if (level == 1){
                retString = "[Barterer]: When negotiating a lower price, gain advantage."
                addItemP("Bonuses",retString)
            }
            if (level == 3){
                retString = "1 SP [Ammo Vendor]: When reloading, roll a d5. If the roll is 3 or higher you reload your gun without expending any ammo."
                addItemP("SupportA",retString)
            }
        }
    }
    if (perk1val == 'PlagueDoctor' || perk2val == 'PlagueDoctor' || perk3val == 'PlagueDoctor'){
        {
            if (level == 1){
                retString = "[Disease Immunity]: You become immune to all diseases."
                addItemP("Passive",retString)
                retString = "1 CP [Gift of Blight]: Pick a creature within 15ft of you, they will need to make a constitution save of 17 or become blighted."
                addItemP("OffensiveA",retString)
            }
            if (level == 2){
                retString = "1 CP [Disease Genocide]: Pick a creature that has the blight and deal 1d4 blight damage to them. At level 5 this increases to 2d4."
                addItemP("OffensiveA",retString)
            }
            if (level == 4){
                retString = "1 SP [Blight Removal]: If an ally has blight, you can remove it from them."
                addItemP("SupportA",retString)
            }
            if (level == 5){
                retString = "[BlightBringer]: When you deal a crit to a creature, they will need to make a constitution save of 17 or become blighted."
                addItemP("Passive",retString)
            }
            if (level == 7){
                retString = "3 SP [Weakened Mind]: Pick a creature with blight within 30ft of you. They will need to make a constitution save of 17, or their turn will be controlled by you."
                addItemP("OffensiveA",retString)
            }
        }
    }
    if (perk1val == 'CrossbowMedic' || perk2val == 'CrossbowMedic' || perk3val == 'CrossbowMedic'){
        {
            if (level == 1){
                retString = "[Healing Crossbow]: You gain access to the healing crossbow. When using the healing crossbow you can use it to perform the abilities under this perk."
                addItemP("Bonuses",retString)
                retString = "1 CP [Healing Bolt]: Pick a creature within 30ft of you and heal them for 1d4-1 HP."
                addItemP("SupportA",retString)
            }
            if (level == 3){
                retString = "1 CP [Shield Bolt]: Pick a creature within 30ft of you and give them 1d4 temporary points."
                addItemP("SupportA",retString)
            }
            if (level == 5){
                retString = "[Crossbow Criticals]: When you deal a crit to a creature, you gain 1 CP back."
                addItemP("Passive",retString)
                retString = "3 CP [Revive Bolt]: Pick a creature within 30ft of you that is in critical condition, and revive them with 4 HP."
                addItemP("SupportA",retString)
            }
            if (level == 7){
                retString = "[Wilderness Defense]: When you take more than 1 damage from an animal, it is reduced by 1."
                addItemP("Passive",retString)
                retString = "2 CP [Cleansing Bolt]: Pick a creature within 30ft of you and remove all conditions from them."
                addItemP("SupportA",retString)
            }
        }
    }
    if (perk1val == 'LoneSurvivor' || perk2val == 'LoneSurvivor' || perk3val == 'LoneSurvivor'){
        {
            if (level == 1){
                retString = "[Better Off]: For every hostile within 10ft of you, you gain 1 AC. This caps at 2."
                addItemP("Passive",retString)
            }
            if (level == 4){
                retString = "1 CP [Self Heal]: Heal yourself for 1d5 HP."
                addItemP("DefensiveA",retString)
            }
            if (level == 5){
                retString = "[Handling it]: If you have no allies within 15ft of you, you get an additional SP point."
                addItemP("Passive",retString)
            }
            if (level == 7){
                retString = "2 SP [Toughen Up]: Everytime you take damage, your base AC increases by 1. This returns to normal at the start of your turn."
                addItemP("DefensiveA",retString)
            }
        }
    }
    if (perk1val == 'Sprinter' || perk2val == 'Sprinter' || perk3val == 'Sprinter'){
        {
            if (level == 5){
                retString = "[Extra Motivation]: When you spend an SP point to move, you can move an additional 5ft."
                addItemP("Passive",retString)
                retString = "1 CP [Long Winded]: Double your movement for 2 turns."
                addItemP("DefensiveA",retString)
            }
        }
    }
    if (perk1val == 'AlphaTarget' || perk2val == 'AlphaTarget' || perk3val == 'AlphaTarget'){
        {
            if (level == 1){
                retString = "[Team Protector]: If an ally within 10ft of you takes damage, you gain 1d4-1 temporary HP."
                addItemP("Passive",retString)
                retString = "1 SP [Taunt]: Pick a creature within 30ft of you. They must make a smarts save of 18 or they will gain the enraged condition until the end of their turn."
                addItemP("DefensiveA",retString)
            }
            if (level == 5){
                retString = "[Righteous Fury]: If an ally within 30ft of you drops to 0 HP, for your next turn, you deal double damage."
                addItemP("Passive",retString)
            }
        }
    }
    if (perk1val == 'Hacker' || perk2val == 'Hacker' || perk3val == 'Hacker'){
        {
            if (level == 1){
                retString = "[Computer Programmer]: You gain advantage on scrambler checks."
                addItemP("Bonuses",retString)
                retString = "1 CP [Self Destruct]: When you have a  hacked robot or turret, you can command it to self-destruct. All creatures within 10ft of the robot must succeed on a 17 dodge save or take 2d4 explosive damage."
                addItemP("OffensiveA",retString)
            }
            if (level == 4){
                retString = "1 CP [Override Targeting]: A hacked robot or turret can now be allied to your team."
                addItemP("OffensiveA",retString)
            }
            if (level == 5){
                retString = "[Scrambler Overcharge]: You can now use scramblers as an EMP. All electronics within a 15ft area of the thrown scrambler will be deactivated for 2 turns."
                addItemP("Abilities",retString)
            }
            if (level == 7){
                retString = "2 SP [EMP]: A hacked robot or turret can now emit an EMP that disables all nearby electronics within a 15ft area for 2 turns."
                addItemP("OffensiveA",retString)
            }
        }
    }
    if (perk1val == 'Overclocker' || perk2val == 'Overclocker' || perk3val == 'Overclocker'){
        {
            if (level == 1){
                retString = "2 HP [Blood Fueler]: Give yourself or a teammate you can see within 30ft of you an additional SP point. The HP cost increases by 1 every time this is used."
                addItemP("OffensiveA",retString)
            }
            if (level == 4){
                retString = "2 CP [Stamina Refresh]: Give yourself or a teammate all their SP back."
                addItemP("OffensiveA",retString)
            }
            if (level == 7){
                retString = "2 CP [Hasten]: Give an additional turn to yourself or a teammate."
                addItemP("OffensiveA",retString)
            }
        }
    }
//TraitBased
    if (perk1val == 'Ruffian' || perk2val == 'Ruffian' || perk3val == 'Ruffian'){
        {
            if (level == 1){
                retString = "[Slippery]: Enemies that attempt to grapple have disadvantage."
                addItemP("Bonuses",retString)
            }
            if (level == 4){
                retString = "[Lucky]: Gain a second chance dice. This dice will be refreshed after a long rest."
                addItemP("Bonuses",retString)
            }
            if (level == 7){
                retString = "[In Plain Sight]: When you hide as an action, you gain advantage on stealth regardless of light level."
                addItemP("Abilities",retString)
            }
        }
    }
    if (perk1val == 'Scholar' || perk2val == 'Scholar' || perk3val == 'Scholar'){
        {
            if (level == 1){
                retString = "[Sense of Direction]: If you have been to a place before and seen it, you will always know how to get back to it."
                addItemP("Bonuses",retString)
            }
            if (level == 4){
                retString = "[History Wizz]: You can recall any information given to you within a month."
                addItemP("Bonuses",retString)
            }
            if (level == 7){
                retString = "[Judge of Character]: You gain advantage when trying to see if someone is lying or not."
                addItemP("Bonuses",retString)
            }
        }
    }
    if (perk1val == 'AdrenalineJunky' || perk2val == 'AdrenalineJunky' || perk3val == 'AdrenalineJunky'){
        {
            if (level == 1){
                retString = "[Reckless Jolt]: You gain an additional SP point, but attacks against you have advantage. You can only use this once per turn."
                addItemP("Abilities",retString)
            }
            if (level == 4){
                retString = "[Blood Fuel]: If you are out of SP, you can convert 1 HP to 1 SP point. The HP cost increases by 1 every time this is used."
                addItemP("Abilities",retString)
            }
        }
    }
    if (perk1val == 'ShieldConverter' || perk2val == 'ShieldConverter' || perk3val == 'ShieldConverter'){
        {
            if (level == 1){
                retString = "[HP Conversion]: Every 3 temporary points you have, you can convert them into 1 HP."
                addItemP("Abilities",retString)
            }
            if (level == 5){
                retString = "[CP Conversion]: Every 5 temporary points you have, you can convert them into 1 CP. This can be done twice per long rest."
                addItemP("Abilities",retString)
            }
        }
    }
    if (perk1val == 'GroupPractitioner' || perk2val == 'GroupPractitioner' || perk3val == 'GroupPractitioner'){
        {
            if (level == 1){
                retString = "[Body Block]: For every teammate that is currently not in critical condition, you gain 1 AC. This caps at 2."
                addItemP("Bonuses",retString)
            }
            if (level == 5){
                retString = "[Team Courage]: For every teammate that is currently not in critical condition and is within 10ft of you, gain an additional SP point. This caps at 3."
                addItemP("Bonuses",retString)
            }
        }
    }
    if (perk1val == 'Energizer' || perk2val == 'Energizer' || perk3val == 'Energizer'){
        {
            if (level == 1){
                retString = "[Extra Ammo]: When you take the reload action, there is a 1 in 5 chance that ammo will not be consumed."
                addItemP("Passive",retString)
            }
            if (level == 4){
                retString = "[Ammo Crafting]: When you take a short rest, there is a 1 in 5 chance that you will .33 or .66 generate ammo."
                addItemP("Abilities",retString)
            }
            if (level == 7){
                retString = "[Soul Charger]: When you bring a creature to 0 HP, your gun will automatically reload without consuming ammo."
                addItemP("KillEnemy",retString)
            }
        }
    }
    if (perk1val == 'WildCompanion' || perk2val == 'WildCompanion' || perk3val == 'WildCompanion'){
        {
            if (level == 1){
                retString = "[Allied Companion]: Gain a companion creature of danger level ** or lower. They have the same stats as a regular creature. You can command this creature to attack and move at the end of your turn. If the creature drops to 0 HP it dies, everytime you take a long rest there is a 1 in 5 chance that you will get another companion creature."
                addItemP("Abilities",retString)
            }
            if (level == 5){
                retString = "[Closer Bond]: Your creature now has additional HP equal to half its HP, and when it drops to 0 HP, it can go into critical condition. If it is not saved within round 3 of critical condition, it will die."
                addItemP("Passive",retString)
            }
        }
    }
    if (perk1val == 'HeavyWeaponMaster' || perk2val == 'HeavyWeaponMaster' || perk3val == 'HeavyWeaponMaster'){
        {
            if (level == 1){
                retString = "[Righteous Stonewall]: Gain +1 to AC if you made an attack with a heavy weapon until the start of your next turn."
                addItemP("Passive",retString)
            }
            if (level == 5){
                retString = "[Elite Targeting]: If you drop an enemy to 0 HP on your attack, make another primary attack against an enemy at no extra SP cost."
                addItemP("KillEnemy",retString)
            }
        }
    }
    if (perk1val == 'TechnologySavage' || perk2val == 'TechnologySavage' || perk3val == 'TechnologySavage'){
        {
            if (level == 1){
                retString = "[Robotic Fear]: Robots and machines have disadvantage when attacking you."
                addItemP("Passive",retString)
            }
            if (level == 5){
                retString = "[Machine Weakness]: You now deal double damage to all machines and vehicles."
                addItemP("Passive",retString)
            }
        }
    }
    if (perk1val == 'BattleWorn' || perk2val == 'BattleWorn' || perk3val == 'BattleWorn'){
        if (level == 5){
            retString = "Laser"
            addItem2("Resistances",retString)
        }
    }
}
function getPerkStats(perk1val,perk2val,perk3val, level){
    if (perk1val == 'Scout' || perk2val == 'Scout' || perk3val == 'Scout'){
        if (level >= 1){
            document.getElementById('upAwareness').innerHTML = parseInt(document.getElementById('upAwareness').innerHTML)+2
        }
    }
    if (perk1val == 'Wanderer' || perk2val == 'Wanderer' || perk3val == 'Wanderer'){
        if (level >= 5){
            document.getElementById('upScavenge').innerHTML = parseInt(document.getElementById('upScavenge').innerHTML)+1
        }
    }
    if (perk1val == 'AdrenalineJunky' || perk2val == 'AdrenalineJunky' || perk3val == 'AdrenalineJunky'){
        if (level >= 7){
            maxSp.innerHTML = parseInt(maxSp.innerHTML)+1
        }
    }
    if (perk1val == 'BattleWorn' || perk2val == 'BattleWorn' || perk3val == 'BattleWorn'){
        if (level >= 1){
            document.getElementById('maxHP').innerHTML = parseInt(document.getElementById('maxHP').innerHTML)+3
        }
    }
    if (perk1val == 'Sprinter' || perk2val == 'Sprinter' || perk3val == 'Sprinter'){
        if (level >= 1){
            document.getElementById('maxSpeed').innerHTML = parseInt(document.getElementById('maxSpeed').innerHTML)+10
        }
    }
}

function addItemP(list,text)
{
    var textnode=document.createTextNode(text);
    var node=document.createElement("li");
    node.className = "perk"
    node.appendChild(textnode);
    document.getElementById(list).appendChild(node);
}