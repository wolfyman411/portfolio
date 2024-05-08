var characterNames= ["archer","hunter","pitchfork","priest","torch"]
var characterBio =[
    "Stalks the player and tries to keep a distance from the player. When within range, will fire an arrow at the player.",
    "Runs at the player quickly and deals massive damage, but has a very low health pool.",
    "Chases the player and deals low damage, but comes in groups.",
    "Spawns a large AOE attack underneath the player that deals massive damage. This character attempts to keep a distance from the player.",
    "Chases the player and launches many projectiles at the player in a spray."
]
var currentCharId = 0


var bossNames= ["trapper","vengeful","orion"]
var bossBio =[
    "Keeps a distance from the player, placing traps, firing his crossbow, and throwing holy water.",
    "Chases the player and throws his axe and attempts to melee them.",
    "Spawns as the boss on wave 10, summons enemies, and fires columns and rows of projectiles."
]
var currentBossId = 0

var eliteNames= ["paladin","protected","resurrector","righteous","blessed"]
var eliteBio =[
    "This elite buffs nearby allies giving them increased health and speed.",
    "This elite gives the enemy a large pool of additional health.",
    "This elite revives all dead enemies in a small AOE when killed.",
    "This elite does increased damage to the player.",
    "This elite regenerates health slowly."
]
var currentEliteId = 0

function moveIndex(num)
{
    currentCharId += num
    if (currentCharId >= characterNames.length)
    {
        currentCharId = 0
    }
    else if (currentCharId < 0)
    {
        currentCharId = characterNames.length-1
    }
    UpdateInfo(false)
}

function moveBossIndex(num)
{
    currentBossId += num
    if (currentBossId >= bossNames.length)
    {
        currentBossId = 0
    }
    else if (currentBossId < 0)
    {
        currentBossId = bossNames.length-1
    }
    UpdateInfo("boss")
}

function moveEliteIndex(num)
{
    currentEliteId += num
    if (currentEliteId >= eliteNames.length)
    {
        currentEliteId = 0
    }
    else if (currentEliteId < 0)
    {
        currentEliteId = eliteNames.length-1
    }
    UpdateInfo("elite")
}

function UpdateInfo(type)
{
    if (type === "boss")
    {
        document.getElementById("BossImg").src = "Media/Games/bloodfuel/"+bossNames[currentBossId]+".gif"
        document.getElementById("BossName").innerHTML = bossNames[currentBossId].toUpperCase()
        document.getElementById("BossBio").innerHTML = bossBio[currentBossId]
    }
    else if (type === "elite")
    {
        document.getElementById("EliteImg").src = "Media/Games/bloodfuel/"+eliteNames[currentEliteId]+".png"
        document.getElementById("EliteName").innerHTML = eliteNames[currentEliteId].toUpperCase()
        document.getElementById("EliteBio").innerHTML = eliteBio[currentEliteId]
    }
    else
    {
        document.getElementById("CharImg").src = "Media/Games/bloodfuel/"+characterNames[currentCharId]+".gif"
        document.getElementById("CharName").innerHTML = characterNames[currentCharId].toUpperCase()
        document.getElementById("CharBio").innerHTML = characterBio[currentCharId]
    }
}