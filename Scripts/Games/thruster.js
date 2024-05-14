var attackNames= ["laser","rocket","homing"]
var attackDesc =[
    "Fires a homing laser at the racer in front, dealing a moderate amount of damage.",
    "Fires a rocket forwards and explodes, dealing a large amount of damage.",
    "Fires a homing rocket forwards, dealing a large amount of damage."
]
var attackId = 0

var boostNames= ["boost","superboost","nitro"]
var boostDesc =[
    "A short boost that carries the racer forwards a distance.",
    "An even more powerful short boost.",
    "A boost that is not as powerful, but lasts the longest out of the boosts."
]
var boostId = 0

var defNames= ["landmine","tempshield","permashield"]
var defDesc =[
    "Places a landmine behind the racer, which explodes when it comes into contact with another racer.",
    "Provides a single use temporary shield that protects from any damage.",
    "Provides a single use shield that protects from any damage."
]
var defId = 0

function moveIndex(num)
{
    attackId += num
    if (attackId >= attackNames.length)
    {
        attackId = 0
    }
    else if (attackId < 0)
    {
        attackId = attackNames.length-1
    }
    UpdateInfo("attack")
}

function moveDefIndex(num)
{
    defId += num
    if (defId >= defNames.length)
    {
        defId = 0
    }
    else if (defId < 0)
    {
        defId = defNames.length-1
    }
    UpdateInfo("")
}

function moveBstIndex(num)
{
    boostId += num
    if (boostId >= boostDesc.length)
    {
        boostId = 0
    }
    else if (boostId < 0)
    {
        boostId = boostDesc.length-1
    }
    UpdateInfo("boost")
}

function UpdateInfo(type)
{
    if (type === "attack")
    {
        document.getElementById("AtkImg").src = "Media/Games/thruster/"+attackNames[attackId]+".png"
        document.getElementById("AtkName").innerHTML = attackNames[attackId].toUpperCase()
        document.getElementById("AtkBio").innerHTML = attackDesc[attackId]
    }
    else if (type === "boost")
    {
        document.getElementById("BstImg").src = "Media/Games/thruster/"+boostNames[boostId]+".png"
        document.getElementById("BstName").innerHTML = boostNames[boostId].toUpperCase()
        document.getElementById("BstBio").innerHTML = boostDesc[boostId]
    }
    else
    {
        document.getElementById("DefImg").src = "Media/Games/thruster/"+defNames[defId]+".png"
        document.getElementById("DefName").innerHTML = defNames[defId].toUpperCase()
        document.getElementById("DefBio").innerHTML = defDesc[defId]
    }
}