document.getElementById("chr_agl").addEventListener("input",updateAll)
document.getElementById("chr_trk").addEventListener("input",updateAll)
document.getElementById("chr_lck").addEventListener("input",updateAll)
document.getElementById("chr_ang").addEventListener("input",updateAll)
document.getElementById("chr_smt").addEventListener("input",updateAll)
document.getElementById("chr_lvl").addEventListener("input",updateAll)

document.getElementById("chr_trn1").addEventListener("input",updateAll)
document.getElementById("chr_trn2").addEventListener("input",updateAll)
document.getElementById("chr_cap").addEventListener("input",updateAll)

document.getElementById("chr_skl1").addEventListener("input",updateAll)
document.getElementById("chr_skl2").addEventListener("input",updateAll)
document.getElementById("chr_skl3").addEventListener("input",updateAll)
document.getElementById("chr_skl4").addEventListener("input",updateAll)

document.getElementById("chr_wpn").addEventListener("input",updateAll)
document.getElementById("chr_arm").addEventListener("input",updateAll)

document.getElementById("chr_agl_tal1").addEventListener("input",updateAll)
document.getElementById("chr_agl_tal2").addEventListener("input",updateAll)
document.getElementById("chr_agl_tal3").addEventListener("input",updateAll)
document.getElementById("chr_trk_tal1").addEventListener("input",updateAll)
document.getElementById("chr_trk_tal2").addEventListener("input",updateAll)
document.getElementById("chr_trk_tal3").addEventListener("input",updateAll)
document.getElementById("chr_lck_tal1").addEventListener("input",updateAll)
document.getElementById("chr_lck_tal2").addEventListener("input",updateAll)
document.getElementById("chr_lck_tal3").addEventListener("input",updateAll)
document.getElementById("chr_ang_tal1").addEventListener("input",updateAll)
document.getElementById("chr_ang_tal2").addEventListener("input",updateAll)
document.getElementById("chr_ang_tal3").addEventListener("input",updateAll)
document.getElementById("chr_smt_tal1").addEventListener("input",updateAll)
document.getElementById("chr_smt_tal2").addEventListener("input",updateAll)
document.getElementById("chr_smt_tal3").addEventListener("input",updateAll)

document.getElementById("save").addEventListener("click",saveChar)
document.getElementById("load").addEventListener("click",loadClicked)

document.onload = loadJSON()

var addHP = 0
var addSP = 0
var addCP = 0
var addSpeed = 0
var addAC = 0
var totalSkillPoints = 0
var totalTalentPoints = 0

var training;
var perk;
var capstone;
var weapon;
var armor;

function loadJSON(){
    getJSONS()
    setTimeout(() => {
        updateDropDowns()
    }, 100);
}

function updateAll(){
    resetVars()

    if (training)
    {
        //Get Info from skills, talents, etc.
        updateSkills()
        tallyPoints()
        getInfo()

        //Set weapon info
        handleWeapon()
        handleArmor()
    }
    //Now update the information
    updateCore()
    updatePoints()
}

function resetVars(){
    //Core
    addHP = 0
    addSP = 0
    addCP = 0
    addSpeed = 30

    //Armor
    addAC = 0

    //Points
    totalSkillPoints = 6
    totalTalentPoints = 2
}

function updateDropDowns(){
    for (const item of training.training)
    {
        const newOption = document.createElement("option");
        newOption.text = item.name;
        newOption.value = item.name;
        const newOption2 = document.createElement("option");
        newOption2.text = item.name;
        newOption2.value = item.name;
        document.getElementById("chr_trn1").appendChild(newOption);
        document.getElementById("chr_trn2").appendChild(newOption2);
    }

    for (const item of perk.perk)
    {
        for (var i = 1; i < 5; i++)
        {
            const newOption = document.createElement("option");
            newOption.text = item.name;
            newOption.value = item.name;
            var name = "chr_skl" + i
            document.getElementById(name).appendChild(newOption);
        }
    }

    for (const item of capstone.capstone)
    {
        const newOption = document.createElement("option");
        newOption.text = item.name;
        newOption.value = item.name;
        document.getElementById("chr_cap").appendChild(newOption);
    }

    for (const item of weapon.weapon)
    {
        const newOption = document.createElement("option");
        newOption.text = item.name;
        newOption.value = item.name;
        document.getElementById("chr_wpn").appendChild(newOption);
    }

    for (const item of armor.armor)
        {
            const newOption = document.createElement("option");
            newOption.text = item.name;
            newOption.value = item.name;
            document.getElementById("chr_arm").appendChild(newOption);
        }
}

function getJSONS(){
    fetch('./data/training.json')
    .then(response => response.json())
    .then(data => {
        training = data
    })
    .catch(error => {
    console.error('Error fetching JSON:', error);
    });

    fetch('./data/perk.json')
    .then(response => response.json())
    .then(data => {
        perk = data
    })
    .catch(error => {
    console.error('Error fetching JSON:', error);
    });

    fetch('./data/capstone.json')
    .then(response => response.json())
    .then(data => {
        capstone = data
    })
    .catch(error => {
    console.error('Error fetching JSON:', error);
    });

    fetch('./data/weapon.json')
    .then(response => response.json())
    .then(data => {
        weapon = data
    })
    .catch(error => {
    console.error('Error fetching JSON:', error);
    });

    fetch('./data/armor.json')
    .then(response => response.json())
    .then(data => {
        armor = data
    })
    .catch(error => {
    console.error('Error fetching JSON:', error);
    });
}

function getInfo(){
    var matched = ""
    var HP = 0
    var SP = 0
    var CP = 0
    var SPEED = 0
    //Training
    for (const item of training.training)
    {
        matched = ""
        if (document.getElementById("chr_trn1").value === item.name)
        {
            matched = "train1_info"
            HP = "train1_hp"
            SP = "train1_sp"
            CP = "train1_cp"
            SPEED = "train1_speed"
        }
        else if (document.getElementById("chr_trn2").value === item.name && document.getElementById("chr_lvl").value >= 5)
        {
            matched = "train2_info"
            HP = "train2_hp"
            SP = "train2_sp"
            CP = "train2_cp"
            SPEED = "train2_speed"
        }
        if (matched !== "")
        {
            handleInfo(item,matched,HP,SP,CP,SPEED)
        }
    }
    //Perk
    for (const item of perk.perk)
    {
        matched = ""
        if (document.getElementById("chr_skl1").value === item.name)
        {
            matched = "skill1_info"
            HP = "skill1_hp"
            SP = "skill1_sp"
            CP = "skill1_cp"
            SPEED = "skill1_speed"
        }
        if (document.getElementById("chr_skl2").value === item.name && document.getElementById("chr_lvl").value >= 3)
        {
            matched = "skill2_info"
            HP = "skill2_hp"
            SP = "skill2_sp"
            CP = "skill2_cp"
            SPEED = "skill2_speed"
        }
        if (document.getElementById("chr_skl3").value === item.name && document.getElementById("chr_lvl").value >= 6)
        {
            matched = "skill3_info"
            HP = "skill3_hp"
            SP = "skill3_sp"
            CP = "skill3_cp"
            SPEED = "skill3_speed"
        }
        if (document.getElementById("chr_skl4").value === item.name && document.getElementById("chr_lvl").value >= 9)
        {
            matched = "skill4_info"
            HP = "skill4_hp"
            SP = "skill4_sp"
            CP = "skill4_cp"
            SPEED = "skill4_speed"
        }
        if (matched !== "")
        {
            handleInfo(item,matched,HP,SP,CP,SPEED,1)
        }
    }
    //Capstone
    for (const item of capstone.capstone)
    {
        matched = ""
        if (document.getElementById("chr_cap").value === item.name && document.getElementById("chr_lvl").value >= 10)
        {
            matched = "cap_info"
            HP = "cap_hp"
            SP = "cap_sp"
            CP = "cap_cp"
            SPEED = "cap_speed"
        }
        if (matched !== "")
        {
            handleInfo(item,matched,HP,SP,CP,SPEED,1)
        }
    }
}

function handleWeapon(){
    for (const item of weapon.weapon)
    {
        if (document.getElementById("chr_wpn").value === item.name)
        {
            document.getElementById("wpn_upkeep").innerHTML = item.upkeep
            document.getElementById("wpn_skl").innerHTML = item.skill
            document.getElementById("wpn_rng").innerHTML = item.range
            document.getElementById("wpn_mal").innerHTML = item.malfunction + "/" + item.repair
            document.getElementById("wpn_atk1").innerHTML = splitAbility(item.basic)
            document.getElementById("wpn_atk2").innerHTML = splitAbility(item.special)
            document.getElementById("wpn_crit").innerHTML = item.crit
        }
    }
}

function handleArmor(){
    for (const item of armor.armor)
    {
        if (document.getElementById("chr_arm").value === item.name)
        {
            document.getElementById("arm_upkeep").innerHTML = item.upkeep
            addAC += item.ac
            addSpeed += item.speed
            document.getElementById("arm_res").innerHTML = item.resistant
            document.getElementById("arm_glance").innerHTML = item.glance
            document.getElementById("arm_minor").innerHTML = item.minor
            document.getElementById("arm_major").innerHTML = item.major
            document.getElementById("arm_note").innerHTML = item.bonus
        }
    }
}

function handleInfo(item,matched,HP,SP,CP,SPEED,type=0){
    addHP += item.hp
    addSP += item.sp
    addCP += item.cp
    addSpeed += item.speed
    if (item.talent)
    {
        totalTalentPoints += item.talent
    }
    if (item.ac)
    {
        addAC += item.ac
    }
    var info = ""
    if (type == 0)
    {
        for (const ability of item.data1)
        {
            info += splitAbility(ability)
        }
        if (document.getElementById("chr_lvl").value >= 4)
        {
            for (const ability of item.data2)
            {
                info += splitAbility(ability)
            }
        }
        if (document.getElementById("chr_lvl").value >= 7)
        {
            for (const ability of item.data3)
            {
                info += splitAbility(ability)
            }
        }
    }
    else if (type == 1)
    {
        for (const ability of item.data)
        {
            info += splitAbility(ability)
        }
    }
    document.getElementById(matched).innerHTML = info
    document.getElementById(HP).innerHTML = "HP: "+item.hp
    document.getElementById(SP).innerHTML = "SP: "+item.sp
    document.getElementById(CP).innerHTML = "CP: "+item.cp
    document.getElementById(SPEED).innerHTML = item.speed+ "ft"
}

function splitAbility(data){
    if (data.length < 4)
    {
        return ""
    }
    const splitResult = data.split("]:", 2);
    splitResult[0] = "<strong>"+splitResult[0]+"]:"+"</strong>"
    return splitResult[0]+splitResult[1]+"<br />"+"<br />"
}

function updateSkills(){
    addSpeed += skillBonus(document.getElementById("chr_agl").value) * 5;
    addCP += skillBonus(document.getElementById("chr_trk").value) * 1;
    addSP += skillBonus(document.getElementById("chr_lck").value) * 1;
    addHP += skillBonus(document.getElementById("chr_ang").value) * 1;
    totalTalentPoints += skillBonus(document.getElementById("chr_smt").value) * 1;
}

function tallyPoints(){
    //Skill Points
    totalSkillPoints += document.getElementById("chr_lvl").value * 1;
    totalSkillPoints -= document.getElementById("chr_agl").value
    totalSkillPoints -= document.getElementById("chr_trk").value
    totalSkillPoints -= document.getElementById("chr_lck").value
    totalSkillPoints -= document.getElementById("chr_ang").value
    totalSkillPoints -= document.getElementById("chr_smt").value
    
    //Talent Points
    totalTalentPoints += Math.floor(document.getElementById("chr_lvl").value/3)

    //Check if there is a value inside each talent
    var nameArray = ["agl","trk","lck","ang","smt"]
    for (item in nameArray)
    {
        for (let i = 1; i < 4; i++)
        {
            var name = "chr_"+nameArray[item]+"_tal"+i
            if (document.getElementById(name).value.length > 2)
            {
                totalTalentPoints -= 1
            }
        }
    }
}

function updateCore(){
    document.getElementById("chr_maxHP").innerHTML = addHP
    document.getElementById("chr_maxSP").innerHTML = addSP
    document.getElementById("chr_maxCP").innerHTML = addCP
    document.getElementById("chr_speed").innerHTML = addSpeed + "ft"

    document.getElementById("arm_ac").innerHTML = addAC
}

function updatePoints(){
    document.getElementById("chr_skillpoints").innerHTML = "Pnts: "+totalSkillPoints
    document.getElementById("chr_talentpoints").innerHTML = "Tlts: "+totalTalentPoints
    document.getElementById("chr_talent_score").innerHTML = 1 + Math.min(Math.floor(document.getElementById("chr_lvl").value/3),3)
}

function skillBonus(val){
    if (val >= 5)
    {
        return 3
    }
    else if (val >= 3)
    {
        return 2
    }
    else if (val >= 1)
    {
        return 1
    }
    return 0
}

function loadClicked(){

    //Open Explorer
    const input = document.getElementById("fileInput");
    input.click();
}

document.getElementById('fileInput').addEventListener('change', function (event) {
    console.log("attempting load")

    //Get Json
    const file = event.target.files[0];


    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const jsonData = JSON.parse(e.target.result);
                loadChar(jsonData)
            }
            catch (error){
                console.log("something went wrong",error)
            }
        };
        reader.readAsText(file);
    }
    else{
        console.log("No file")
    }
})

function loadChar(obj){
    // Get Info
    document.getElementById("chr_name").value = obj.name
    document.getElementById("chr_lvl").value = obj.level;
    document.getElementById("chr_sex").value = obj.sex;
    document.getElementById("chr_build").value = obj.build;
    document.getElementById("chr_age").value = obj.age;
    document.getElementById("chr_height").value = obj.height;
    document.getElementById("chr_planet").value = obj.planet;

    // Get CORE values
    document.getElementById("chr_curHP").value = obj.curHP;
    document.getElementById("chr_curSP").value = obj.curSP;
    document.getElementById("chr_curCP").value = obj.curCP;
    document.getElementById("chr_TP").value = obj.TP;

    // Get Skills values
    document.getElementById("chr_agl").value = obj.agility;
    document.getElementById("chr_trk").value = obj.trickery;
    document.getElementById("chr_lck").value = obj.luck;
    document.getElementById("chr_ang").value = obj.anger;
    document.getElementById("chr_smt").value = obj.smarts;

    // Get Talents
    for (item in obj.agility_talents)
    {
        var name = "chr_agl_tal"+(item * 1 + 1)
        console.log(name)
        document.getElementById(name).value = obj.agility_talents[item]
    }
    for (item in obj.trickery_talents)
    {
        var name = "chr_trk_tal"+(item * 1 + 1)
        console.log(name)
        document.getElementById(name).value = obj.trickery_talents[item]
    }
    for (item in obj.luck_talents)
    {
        var name = "chr_lck_tal"+(item * 1 + 1)
        console.log(name)
        document.getElementById(name).value = obj.luck_talents[item]
    }
    for (item in obj.anger_talents)
    {
        var name = "chr_ang_tal"+(item * 1 + 1)
        console.log(name)
        document.getElementById(name).value = obj.anger_talents[item]
    }
    for (item in obj.smarts_talents)
    {
        var name = "chr_smt_tal"+(item * 1 + 1)
        console.log(name)
        document.getElementById(name).value = obj.smarts_talents[item]
    }

    // Get Perks, Training, Capstone
    document.getElementById("chr_skl1").value = obj.perk1;
    document.getElementById("chr_skl2").value = obj.perk2;
    document.getElementById("chr_skl3").value = obj.perk3;
    document.getElementById("chr_skl4").value = obj.perk4;

    document.getElementById("chr_trn1").value = obj.train1;
    document.getElementById("chr_trn2").value = obj.train2;

    document.getElementById("chr_cap").value = obj.cap;

    // Get Weapon, Armor
    document.getElementById("chr_wpn").value = obj.wpn;
    document.getElementById("chr_arm").value = obj.arm;

    // Get Inventory/Notes
    document.getElementById("chr_note1").value = obj.note1;
    document.getElementById("chr_note2").value = obj.note2;

    // Get Weapon, Armor
    document.getElementById("chr_wpn").value = obj.wpn;
    document.getElementById("chr_arm").value = obj.arm;

    // Get Inventory/Notes
    document.getElementById("chr_note1").value = obj.note1;
    document.getElementById("chr_note2").value = obj.note2;

    updateAll()
}

function saveChar(){
    console.log("attempting save")
    var obj = new Object();
    //Save Info
    obj.name = document.getElementById("chr_name").value
    obj.level = document.getElementById("chr_lvl").value
    obj.sex = document.getElementById("chr_sex").value
    obj.build = document.getElementById("chr_build").value
    obj.age = document.getElementById("chr_age").value
    obj.height = document.getElementById("chr_height").value
    obj.planet = document.getElementById("chr_planet").value

    //Save CORE
    obj.curHP = document.getElementById("chr_curHP").value
    obj.curSP = document.getElementById("chr_curSP").value
    obj.curCP = document.getElementById("chr_curCP").value
    obj.TP = document.getElementById("chr_TP").value

    //Save Skills
    obj.agility = document.getElementById("chr_agl").value
    obj.trickery = document.getElementById("chr_trk").value
    obj.luck = document.getElementById("chr_lck").value
    obj.anger = document.getElementById("chr_ang").value
    obj.smarts = document.getElementById("chr_smt").value

    //Save Talents
    obj.agility_talents = []
    obj.trickery_talents = []
    obj.luck_talents = []
    obj.anger_talents = []
    obj.smarts_talents = []

    var nameArray = ["agl","trk","lck","ang","smt"]
    for (item in nameArray)
    {
        for (let i = 1; i < 4; i++)
        {
            var name = "chr_"+nameArray[item]+"_tal"+i
            if (document.getElementById(name).value.length > 2)
            {
                console.log(document.getElementById(name).value)
                if (item == 0)
                    obj.agility_talents.push(document.getElementById(name).value)
                else if (item == 1)
                    obj.trickery_talents.push(document.getElementById(name).value)
                else if (item == 2)
                    obj.luck_talents.push(document.getElementById(name).value)
                else if (item == 3)
                    obj.anger_talents.push(document.getElementById(name).value)
                else if (item == 4)
                    obj.smarts_talents.push(document.getElementById(name).value)
            }
        }
    }

    //Save Perks, Training, Capstone
    obj.perk1 = document.getElementById("chr_skl1").value
    obj.perk2 = document.getElementById("chr_skl2").value
    obj.perk3 = document.getElementById("chr_skl3").value
    obj.perk4 = document.getElementById("chr_skl4").value

    obj.train1 = document.getElementById("chr_trn1").value
    obj.train2 = document.getElementById("chr_trn2").value

    obj.cap = document.getElementById("chr_cap").value

    //Save Weapon, Armor
    obj.wpn = document.getElementById("chr_wpn").value
    obj.arm = document.getElementById("chr_arm").value

    //Save Inventory/Notes
    obj.note1 = document.getElementById("chr_note1").value
    obj.note2 = document.getElementById("chr_note2").value

    //TO JSON
    var jsonString = JSON.stringify(obj);

    //Create link and download
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = obj.name+"_"+obj.level+'.json';
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}