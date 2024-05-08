const primaryslot = document.getElementById("primaryslot")
const weaponType = ""
const weaponStats = ""
//const filePath = document.getElementById("chosenslot");

//txt handler
const fileInput = document.getElementById("chosenslot");

function getWeaponStats(){
//Guns
    var file = fileInput.files[0];
	const reader = new FileReader();
    if (file != null)
    {
        reader.onload = function(e) {
            const lines = e.target.result.split("\n");
            if (String(lines[1]).includes("Gun"))
            {
                //Rename
                document.getElementById("SwapAmmoType").innerHTML = "Ammo Type:"
                document.getElementById("SwapClip").innerHTML = "Clip:"
                document.getElementById("Reload").innerHTML = "Reload:"
                document.getElementById("Repair").innerHTML = ""
                document.getElementById("Malfunction").innerHTML = ""
                document.getElementById("prRepair").innerHTML = ""
                document.getElementById("prMalfunction").innerHTML = ""
    
                //Stats
                document.getElementById("prName").innerHTML = lines[0]
                document.getElementById("prRequirement").innerHTML = lines[2]
                document.getElementById("prAmmoType").innerHTML = lines[3]
                document.getElementById("prClip").innerHTML = lines[4]
                document.getElementById("prRange").innerHTML = lines[5]
                document.getElementById("prReload").innerHTML = lines[6]
                document.getElementById("prPrimaryAttack").innerHTML = lines[7]
                document.getElementById("prSpecialAttack").innerHTML = lines[8]
                document.getElementById("prCritAttack").innerHTML = lines[9]
            }
            if (String(lines[1]).includes("Gun Unstable"))
            {
                //Rename
                document.getElementById("SwapAmmoType").innerHTML = "Ammo Type:"
                document.getElementById("SwapClip").innerHTML = "Clip:"
                document.getElementById("Reload").innerHTML = "Reload:"
                document.getElementById("Repair").innerHTML = "Repair:"
                document.getElementById("Malfunction").innerHTML = "Malfunction:"
    
                //Stats
                document.getElementById("prName").innerHTML = lines[0]
                document.getElementById("prRequirement").innerHTML = lines[2]
                document.getElementById("prAmmoType").innerHTML = lines[3]
                document.getElementById("prClip").innerHTML = lines[4]
                document.getElementById("prRange").innerHTML = lines[5]
                document.getElementById("prReload").innerHTML = lines[6]
                document.getElementById("prMalfunction").innerHTML = lines[7]
                document.getElementById("prRepair").innerHTML = lines[8]
                document.getElementById("prPrimaryAttack").innerHTML = lines[9]
                document.getElementById("prSpecialAttack").innerHTML = lines[10]
                document.getElementById("prCritAttack").innerHTML = lines[11]
            }
            if (String(lines[1]).includes("Melee"))
            {
                //Rename
                document.getElementById("SwapAmmoType").innerHTML = "Skill Modifier:"
                document.getElementById("SwapClip").innerHTML = ""
                document.getElementById("prReload").innerHTML = ""
                document.getElementById("Repair").innerHTML = ""
                document.getElementById("Malfunction").innerHTML = ""
                document.getElementById("prRepair").innerHTML = ""
                document.getElementById("prMalfunction").innerHTML = ""
                document.getElementById("prClip").innerHTML = ""
                document.getElementById("Reload").innerHTML = ""
    
                //Stats
                document.getElementById("prName").innerHTML = lines[0]
                document.getElementById("prRequirement").innerHTML = lines[2]
                document.getElementById("prAmmoType").innerHTML = lines[3]
                document.getElementById("prRange").innerHTML = lines[4]
                document.getElementById("prPrimaryAttack").innerHTML = lines[5]
                document.getElementById("prSpecialAttack").innerHTML = lines[6]
                document.getElementById("prCritAttack").innerHTML = lines[7]
            }
            fileContents.innerText = lines[0];
        };
        reader.readAsText(file);
    }
}