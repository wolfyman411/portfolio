const championperk = document.querySelector('#championval');
window.addEventListener("load", updatePageChamp)
dropdown1.addEventListener('change',updatePageChamp)
function updatePageChamp(){
    championperk.innerHTML = '';
    if (dropdown1.value === 'Fighter') {
        championperk.innerHTML = '<option value="Pick A Perk">Pick A Perk</option><option value="Bloodlust">Bloodlust</option><option value="Protector">Protector</option><option value="Generator">Generator</option><option value="Slayer">Slayer</option><option value="Sapper">Sapper</option>';
    } else if (dropdown1.value === 'Medic') {
        championperk.innerHTML = '<option value="Pick A Perk">Pick A Perk</option><option value="Protector">Protector</option><option value="Savior">Savior</option><option value="Cleric">Cleric</option><option value="Resurrector">Resurrector</option><option value="SoulLinked">SoulLinked</option>';
    } else if (dropdown1.value === 'Technician') {
        championperk.innerHTML = '<option value="Pick A Perk">Pick A Perk</option><option value="PercussiveMaintenance">PercussiveMaintenance</option><option value="ElectricallyCharged">ElectricallyCharged</option><option value="ExpertMechanic">ExpertMechanic</option><option value="ComputerWhizz">ComputerWhizz</option>';
    } else if (dropdown1.value === 'Mercenary') {
        championperk.innerHTML = '<option value="Pick A Perk">Pick A Perk</option><option value="Bloodlust">Bloodlust</option><option value="Slayer">Slayer</option><option value="ArmoryExpert">ArmoryExpert</option><option value="Brutalist">Brutalist</option><option value="Indomitable">Indomitable</option>';
    } else if (dropdown1.value === 'Soldier') {
        championperk.innerHTML = '<option value="Pick A Perk">Pick A Perk</option><option value="Bloodlust">Bloodlust</option><option value="Slayer">Slayer</option><option value="ArmoryExpert">ArmoryExpert</option><option value="Brutalist">Brutalist</option><option value="Indomitable">Indomitable</option>';
    }
}