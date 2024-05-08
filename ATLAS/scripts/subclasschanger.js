const dropdown1 = document.querySelector('#classtype');
const dropdown2 = document.querySelector('#subclasstype');

window.addEventListener("load", updatePageSubclass)
dropdown1.addEventListener('change',updatePageSubclass)
function updatePageSubclass(){
    dropdown2.innerHTML = '';
    if (dropdown1.value === 'Fighter') {
        dropdown2.innerHTML = '<option value="BattleTactics">BattleTactics</option><option value="PistolTricks">PistolTricks</option><option value="MeleeExpertise">MeleeExpertise</option>';
    } else if (dropdown1.value === 'Medic') {
        dropdown2.innerHTML = '<option value="MedicalDegree">MedicalDegree</option><option value="RevokedLicense">RevokedLicense</option><option value="WitchDoctor">WitchDoctor</option>';
    } else if (dropdown1.value === 'Technician') {
        dropdown2.innerHTML = '<option value="RoboticAffinity">RoboticAffinity</option><option value="PilotTricks">PilotTricks</option><option value="PsionicPowers">PsionicPowers</option>';
    } else if (dropdown1.value === 'Mercenary') {
        dropdown2.innerHTML = '<option value="SwarmSurvivor">SwarmSurvivor</option><option value="StealthTactics">StealthTactics</option><option value="RifleTricks">RifleTricks</option>';
    } else if (dropdown1.value === 'Soldier') {
        dropdown2.innerHTML = '<option value="RageAbilities">RageAbilities</option><option value="ExplosiveCrafting">ExplosiveCrafting</option><option value="MechTraining">MechTraining</option>';
    }
    
}