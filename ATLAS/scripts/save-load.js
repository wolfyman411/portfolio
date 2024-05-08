//Basics
const chrName = document.querySelector('#chrName');
const dropdown = document.querySelector('#classtype');

const saveBtn = document.querySelector('#saveBtn');
const loadBtn = document.querySelector('#loadBtn');
const curlvl = document.querySelector('#levelVal');

const searchParams = new URLSearchParams(window.location.search);

//Basics
const text = searchParams.get('chrName');
const selectedOption = searchParams.get('selectedOption');
const selectedSubclass = searchParams.get('selectedSubclass')
const selectedPerk1 = searchParams.get('perk1')
const selectedPerk2 = searchParams.get('perk2')
const selectedPerk3 = searchParams.get('perk3')
const selectedChamp = searchParams.get('championperk')

const selectedlvl = searchParams.get('curlvl')

//Core
const fcurHP = searchParams.get('fcurHP')
const fcurSP = searchParams.get('fcurSP')
const fcurCP = searchParams.get('fcurCP')
const fcurTP = searchParams.get('fcurTP')
//const fProf = searchParams.get('fProf')
const ftrait1 = searchParams.get('ftrait1')
const ftrait2 = searchParams.get('ftrait2')
const fbackground = searchParams.get('fbackground')

//Stats
const pAgility = searchParams.get('pAgility');
const pFinesse = searchParams.get('pFinesse');
const pDodge = searchParams.get('pDodge');
const pPistolTraining = searchParams.get('pPistolTraining');
const pSpeed = searchParams.get('pSpeed');
const pTrickery = searchParams.get('pTrickery');
const pSleightofHand = searchParams.get('pSleightofHand');
const pStealth = searchParams.get('pStealth');
const pDeception = searchParams.get('pDeception');
const pCharm = searchParams.get('pCharm');
const pLuck = searchParams.get('pLuck');
const pRifleTraining = searchParams.get('pRifleTraining');
const pAccuracy = searchParams.get('pAccuracy');
const pScavenge = searchParams.get('pScavenge');
const pPilot = searchParams.get('pPilot');
const pAnger = searchParams.get('pAnger');
const pConstitution = searchParams.get('pConstitution');
const pMeleeTraining = searchParams.get('pMeleeTraining');
const pHeavyWeaponTraining = searchParams.get('pHeavyWeaponTraining');
const pWrath = searchParams.get('pWrath');
const pSmarts = searchParams.get('pSmarts');
const pAnimalHandling = searchParams.get('pAnimalHandling');
const pAwareness = searchParams.get('pAwareness');
const pSurvival = searchParams.get('pSurvival');
const pMechanic = searchParams.get('pMechanic');

//Basics
if (text) {
  chrName.value = text;
}
if (selectedOption) {
  dropdown.value = selectedOption;
}
if (selectedSubclass) {
  dropdown2.value = selectedSubclass;
}
if (perk1) {
  perk1.value = selectedPerk1;
}
if (perk2) {
  perk2.value = selectedPerk2;
}
if (perk3) {
  perk3.value = selectedPerk3;
}
if (championperk) {
  championperk.value = selectedChamp;
}

if (curlvl) {
  curlvl.value = selectedlvl;
}
//Core
if (fcurHP){
  document.getElementById('curHP').value = fcurHP
}
if (fcurSP){
  document.getElementById('curSP').value = fcurSP
}
if (fcurCP){
  document.getElementById('curCP').value = fcurCP
}
if (fcurTP){
  document.getElementById('curTP').value = fcurTP
}
/*if (fProf){
  ProfList = fProf
}*/
if (ftrait1){
  document.getElementById('trait1').value = ftrait1
}
if (ftrait2){
  document.getElementById('trait2').value = ftrait2
}
if (fbackground){
  document.getElementById('background').value = fbackground
}

//Stats
if (pAgility) {
  Agility.value = pAgility;
}
if (pFinesse) {
  Finesse.value = pFinesse;
}
if (pDodge) {
  Dodge.value = pDodge;
}
if (pPistolTraining) {
  PistolTraining.value = pPistolTraining;
}
if (pSpeed) {
  Speed.value = pSpeed;
}
if (pTrickery) {
  Trickery.value = pTrickery;
}
if (pSleightofHand) {
  SleightofHand.value = pSleightofHand;
}
if (pStealth) {
  Stealth.value = pStealth;
}
if (pDeception) {
  Deception.value = pDeception;
}
if (pCharm) {
  Charm.value = pCharm;
}
if (pLuck) {
  Luck.value = pLuck;
}
if (pRifleTraining) {
  RifleTraining.value = pRifleTraining;
}
if (pAccuracy) {
  Accuracy.value = pAccuracy;
}
if (pScavenge) {
  Scavenge.value = pScavenge;
}
if (pPilot) {
  Pilot.value = pPilot;
}
if (pAnger) {
  Anger.value = pAnger;
}
if (pConstitution) {
  Constitution.value = pConstitution;
}
if (pMeleeTraining) {
  MeleeTraining.value = pMeleeTraining;
}
if (pHeavyWeaponTraining) {
  HeavyWeaponTraining.value = pHeavyWeaponTraining;
}
if (pWrath) {
  Wrath.value = pWrath;
}
if (pSmarts) {
  Smarts.value = pSmarts;
}
if (pAnimalHandling) {
  AnimalHandling.value = pAnimalHandling;
}
if (pAwareness) {
  Awareness.value = pAwareness;
}
if (pSurvival) {
  Survival.value = pSurvival;
}
if (pMechanic) {
  Mechanic.value = pMechanic;
}

saveBtn.addEventListener('click', () => {


//Basics
  const text = chrName.value;
  const selectedOption = dropdown.value;
  const selectedSubclass = dropdown2.value;
  const selectedPerk1 = perk1.value;
  const selectedPerk2 = perk2.value;
  const selectedPerk3 = perk3.value;
  const selectedChamp = championperk.value

  const selectedlvl = curlvl.value;
//Stats
  const pAgility = Agility.value;
  const pFinesse = Finesse.value;
  const pDodge = Dodge.value;
  const pPistolTraining = PistolTraining.value;
  const pSpeed = document.getElementById("Speed").value;
  const pTrickery = Trickery.value;
  const pSleightofHand = SleightofHand.value;
  const pStealth = Stealth.value;
  const pDeception = Deception.value;
  const pCharm = Charm.value;
  const pLuck = Luck.value;
  const pRifleTraining = RifleTraining.value;
  const pAccuracy = Accuracy.value;
  const pScavenge = Scavenge.value;
  const pPilot = Pilot.value;
  const pAnger = Anger.value;
  const pConstitution = Constitution.value;
  const pMeleeTraining = MeleeTraining.value;
  const pHeavyWeaponTraining = HeavyWeaponTraining.value;
  const pWrath = Wrath.value;
  const pSmarts = Smarts.value;
  const pAnimalHandling = AnimalHandling.value;
  const pAwareness = document.getElementById("Awareness").value;
  const pSurvival = Survival.value;
  const pMechanic = Mechanic.value;
//Core
  const fcurHP = document.getElementById('curHP').value;
  const fcurSP = document.getElementById('curSP').value;
  const fcurCP = document.getElementById('curCP').value;
  const fcurTP = document.getElementById('curTP').value;
  const fProf = ProfList;
  const fInventory = lineInventory;
  const ftrait1 = document.getElementById('trait1').value;
  const ftrait2= document.getElementById('trait2').value;
  const fbackground = document.getElementById('background').value;

  const searchParams = new URLSearchParams(window.location.search);
//Basics
  searchParams.set('chrName', text);
  searchParams.set('selectedOption', selectedOption);
  searchParams.set('selectedSubclass', selectedSubclass);
  searchParams.set('selectedPerk1', selectedPerk1);
  searchParams.set('selectedPerk2', selectedPerk2);
  searchParams.set('selectedPerk3', selectedPerk3);
  searchParams.set('selectedChamp', selectedChamp);

  searchParams.set('selectedlvl', selectedlvl);
//Stats
  searchParams.set('pAgility', pAgility);
  searchParams.set('pFinesse', pFinesse);
  searchParams.set('pDodge', pDodge);
  searchParams.set('pPistolTraining', pPistolTraining);
  searchParams.set('pSpeed', pSpeed);
  searchParams.set('pTrickery', pTrickery);
  searchParams.set('pSleightofHand', pSleightofHand);
  searchParams.set('pStealth', pStealth);
  searchParams.set('pDeception', pDeception);
  searchParams.set('pCharm', pCharm);
  searchParams.set('pLuck', pLuck);
  searchParams.set('pRifleTraining', pRifleTraining);
  searchParams.set('pAccuracy', pAccuracy);
  searchParams.set('pScavenge', pScavenge);
  searchParams.set('pPilot', pPilot);
  searchParams.set('pAnger', pAnger);
  searchParams.set('pConstitution', pConstitution);
  searchParams.set('pMeleeTraining', pMeleeTraining);
  searchParams.set('pHeavyWeaponTraining', pHeavyWeaponTraining);
  searchParams.set('pWrath', pWrath);
  searchParams.set('pSmarts', pSmarts);
  searchParams.set('pAnimalHandling', pAnimalHandling);
  searchParams.set('pAwareness', pAwareness);
  searchParams.set('pSurvival', pSurvival);
  searchParams.set('pMechanic', pMechanic);
//Core
  searchParams.set('fcurHP', fcurHP);
  searchParams.set('fcurSP', fcurSP);
  searchParams.set('fcurCP', fcurCP);
  searchParams.set('fcurTP', fcurTP);
  searchParams.set('fProf', fProf);
  searchParams.set('fInventory', fInventory);

  searchParams.set('ftrait1', ftrait1);
  searchParams.set('ftrait2', ftrait2);
  searchParams.set('fbackground', fbackground);

  window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
});
loadBtn.addEventListener('click', () => {

  const params = (new URL(document.location)).searchParams;

//Basics
  const text = params.get('chrName');
  const selectedOption = params.get('selectedOption');
  const selectedSubclass = params.get('selectedSubclass');
  const selectedPerk1 = params.get('selectedPerk1');
  const selectedPerk2 = params.get('selectedPerk2');
  const selectedPerk3 = params.get('selectedPerk3');
  const selectedChamp = params.get('selectedChamp');
  const selectedlvl = params.get('selectedlvl')
//Core
  const fcurHP = params.get('fcurHP') 
  const fcurSP = params.get('fcurSP') 
  const fcurCP = params.get('fcurCP') 
  const fcurTP = params.get('fcurTP')

  const ftrait1 = params.get('ftrait1')
  const ftrait2 = params.get('ftrait2')
  const fbackground = params.get('fbackground')

//Stats
  const pAgility = searchParams.get('pAgility');
  const pFinesse = searchParams.get('pFinesse');
  const pDodge = searchParams.get('pDodge');
  const pPistolTraining = searchParams.get('pPistolTraining');
  const pSpeed = searchParams.get('pSpeed');
  const pTrickery = searchParams.get('pTrickery');
  const pSleightofHand = searchParams.get('pSleightofHand');
  const pStealth = searchParams.get('pStealth');
  const pDeception = searchParams.get('pDeception');
  const pCharm = searchParams.get('pCharm');
  const pLuck = searchParams.get('pLuck');
  const pRifleTraining = searchParams.get('pRifleTraining');
  const pAccuracy = searchParams.get('pAccuracy');
  const pScavenge = searchParams.get('pScavenge');
  const pPilot = searchParams.get('pPilot');
  const pAnger = searchParams.get('pAnger');
  const pConstitution = searchParams.get('pConstitution');
  const pMeleeTraining = searchParams.get('pMeleeTraining');
  const pHeavyWeaponTraining = searchParams.get('pHeavyWeaponTraining');
  const pWrath = searchParams.get('pWrath');
  const pSmarts = searchParams.get('pSmarts');
  const pAnimalHandling = searchParams.get('pAnimalHandling');
  const pAwareness = searchParams.get('pAwareness');
  const pSurvival = searchParams.get('pSurvival');
  const pMechanic = searchParams.get('pMechanic');

//Basics

if (text) {
  chrName.value = text;
}
if (selectedOption) {
  dropdown.value = selectedOption;
}
if (selectedSubclass) {
  dropdown2.value = selectedSubclass;
}
if (perk1) {
  perk1.value = selectedPerk1;
}
if (perk2) {
  perk2.value = selectedPerk2;
}
if (perk3) {
  perk3.value = selectedPerk3;
}
if (championperk) {
  championperk.value = selectedChamp;
}


if (curlvl) {
  curlvl.value = selectedlvl;
}
//Core
if (fcurHP){
  document.getElementById('curHP').value = fcurHP
}
if (fcurSP){
  document.getElementById('curSP').value = fcurSP
}
if (fcurCP){
  document.getElementById('curCP').value = fcurCP
}
if (fcurTP){
  document.getElementById('curTP').value = fcurTP
}
/*if (fProf){
  ProfList = fProf
}*/
if (ftrait1){
  document.getElementById('trait1').value = ftrait1
}
if (ftrait2){
  document.getElementById('trait2').value = ftrait2
}
if (fbackground){
  document.getElementById('background').value = fbackground
}


});
//Stats
if (pAgility) {
  Agility.value = pAgility;
}
if (pFinesse) {
  Finesse.value = pFinesse;
}
if (pDodge) {
  Dodge.value = pDodge;
}
if (pPistolTraining) {
  PistolTraining.value = pPistolTraining;
}
if (pSpeed) {
  Speed.value = pSpeed;
}
if (pTrickery) {
  Trickery.value = pTrickery;
}
if (pSleightofHand) {
  SleightofHand.value = pSleightofHand;
}
if (pStealth) {
  Stealth.value = pStealth;
}
if (pDeception) {
  Deception.value = pDeception;
}
if (pCharm) {
  Charm.value = pCharm;
}
if (pLuck) {
  Luck.value = pLuck;
}
if (pRifleTraining) {
  RifleTraining.value = pRifleTraining;
}
if (pAccuracy) {
  Accuracy.value = pAccuracy;
}
if (pScavenge) {
  Scavenge.value = pScavenge;
}
if (pPilot) {
  Pilot.value = pPilot;
}
if (pAnger) {
  Anger.value = pAnger;
}
if (pConstitution) {
  Constitution.value = pConstitution;
}
if (pMeleeTraining) {
  MeleeTraining.value = pMeleeTraining;
}
if (pHeavyWeaponTraining) {
  HeavyWeaponTraining.value = pHeavyWeaponTraining;
}
if (pWrath) {
  Wrath.value = pWrath;
}
if (pSmarts) {
  Smarts.value = pSmarts;
}
if (pAnimalHandling) {
  AnimalHandling.value = pAnimalHandling;
}
if (pAwareness) {
  Awareness.value = pAwareness;
}
if (pSurvival) {
  Survival.value = pSurvival;
}
if (pMechanic) {
  Mechanic.value = pMechanic;
}