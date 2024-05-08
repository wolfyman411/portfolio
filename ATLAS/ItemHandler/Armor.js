const fileInput2 = document.getElementById("chosenArmor");
const armorReqs = document.getElementById("armorReqs");

function getArmorStats(){
    var file = fileInput2.files[0];
    const reader = new FileReader();
    if (file != null)
    {
        reader.onload = function(e) 
        {
            const lines = e.target.result.split("\n");
            //Line Handler
            const armorReqNames = `${lines[1]}`.split(',')
            const armorReqVals = `${lines[2]}`.split(',')
            const armorResistVals = `${lines[4]}`.split(',')
            const armorPassiveList = `${lines[5]}`.split(',')
            const armorStatNames = `${lines[6]}`.split(',')
            const armorStatVals = `${lines[7]}`.split(',')
            var armorReqDisplay = ""
            for (var i = 0; i < armorReqNames.length; i++)
            {
                if (i > 0)
                {
                    armorReqDisplay = armorReqDisplay+"<br>"
                }
                if (armorReqNames[0].length > 1)
                {
                    console.log(armorReqNames[0].length)
                    armorReqDisplay = armorReqDisplay+armorReqVals[i]+" in "+armorReqNames[i].substring(2)
                }
            }
            armorReqs.innerHTML = armorReqDisplay

            var isValid = true
            var statBonus = 0
            if (ArmoryExpert == true)
            {
                statBonus = 10
            }
            //Smarts changes the statbonus
            if (parseInt(document.getElementById("upSmarts").innerHTML) == 4)
            {
                statBonus += 1
            }
            if (parseInt(document.getElementById("upSmarts").innerHTML) >= 5)
            {
                statBonus += 2
            }
            //Check reqs
            for (var i = 0; i < armorReqNames.length; i++)
            {
                if (parseInt(document.getElementById(String(armorReqNames[i]).trim()).innerHTML)+statBonus < parseInt(armorReqVals[i]))
                {
                    isValid = false
                }
            }
            
            //Stat Handler
            if (isValid == true)
            {
                //AC Add
                document.getElementById("AC").innerHTML = parseInt(document.getElementById("AC").innerHTML)+parseInt(`${lines[3]}`)

                //Resistance Add
                for (var i = 0; i < armorResistVals.length; i++)
                {
                    retString = armorResistVals[i]
                    addItem2("Resistances",retString)
                }

                //Passive Add
                for (var i = 0; i < armorPassiveList.length; i++)
                {
                    retString = armorPassiveList[i]
                    if (armorPassiveList[i].length > 1)
                    {
                        addItemX("Passive",retString)
                    }
                }

                //Stat Change
                for (var i = 0; i < armorStatNames.length; i++)
                {
                    if (armorStatVals[i].includes("half") == false)
                    {
                        document.getElementById(armorStatNames[i]).innerHTML = parseInt(document.getElementById(armorStatNames[i]).innerHTML)+parseInt(armorStatVals[i])
                    }
                    else
                        document.getElementById(armorStatNames[i]).innerHTML = parseInt(document.getElementById(armorStatNames[i]).innerHTML)/2
                }
            }
            fileContents.innerText = lines[0];
        }
        reader.readAsText(file);
    }
}

function addItemX(list,text)
{
    var textnode=document.createTextNode(text);
    var node=document.createElement("li");
    node.className = "item"
    node.appendChild(textnode);
    document.getElementById(list).appendChild(node);
}