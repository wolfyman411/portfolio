const perk1 = document.querySelector('#perktype1');
const perk2 = document.querySelector('#perktype2');
const perk3 = document.querySelector('#perktype3');
window.addEventListener("load", updatePagePerks)
dropdown1.addEventListener('change',updatePagePerks)
function updatePagePerks(){
    perk1.innerHTML = '';
    perk2.innerHTML = '';
    perk3.innerHTML = '';
    const FighterPerks = '<option value="Pick A Perk">Pick A Perk</option><option value="Scout">Scout</option><option value="MartialAdept">MartialAdept</option><option value="Hunter">Hunter</option><option value="Wanderer">Wanderer</option><option value="Ruffian">Ruffian</option><option value="Scholar">Scholar</option><option value="AdrenalineJunky">AdrenalineJunky</option>';
    const MedicPerks = '<option value="Pick A Perk">Pick A Perk</option><option value="PlagueDoctor">PlagueDoctor</option><option value="Scholar">Scholar</option><option value="CrossbowMedic">CrossbowMedic</option><option value="ShieldConverter">ShieldConverter</option><option value="LoneSurvivor">LoneSurvivor</option><option value="GroupPractitioner">GroupPractitioner</option>';
    const TechnicianPerks = '<option value="Pick A Perk">Pick A Perk</option><option value="Hacker">Hacker</option><option value="Overclocker">Overclocker</option><option value="Sprinter">Sprinter</option><option value="Energizer">Energizer</option><option value="MartialAdept">MartialAdept</option><option value="LoneSurvivor">LoneSurvivor</option><option value="Wanderer">Wanderer</option>';
    const MercenaryPerks = '<option value="Pick A Perk">Pick A Perk</option><option value="Scout">Scout</option><option value="Hunter">Hunter</option><option value="Sprinter">Sprinter</option><option value="Energizer">Energizer</option><option value="WildCompanion">WildCompanion</option><option value="Wanderer">Wanderer</option><option value="LoneSurvivor">LoneSurvivor</option>';
    const SoldierPerks = '<option value="Pick A Perk">Pick A Perk</option><option value="HeavyWeaponMaster">HeavyWeaponMaster</option><option value="BattleWorn">BattleWorn</option><option value="TechnologySavage">TechnologySavage</option><option value="Hunter">Hunter</option><option value="AlphaTarget">AlphaTarget</option><option value="LoneSurvivor">LoneSurvivor</option><option value="MartialAdept">MartialAdept</option>';
    if (dropdown1.value === 'Fighter') {
        perk1.innerHTML = FighterPerks
        perk2.innerHTML = FighterPerks
        perk3.innerHTML = FighterPerks
    } else if (dropdown1.value === 'Medic') {
        perk1.innerHTML = MedicPerks
        perk2.innerHTML = MedicPerks
        perk3.innerHTML = MedicPerks
    } else if (dropdown1.value === 'Technician') {
        perk1.innerHTML = TechnicianPerks
        perk2.innerHTML = TechnicianPerks
        perk3.innerHTML = TechnicianPerks
    } else if (dropdown1.value === 'Mercenary') {
        perk1.innerHTML = MercenaryPerks
        perk2.innerHTML = MercenaryPerks
        perk3.innerHTML = MercenaryPerks
    } else if (dropdown1.value === 'Soldier') {
        perk1.innerHTML = SoldierPerks
        perk2.innerHTML = SoldierPerks
        perk3.innerHTML = SoldierPerks
    }
}