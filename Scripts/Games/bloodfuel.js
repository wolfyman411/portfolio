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
    UpdateInfo(true)
}

function UpdateInfo(boss)
{
    if (boss)
    {
        document.getElementById("BossImg").src = "Media/Games/bloodfuel/"+bossNames[currentBossId]+".gif"
        document.getElementById("BossName").innerHTML = bossNames[currentBossId].toUpperCase()
        document.getElementById("BossBio").innerHTML = bossBio[currentBossId]
    }
    else
    {
        document.getElementById("CharImg").src = "Media/Games/bloodfuel/"+characterNames[currentCharId]+".gif"
        document.getElementById("CharName").innerHTML = characterNames[currentCharId].toUpperCase()
        document.getElementById("CharBio").innerHTML = characterBio[currentCharId]
    }
}