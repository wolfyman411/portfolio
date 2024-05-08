window.addEventListener("load", updatePage)
dropdown1.addEventListener('change',updatePage)
dropdown2.addEventListener('change',updatePage)
levelNum.addEventListener('change',updatePage)
document.getElementById('Anger').addEventListener('change',updatePage)
document.getElementById('Agility').addEventListener('change',updatePage)
loadButton.addEventListener('click', updatePage);
perktype1.addEventListener('change',updatePage)
perktype2.addEventListener('change',updatePage)
perktype3.addEventListener('change',updatePage)
document.getElementById("trait1").addEventListener('change',updatePage)
document.getElementById("trait2").addEventListener('change',updatePage)
document.getElementById("background").addEventListener('change',updatePage)
document.getElementById("curHP").addEventListener('change',updatePage)
document.getElementById("primaryslot").addEventListener('change',updatePage)
//document.getElementById("armorslot").addEventListener('change',updatePage)
//document.getElementById("shieldslot").addEventListener('change',updatePage)
document.getElementById("championval").addEventListener('change',updatePage)

//UpdatePage
document.getElementById("Agility").addEventListener('change',updatePage)
document.getElementById("Finesse").addEventListener('change',updatePage)
document.getElementById("Dodge").addEventListener('change',updatePage)
document.getElementById("PistolTraining").addEventListener('change',updatePage)
document.getElementById("Speed").addEventListener('change',updatePage)
document.getElementById("Trickery").addEventListener('change',updatePage)
document.getElementById("SleightofHand").addEventListener('change',updatePage)
document.getElementById("Stealth").addEventListener('change',updatePage)
document.getElementById("Deception").addEventListener('change',updatePage)
document.getElementById("Charm").addEventListener('change',updatePage)
document.getElementById("Luck").addEventListener('change',updatePage)
document.getElementById("RifleTraining").addEventListener('change',updatePage)
document.getElementById("Accuracy").addEventListener('change',updatePage)
document.getElementById("Scavenge").addEventListener('change',updatePage)
document.getElementById("Pilot").addEventListener('change',updatePage)
document.getElementById("Anger").addEventListener('change',updatePage)
document.getElementById("Constitution").addEventListener('change',updatePage)
document.getElementById("MeleeTraining").addEventListener('change',updatePage)
document.getElementById("HeavyWeaponTraining").addEventListener('change',updatePage)
document.getElementById("Wrath").addEventListener('change',updatePage)
document.getElementById("Smarts").addEventListener('change',updatePage)
document.getElementById("AnimalHandling").addEventListener('change',updatePage)
document.getElementById("Awareness").addEventListener('change',updatePage)
document.getElementById("Survival").addEventListener('change',updatePage)
document.getElementById("Mechanic").addEventListener('change',updatePage)

//Equipment Change
document.getElementById("chosenslot").addEventListener('change',updatePage)
document.getElementById("chosenArmor").addEventListener('change',updatePage)
document.getElementById("chosenShield").addEventListener('change',updatePage)

function updatePage(){
    //Default
    document.getElementById("Resistances").innerHTML = ""
    document.getElementById("Weaknesses").innerHTML = ""
    document.getElementById("ProficienciesL").innerHTML = ""
    document.getElementById("KillEnemy").innerHTML = ""
    document.getElementById("Bonuses").innerHTML = ""
    document.getElementById("Passive").innerHTML = ""
    document.getElementById("Abilities").innerHTML = ""
    document.getElementById("DefensiveA").innerHTML = ""
    document.getElementById("OffensiveA").innerHTML = ""
    document.getElementById("SupportA").innerHTML = ""
    //Activate Based on level
    currentLevel = parseInt(levelNum.value)
    for (let x = 1; x <= currentLevel; x++){
        getClassInfo(dropdown1.value,x)
        getClassStats(dropdown1.value,x)
        getSubclassInfo(dropdown2.value,x)
        getSubclassStats(dropdown2.value,x)
        getPerkInfo(perk1.value,perk2.value,perk3.value,x)
        getPerkStats(perk1.value,perk2.value,perk3.value,x)
    }
    //getChampionInfo(document.getElementById("championperk").value,document.getElementById("levelVal").innerHTML)
    getChampionInfo(document.getElementById("levelVal").value)
    pointTotal()
    addAllProficiencies()
    getTraitInfo(document.getElementById("trait1").value,document.getElementById("trait2").value)
    getBackgroundInfo(document.getElementById("background").value,document.getElementById("background").value)
    checkForSpecial()
    getWeaponStats()
    getArmorStats()
    getShieldStats(document.getElementById("shieldslot").value)
}