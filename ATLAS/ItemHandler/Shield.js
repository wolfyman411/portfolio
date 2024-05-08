const shieldslot = document.getElementById("chosenShield")

function getShieldStats(){
    var file = shieldslot.files[0];
    const reader = new FileReader();
    if (file != null)
    {
        reader.onload = function(e) 
        {
            const lines = e.target.result.split("\n");
            //Line Handler
            const shieldReqNames = `${lines[1]}`.split(',')
            const shieldReqVals = `${lines[2]}`.split(',')
            const shieldPassiveList = `${lines[4]}`.split(',')

            var isValid = true
            var statBonus = 0

            var shieldReqDisplay = ""
            for (var i = 0; i < shieldReqNames.length; i++)
            {
                if (i > 0)
                {
                    shieldReqDisplay = shieldReqDisplay+"<br>"
                }
                if (shieldReqNames[0].length > 1)
                {
                    shieldReqDisplay = shieldReqDisplay+shieldReqVals[i]+" in "+shieldReqNames[i].substring(2)
                }
            }
            document.getElementById("shieldReqs").innerHTML = shieldReqDisplay
            if (ArmoryExpert == true)
            {
                statBonus = 10
            }
            if (parseInt(document.getElementById("upSmarts").innerHTML) == 4)
            {
                statBonus += 1
            }
            if (parseInt(document.getElementById("upSmarts").innerHTML) >= 5)
            {
                statBonus += 2
            }
            //Check reqs
            for (var i = 0; i < shieldReqNames.length; i++)
            {
                if (parseInt(document.getElementById(String(shieldReqNames[i]).trim()).innerHTML)+statBonus < parseInt(shieldReqVals[i]))
                {
                    isValid = false
                }
            }
            
            //Stat Handler
            if (isValid == true)
            {
                //AC Add
                document.getElementById("AC").innerHTML = parseInt(document.getElementById("AC").innerHTML)+parseInt(`${lines[3]}`)

                //Passive Add
                for (var i = 0; i < shieldPassiveList.length; i++)
                {
                    retString = shieldPassiveList[i]
                    if (shieldPassiveList[i].length > 1)
                    {
                        addItemX("Passive",retString) 
                    }
                }
            }
            fileContents.innerText = lines[0];
        }
        reader.readAsText(file);
    }
}