var ArmoryExpert = false

function getChampionInfo(level){
    ArmoryExpert = false
    if (document.getElementById("championval").value == "Bloodlust" && level >= 10)
    {
        retString = "Everytime you drop a creature to 0 HP, you gain 1d4 HP and 1 SP point."
        addItemCH("KillEnemy",retString)
    }
    if (document.getElementById("championval").value == "Protector" && level >= 10)
    {
        retString = "When an enemy drops an ally to 0 HP, you will immediately get another turn as if your turn went after the enemy."
        addItemCH("Passive",retString)
    }
    if (document.getElementById("championval").value == "Generator" && level >= 10)
    {
        retString = "When you shoot a bullet, there is a 2 in 5 chance that the shot will not be used."
        addItemCH("Passive",retString)
    }
    if (document.getElementById("championval").value == "Slayer" && level >= 10)
    {
        retString = "Pick a creature at the start of combat. The creature will not be resistant to any attack you hit with it, and when you kill that creature, you regain half your HP in temporary points and you can pick a different creature."
        addItemCH("Abilities",retString)
    }
    if (document.getElementById("championval").value == "Sapper" && level >= 10)
    {
        retString = "When you damage a vehicle or mechanism, it will deal double damage regardless of if it is resistant to the attack or not."
        addItemCH("Passive",retString)
    }
    if (document.getElementById("championval").value == "Savior" && level >= 10)
    {
        retString = "When you bring an ally from critical condition, both you and that ally will get another turn."
        addItemCH("Passive",retString)
    }
    if (document.getElementById("championval").value == "Cleric" && level >= 10)
    {
        retString = "You can heal an affliction from an ally. This ability has a 1 in 5 chance of recharging every long rest."
        addItemCH("Abilities",retString)
    }
    if (document.getElementById("championval").value == "Resurrector" && level >= 10)
    {
        retString = "You can resurrect creatures that have been dead for no longer than an hour. This can only be done once per long rest."
        addItemCH("Abilities",retString)
    }
    if (document.getElementById("championval").value == "SoulLinked" && level >= 10)
    {
        retString = "When a teammate within 60ft of you drops a creature 0 HP, gain a CP back."
        addItemCH("KillEnemy",retString)
    }
    if (document.getElementById("championval").value == "ArmoryExpert" && level >= 10)
    {
        retString = "Item requirements no longer matter to you, as you can now use anything."
        addItemCH("Bonuses",retString)
        ArmoryExpert = true
    }
    if (document.getElementById("championval").value == "Brutalist" && level >= 10)
    {
        retString = "When you bring a creature to 0 HP, all creatures within 30ft of it must check or become frightened of you."
        addItemCH("KillEnemy",retString)
    }
    if (document.getElementById("championval").value == "Indomitable" && level >= 10)
    {
        retString = "When your character is dropped to 0 HP and the attack doesnt immediately kill you, roll a d5. If the number is higher or equal to 3, your character will return to 1 HP."
        addItemCH("Passive",retString)
    }
    if (document.getElementById("championval").value == "PercussiveMaintenance" && level >= 10)
    {
        retString = "When a hostile robot or machine drops to 0 HP within 15ft of you, there is a 1 in 5 chance that the robot will come back with half HP and aid you."
        addItemCH("KillEnemy",retString)
    }
    if (document.getElementById("championval").value == "ElectricallyCharged" && level >= 10)
    {
        retString = "When you attack a creature with a melee weapon, you can add an additional 1d4 electric damage to the attack. When a creature attacks you with a melee and the attack is successful, they will also take 1d4 electric damage."
        addItemCH("Passive",retString)
    }
    if (document.getElementById("championval").value == "ExpertMechanic" && level >= 10)
    {
        retString = "You are twice as effective when repairing machines, and when you bring a machine back to full HP, it will gain temporary HP equal to half its HP."
        addItemCH("Bonuses",retString)
    }
    if (document.getElementById("championval").value == "ComputerWhizz" && level >= 10)
    {
        retString = "You automatically succeed in mechanic checks when hacking computers with a scrambler, and you can hack computers without a scrambler."
        addItemCH("Bonuses",retString)
    }
}

function addItemCH(list,text)
{
    var textnode=document.createTextNode(text);
    var node=document.createElement("li");
    node.className = "champion"
    node.appendChild(textnode);
    document.getElementById(list).appendChild(node);
}