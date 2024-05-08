var ProfList = []
const fProf = searchParams.get('fProf')
document.getElementById('loadBtn').hidden = ""

function addProficiency(type){
    addItem2("ProficienciesL",type)
    ProfList.push(type)
    document.getElementById('Proficiencies').innerHTML = parseInt(document.getElementById('Proficiencies').innerHTML)-1
    //updatePage()
}

function addAllProficiencies(){
    for (let x = 0; x < ProfList.length; x++){
        addItem2("ProficienciesL",ProfList[x])
        document.getElementById('Proficiencies').innerHTML = parseInt(document.getElementById('Proficiencies').innerHTML)-1
    }
}

function clearProficiencies(){
    ProfList = []
    updatePage()
}

// this helper function makes use of the (very convenient) updatePage function, and toggles a proficiency instead of blindly adding it. - NBF
function swapProficiency(type) {
    if (ProfList.includes(type)) {
        var index = ProfList.indexOf(type);
        ProfList.splice(index, 1);
    } else {
        ProfList.push(type)
    }
    updatePage()
}

function loadProficiencies(){
    loadInventory()
    document.getElementById('loadBtn').hidden = "hidden"
    const fProf = searchParams.get('fProf')
    var holdingString = ""
    for (let x = 0; x < fProf.length; x++)
    {
        if (fProf[x] != ',')
        {
            holdingString = holdingString.concat(fProf[x])
        }
        else
        {
            ProfList.push(holdingString)
            holdingString = ""
        }
    }
    if (fProf.length > 0)
    {
        ProfList.push(holdingString)
    }
    updatePage()
}