var retString = ""

function getSubclassInfo(classname, level)
{
//Fighter
    if (classname == 'BattleTactics'){
        {
            if (level == 1){
                retString = "[Cover Tactician]: When behind cover, your AC will increase by 1."
                addItemS("Passive",retString)
                retString = "1 SP [Ready Shot]: Train your eyes on a piece of cover, when an enemy attempts to attack or leave that piece of cover, youll have advantage"
                addItemS("OffensiveA",retString)
            }
            if (level == 2){
                retString = "1 SP [Commanders Strike]: Give an ally that you can see an additional primary attack on a target of your choice. If this is refused, the SP will be consumed."
                addItemS("OffensiveA",retString)
            }
            if (level == 3){
                retString = "[Pack Tactics]: If an ally is within 5ft of an enemy, you gain advantage on your attack."
                addItemS("Passive",retString)
                retString = "1 SP [Commanders Flank]: Give an ally that you can see an additional 15ft of movement on a position of your choice. If this is refused, the SP will be consumed."
                addItemS("SupportA",retString)
            }
            if (level == 4){
                retString = "2 SP [Body Shield]: When you make a successful grapple check, you can use the grappled individual as a shield. Any attack that would hit you will instead hit your body shield."
                addItemS("DefensiveA",retString)
            }
            if (level == 5){
                retString = "[Evasive Maneuvers]: If you move at least 20 ft on your turn, the next attack against you will have disadvantage."
                addItemS("Passive",retString)
                retString = "2 SP [Commanders Confidence]: Give an ally an additional 1d4 Temporary points. At level 7 you can give an ally 2d4 Temporary points."
                addItemS("SupportA",retString)
            }
            if (level == 7){
                retString = "[Target Practice]: You no longer have disadvantage on ranged attacks if an enemy is too close to you."
                addItemS("Passive",retString)
            }
            if (level == 8){
                retString = "2 SP [Marked for Death]: Mark an enemy, and all attacks done to it by you and your allies will deal an additional 1 damage until the start of your next turn."
                addItemS("OffensiveA",retString)
            }
            if (level == 9){
                retString = "[Elite Targeting]: If you drop an enemy to 0 HP on your attack, make another primary attack against an enemy at no extra SP cost."
                addItemS("KillEnemy",retString)
            }
        }
    }
    if (classname == 'PistolTricks'){
        {
            if (level == 1){
                retString = "[Dangerous Tumbleweed]: When you slide, you instead roll and do not become prone. This can only be done once per turn."
                addItemS("Abilities",retString)
                retString = "1 SP [Trained Eye]: Pick a creature you can see, and gain information on 2 talents or traits. This cannot be done on the same target. At level 5, you can pick 2 targets."
                addItemS("SupportA",retString)
                retString = "1 SP [Ricochet]: When you make a crit attack with a pistol weapon, your bullet can ricochet to a target within 15ft of the initial shot and automatically deal damage."
                addItemS("OffensiveA",retString)
            }
            if (level == 2){
                retString = "1 SP [Warning Shot]: On a successful ranged pistol attack, make a contesting wrath check against a targets constitution and expend a shot. If successful, the target will become scared of you until the end of your next turn."
                addItemS("OffensiveA",retString)
                retString = "1 SP [Cripple Shot]: On a successful ranged pistol attack, if successful the target will gain the slowed  condition for 1 turn."
                addItemS("OffensiveA",retString)
            }
            if (level == 4){
                retString = "2 SP [Mutilating Shot]: On a successful ranged pistol attack, if successful the target will gain the bleeding condition for 1 turn."
                addItemS("OffensiveA",retString)
            }
            if (level == 5){
                retString = "[Target Practice]: You no longer have disadvantage on ranged attacks if an enemy is too close to you."
                addItemS("Bonuses",retString)
            }
            if (level == 6){
                retString = "1 SP [Pushing Shot]: On a successful ranged pistol attack, if successful the target will be moved 5ft away from you."
                addItemS("OffensiveA",retString)
            }
            if (level == 7){
                retString = "[Armor Penetrator]: When you attack a creature with an AC higher than 1, when you attack you gain a +1 to the roll."
                addItemS("Passive",retString)
                retString = "2 SP [Disabling Shot]: On a successful ranged pistol attack, if successful the target will be disarmed."
                addItemS("OffensiveA",retString)
            }
            if (level == 9){
                retString = "[Feedback Loop]: When an enemy is hit with a crit attack, roll a d5. If the dice rolls 5 make another crit attack. This continues until a 5 is not rolled."
                addItemS("Passive",retString)
            }
        }
    }
    if (classname == 'MeleeExpertise'){
        {
            if (level == 1){
                retString = "Slashing, Piercing, and Bludgeoning"
                addItem2("Resistances",retString)
                retString = "1 SP [Cripple]: When you successfully hit a creature, you give them the slowed condition for 1 turn."
                addItemS("OffensiveA",retString)
                retString = "1 SP [Taunt]: Make a contesting check with your wrath against a creatures constitution. If successful the creature will become enraged with you."
                addItemS("SupportA",retString)
            }
            if (level == 2){
                retString = "1 SP [Trained Attack]: Gain +2 to hit on your next attack."
                addItemS("SupportA",retString)
            }
            if (level == 3){
                retString = "[Pain Gains]: When you are attacked by an enemy you gain an additional SP point. This means you can go past your cap and hold onto them. If the same enemy hits you twice in one turn you only get 1 SP point."
                addItemS("Bonuses",retString)
                retString = "2 SP [Adrenaline]: Give yourself 1d4-1 Temporary HP."
                addItemS("DefensiveA",retString)
            }
            if (level == 4){
                retString = "1 SP [Toughen]: The next successful attack that hits you deals half damage."
                addItemS("DefensiveA",retString)
            }
            if (level == 5){
                retString = "[Harder Swings]: When you make a melee attack and it is successful, roll a d5. If you roll a 5, the attack damage will be doubled."
                addItemS("Passive",retString)
            }
            if (level == 6){
                retString = "2 SP [Disarm]: Make a contesting wrath check against a target within 5ft. If you win the check, you can choose to disarm the attacker and toss the weapon 10ft away from you."
                addItemS("OffensiveA",retString)
            }
            if (level == 7){
                retString = "[Armor Penetrator]: When you attack a creature with an AC higher than 1, when you attack you gain a +1 to the roll."
                addItemS("Passive",retString)
            }
            if (level == 9){
                retString = "[Close the Distance]: When you get attacked by a ranged attack, you get to move an additional 5ft even if it isnt your turn."
                addItemS("Passive",retString)
            }
        }
    }
//Medic
    if (classname == 'MedicalDegree'){
        {
            if (level == 1){
                retString = "[Passive Regen]: Every round you get 1 Temporary point."
                addItemS("Passive",retString)
                retString = "1 CP [Heal]: Pick a creature that you can touch, and heal them for 1d4-1 HP. At level 5 this effect increases to 1d4 HP. At level 10 this effect increases to 2d4 HP."
                addItemS("SupportA",retString)
                retString = "2 SP [Cauterize]: Pick a creature you can touch and remove the bleeding condition."
                addItemS("SupportA",retString)
            }
            if (level == 3){
                retString = "[Allied Regen]: Every ally within 15ft of you gets 1 Temporary point every turn."
                addItemS("Passive",retString)
                retString = "1 CP [Overshield]: Give an ally 1d4-1 Temporary points."
                addItemS("SupportA",retString)
                retString = "1 HP [Refresh]: Roll a d5, if it is 4 or higher gain a CP point."
                addItemS("OffensiveA",retString)
            }
            if (level == 5){
                retString = "[Medical Jolt]: When you heal a teammate they will gain advantage on their next roll."
                addItemS("Passive",retString)
                retString = "1 SP [Walk it Off]: Pick an ally within 15ft. The next attack to them deals half damage."
                addItemS("SupportA",retString)
            }
            if (level == 7){
                retString = "[Strong in Numbers]: When you heal, you can add the current amount of conscious allies to the health roll. This caps at 5."
                addItemS("Bonuses",retString)
                retString = "2 CP [Healing Aura]: Every ally within 15ft of you gains HP equal to your survival modifier."
                addItemS("SupportA",retString)
            }
            if (level == 9){
                retString = "[Second Chance]: If you or an ally drops to 0 HP, you can bring them back to full HP. This can be done once per long rest."
                addItemS("Abilities",retString)
            }
        }
    }
    if (classname == 'RevokedLicense'){
        {
            if (level == 1){
                retString = "[Vampiric Touch]: When you drop a creature to 0 HP, you get 1d4 temporary points."
                addItemS("KillEnemy",retString)
                retString = "1 CP [Overheal]: Pick a creature that you can touch, and heal them for 1d6 HP. If you heal them past their maximum HP, they gain disadvantage."
                addItemS("SupportA",retString)
                retString = "1 SP [Burn]: Pick a creature you can touch and remove the bleeding condition, but they take 1 damage."
                addItemS("SupportA",retString)
            }
            if (level == 3){
                retString = "[Multiattack]: When you make a primary attack with any weapon class other than heavy, you can attack twice without the SP cost increasing. This can only be done once per turn."
                addItemS("Abilities",retString)
                retString = "1 CP [Tumor Shield]: Give an ally within 15ft of you. The next attack done to the creature will cause half damage, but all creatures within 5ft of them will take 2 acid damage."
                addItemS("SupportA",retString)
            }
            if (level == 4){
                retString = "2 SP [Life Leech]: Pick a target within 30ft, the next attack done to them will give you HP equal to half the damage of the attack. You cannot pick yourself as a target."
                addItemS("SupportA",retString)
            }
            if (level == 5){
                retString = "[Medical Jolt]: When you heal a teammate they will gain advantage on their next roll."
                addItemS("Passive",retString)
                retString = "2 SP [Numbness]: Pick an ally within 15ft. The next attack to them will deal no damage."
                addItemS("SupportA",retString)
            }
            if (level == 7){
                retString = "[Broken Oath]: When you make a crit attack with a melee weapon, there is a 1 in 5 chance to regain a CP point back."
                addItemS("Bonuses",retString)
                retString = "2 CP [Linked Souls]: Pick an ally, when you take damage they will receive 1d4 temporary points. If they take damage, you receive 1d4 temporary points."
                addItemS("SupportA",retString)
            }
            if (level == 9){
                retString = "[Zombification]: When you drop a creature to 0 HP, there is a 1 in 5 chance that the creature will come back with a fourth of its health and fight for your side."
                addItemS("KillEnemy",retString)
            }
        }
    }
    if (classname == 'WitchDoctor'){
        {
            if (level == 1){
                retString = "[Spray Potion]: A Spray potion cannot be thrown, but rather affects all targets within 10ft of you."
                addItemS("DefensiveA",retString)
                retString = "1 CP [Restoration Potion]: All creatures in the effect gain 1d4-1 HP."
                addItemS("SupportA",retString)
                retString = "1 CP [Shield Potion]: All creatures in the effect gain 1d4 Temporary HP."
                addItemS("SupportA",retString)
            }
            if (level == 2){
                retString = "1 CP [Adrenaline Potion]: All creatures in the effect gain +1 to SP."
                addItemS("SupportA",retString)
            }
            if (level == 3){
                retString = "Poison and Acid"
                addItem2("Resistances",retString)
                retString = "2 CP [Speed Potion]: All creatures in the effect gain 15ft to movement."
                addItemS("SupportA",retString)
            }
            if (level == 4){
                retString = "[Splash Potion]: A splash potion can be thrown up to 15ft, and affects all targets within a 10ft splash zone."
                addItemS("DefensiveA",retString)
                retString = "1 CP [Slowness Potion]: All creatures in the effect gain the slowed condition."
                addItemS("OffensiveA",retString)
                retString = "2 CP [Weakness Potion]: All creatures in the effect take an additional point of damage when attacked."
                addItemS("OffensiveA",retString)
            }
            if (level == 5){
                retString = "[Potion Tosser]: You can now throw potions twice as far."
                addItemS("Bonuses",retString)
                retString = "1 CP [Poison Potion]: All creatures in the effect must make a constitution saving throw of 17 or higher or gain the poison condition."
                addItemS("OffensiveA",retString)
            }
            if (level == 6){
                retString = "2 CP [Strength Potion]: All creatures in the effect gain advantage on their next roll."
                addItemS("SupportA",retString)
            }
            if (level == 7){
                retString = "[Potion Refresh]: When you roll a crit attack, there is a 1 in 5 chance to gain a CP point back. This cannot go past your max."
                addItemS("Passive",retString)
                retString = "[Mist Potion]: A mist potion can be thrown up to 10ft, and affects all targets within 10ft of the splash zone for 2 turns."
                addItemS("DefensiveA",retString)
                retString = "1 CP [Burning Potion]: All creatures in the effect must make a dodge saving throw of 17 or higher or gain the burning condition."
                addItemS("OffensiveA",retString)
            }
            if (level == 8){
                retString = "2 CP [Shielded Potion]: All creatures in the effect gain 1 AC."
                addItemS("SupportA",retString)
            }
            if (level == 9){
                retString = "[Condition Wizard]: When you or an ally within 15ft of you does a crit attack against a creature, you can add a potion effect of cost 1 to the targeted creature without losing a CP point."
                addItemS("Passive",retString)
                retString = "2 CP [Corrosion Potion]: All creatures in the effect lose 1 AC."
                addItemS("OffensiveA",retString)
            }
            if (level == 10){
                retString = "2 CP [Revive Potion]: All unconscious creatures in the effect are restored to 2 HP."
                addItemS("SupportA",retString)
            }
        }
    }
//Mercenary
    if (classname == 'SwarmSurvivor'){
        {
            if (level == 1){
                retString = "[Height Bias]: You deal an additional 1 damage to all creatures that have a smaller height than you."
                addItemS("Bonuses",retString)
                retString = "1 SP [Block]: Your AC increases by 1 until the start of your next turn."
                addItemS("DefensiveA",retString)
            }
            if (level == 3){
                retString = "[Flank Champion]: If you are in melee range by two or more creatures, your base AC will increase by 1."
                addItemS("Passive",retString)
                retString = "2 SP [Sweeping Strike]: Make a melee attack, all creatures within melee range must make a dodge saving throw of 16 or take the melee damage."
                addItemS("OffensiveA",retString)
            }
            if (level == 5){
                retString = "[Line Breaker]: If you are behind a hostile on a battlefield, your next attack against them will have advantage."
                addItemS("Bonuses",retString)
                retString = "1 SP [Shove]: Pick a creature of medium size or lower within 5ft, the creature must make a wrath save of 20 or be pushed 10ft and knocked prone."
                addItemS("OffensiveA",retString)
            }
            if (level == 7){
                retString = "[Final Stand]: While you are in desolation, your melee attacks will deal double damage and your ammo for pistols and rifles will not run out."
                addItemS("Passive",retString)
                retString = "2 SP [Charge]: Move 15ft in a single direction. All creatures of medium size or lower must make a dodge saving throw of 17 or higher, or be pushed 5ft and be knocked prone."
                addItemS("OffensiveA",retString)
            }
            if (level == 9){
                retString = "[Elite Targeting]: If you drop an enemy to 0 HP on your attack, make another primary attack against an enemy at no extra SP cost."
                addItemS("KillEnemy",retString)
            }
        }
    }
    if (classname == 'StealthTactics'){
        {
            if (level == 1){
                retString = "[Stealth Attack]: If you have advantage on an attack or make a crit attack, you can add an additional 1d4 damage to it."
                addItemS("Passive",retString)
                retString = "1 SP [Distraction]: While in stealth, move a creature that isnt in combat 15ft by making a noise. Make a contesting stealth check against the targets awareness. If successful, the creature will move 15ft."
                addItemS("DefensiveA",retString)
            }
            if (level == 3){
                retString = "[Hidden in Shadows]: When you hide as an action, you gain advantage on stealth regardless of light level."
                addItemS("Bonuses",retString)
                retString = "2 SP [Shadow Dash]: Increase your movement speed by 30ft."
                addItemS("DefensiveA",retString)
            }
            if (level == 7){
                retString = "[Shade Creeper]: Your movement increases by 15ft if you are hidden."
                addItemS("Passive",retString)
                retString = "1 SP [Wraith Grab]: While hidden, make a contesting wrath check against the creature that is size medium or smaller. If successful the target will become grappled and take double damage from all your melee attacks."
                addItemS("OffensiveA",retString)
            }
            if (level == 9){
                retString = "[Call of the Void]: When you bring a creature to 0 HP in stealth, the body will become hidden, and you get an additional turn."
                addItemS("KillEnemy",retString)
            }
        }
    }
    if (classname == 'RifleTricks'){
        {
            if (level == 1){
                retString = "[Steadied Aim]: On your turn if you have not attacked, you can take the aim action which will end your turn, but your accuracy modifier will be doubled on your next attack."
                addItemS("Abilities",retString)
                retString = "1 SP [Trained Eye]: Pick a creature you can see, and gain information on 2 talents or traits. This cannot be done on the same target. At level 5, you can pick 2 targets."
                addItemS("SupportA",retString)
                retString = "1 SP [Ricochet]: When you make a crit attack, your bullet can ricochet to a target within 15ft of the initial shot."
                addItemS("OffensiveA",retString)
            }
            if (level == 2){
                retString = "1 SP [Warning Shot]: Make a contesting wrath check against a targets constitution and expend a shot. If successful, the target will become scared of you until the end of your next turn."
                addItemS("OffensiveA",retString)
                retString = "1 SP [Cripple Shot]: Make an attack against a creature, if successful the target will gain the slowed  condition for 1 turn."
                addItemS("OffensiveA",retString)
            }
            if (level == 3){
                retString = "[Silent Assassin]: Your first attack in combat will always deal double damage."
                addItemS("Passive",retString)
            }
            if (level == 4){
                retString = "2 SP [Mutilating Shot]: Make an attack against a creature, if successful the target will gain the bleeding condition for 1 turn."
                addItemS("OffensiveA",retString)
            }
            if (level == 5){
                retString = "[Armor Penetrator]: When you attack a creature with an AC higher than 1, when you attack you gain a +1 to the roll."
                addItemS("Passive",retString)
            }
            if (level == 6){
                retString = "1 SP [Pushing Shot]: Make an attack against a creature, if successful the target will be moved 5ft away from you."
                addItemS("OffensiveA",retString)
            }
            if (level == 7){
                retString = "[Field Technique]: If you make two shots against a creature and the first one misses, you will gain advantage on the second."
                addItemS("Passive",retString)
                retString = "2 SP [Disabling Shot]: Make an attack against a creature, if successful the target will be disarmed."
                addItemS("OffensiveA",retString)
            }
            if (level == 9){
                retString = "[Explosive Headshot]: When you bring a creature to 0 HP, their head will explode, dealing 1d4 bludgeoning damage to all hostile creatures in a 5ft radius."
                addItemS("KillEnemy",retString)
            }
        }
    }
//Soldier
    if (classname == 'RageAbilities'){
        if (level == 1){
            retString = "[Rage Buildup]: When you take 2 damage in a single attack, you gain 1 CP."
            addItemS("Passive",retString)
            retString = "1 CP [Empowered Strike]: Your next melee attack deals double damage."
            addItemS("OffensiveA",retString)
            retString = "2 CP [Blood Flow]: Regain 1d4 HP."
            addItemS("DefensiveA",retString)
        }
        if (level == 3){
            retString = "[Rage Conversion]: You can convert 1 CP into 1 SP."
            addItemS("Abilities",retString)
            retString = "1 CP [Rage Boost]: Add an additional 15ft to your movement."
            addItemS("OffensiveA",retString)
        }
        if (level == 4){
            retString = "1 CP [Toughen]: The next attack that hits you will deal half damage."
            addItemS("DefensiveA",retString)
        }
        if (level == 5){
            retString = "[Battering Ram]: When you move through an enemys space, they must make a dodge save of 17+ or take 1d4 bludgeoning damage and be knocked prone. This can be done once per turn."
            addItemS("Abilities",retString)
            retString = "2 CP [Destroy Cover]: Destroy a piece of cover within 5ft of you instantly (GM discretion)."
            addItemS("SupportA",retString)
        }
        if (level == 7){
            retString = "[Warriors Yell]: Every turn you lose 2 CP, but you take half damage and deal an additional 1 damage on all attacks."
            addItemS("Abilities",retString)
        }
        if (level == 9){
            retString = "[Cornered Mule]: When you are the last standing member of your team, you gain 5 CP, and you gain an additional turn after your turn. This can only be used once per long rest, and it ends if an ally gets up."
            addItemS("Passive",retString)
        }
    }
    if (classname == 'ExplosiveCrafting'){
        {
            if (level == 1){
                retString = "1 CP [Fire Bomb]: 1d4 fire damage and applies the burning condition. 15ft AOE, 16+ Dodge."
                addItemS("OffensiveA",retString)
                retString = "1 CP [Powder Keg]: 2d4 Explosive damage. 30ft AOE, 17+ Dodge."
                addItemS("OffensiveA",retString)
            }
            if (level == 3){
                retString = "[Supply Search]: Once per longrest, you can regain all your CP."
                addItemS("Abilities",retString)
                retString = "1 CP [Flashbang]: Gives the blindness condition for 1 turn. 15ft AOE, 16+ Dodge."
                addItemS("OffensiveA",retString)
            }
            if (level == 4){
                retString = "2 CP [EMP Device]: 2d4 Electrical damage to robots. 30ft AOE, 19+ Smarts."
                addItemS("OffensiveA",retString)
            }
            if (level == 5){
                retString = "2 CP [High Priority]: 4d4 Explosive damage at the end of your next turn. 45ft AOE, 20+ Dodge"
                addItemS("OffensiveA",retString)
            }
            if (level == 7){
                retString = "[Powdered Explosive]: You can add an additional CP to an explosive to boost one of its stats. -You can double the damage. -Double the AOE. -Increase the save by 2."
                addItemS("Abilities",retString)
                retString = "2 CP [Portable Black Hole]: Pulls small objects and creatures to the center of it for 3 turns. 60ft AOE, 16+ Dodge"
                addItemS("OffensiveA",retString)
            }
            if (level == 9){
                retString = "Explosives"
                addItem2("Resistances",retString)
                retString = "2 SP [Shock Blast]: 1d4 Electrical Damage. 15ft AOE, 17+ Dodge"
                addItemS("OffensiveA",retString)
            }
        }
    }
    if (classname == 'MechTraining'){
    }
//Technician
    if (classname == 'PilotTricks'){
    }
    if (classname == 'PsionicPowers'){
        {
            if (level == 1){
                retString = "[Psionic Refresh]: Once per long rest you can regain all your CP back. This can be done out of combat."
                addItemS("Abilities",retString)
                retString = "1 CP [Psionic Thrust]: Deal 2 psychic damage to a creature within 15ft of you that you can see."
                addItemS("OffensiveA",retString)
            }
            if (level == 3){
                retString = "[Empowered Crits]: When you crit with a technopath ability, it will deal double damage."
                addItemS("Passive",retString)
                retString = "2 CP [Mind Tether]: Tether 2 creatures within 15ft of you that you can see. When one of those creatures takes damage, the other one will take the same amount of damage. If a tethered creature goes more than 120ft away from you, the tether will be broken."
                addItemS("OffensiveA",retString)
            }
            if (level == 4){
                retString = "1 CP [Forced Action]: A creature that you can see must make a contesting smarts check against yours. If successful, on their turn you will control them. This effect ends when the creatures turn ends."
                addItemS("OffensiveA",retString)
            }
            if (level == 5){
                retString = "2 CP [Psionic Blast]: Deal 5 psychic damage to a creature within 5ft of you that you can see."
                addItemS("OffensiveA",retString)
            }
            if (level == 6){
                retString = "2 CP [Mind over Matter]: Give an ally that you can see an additional turn after you."
                addItemS("SupportA",retString)
            }
            if (level == 7){
                retString = "[Brain Regen]: When you bring a hostile creature to 0 HP, regain 1 CP back."
                addItemS("KillEnemy",retString)
            }
            if (level == 8){
                retString = "1 CP [Regenerate]: All creatures within 15ft of you regain 1d4+1 HP."
                addItemS("SupportA",retString)
            }
            if (level == 9){
                retString = "[Mind Blown]: When you bring a creature to 0 HP with your psionic abilities, there is a 1 in 5 chance that their head will explode dealing 1d4 bludgeoning damage to all creatures in a 5ft radius."
                addItemS("KillEnemy",retString)
            }
        }
    }
    if (classname == 'RoboticAffinity'){
        {
            if (level == 1){
                retString = "[Robotic Companion]: You gain access to a humanoid robot companion that can do everything you can. Think of it as a clone. If your robot companion drops to 0 HP, they will instantly die. Once your companion has died you will need 1000 credits worth of scrap material to rebuild them. Your robot companion will always go after you in initiative."
                addItemS("Abilities",retString)
                retString = "2 SP [Assist]: Give an ally +2 to their next roll."
                addItemS("SupportA",retString)
            }
            if (level == 2){
                retString = "1 CP [Exchange]: Give an ally 1 CP."
                addItemS("SupportA",retString)
            }
            if (level == 3){
                retString = "[Empowered Frame]: Your robot companion now has an additional base AC point."
                addItemS("Bonuses",retString)
                retString = "2 SP [Rapid Reload]: If you are within 15ft of an ally and they are reloading, allow them to instantly reload."
                addItemS("SupportA",retString)
            }
            if (level == 5){
                retString = "[Durable Chassis]: When your robot companion drops to 0 HP, there is a 1 in 5 chance that they will get back up with half HP."
                addItemS("Passive",retString)
                retString = "2 SP [Armor Up]: Give 1d4 temporary points to an ally within 15ft of you."
                addItemS("SupportA",retString)
            }
            if (level == 7){
                retString = "[Self Destruct]: When your robot companion dies you can choose to cause it to explode. All creatures within a 15ft radius must make a dodge save of 18 or take 2d4 explosive damage."
                addItemS("Abilities",retString)
                retString = "1 CP [Takedown]: If you are within 10ft of an ally, your next successful attacks damage will be doubled."
                addItemS("SupportA",retString)
            }
            if (level == 9){
                retString = "[Proud Creator]: When you or your robot companion drop a creature to 0 HP, both of you gain 1d4 temporary HP."
                addItemS("KillEnemy",retString)
                retString = "2 CP [Battery Recharge]: Your robot companion will get an additional turn after their first turn. This effectively adds your companion twice to the initiative. This effect is not permanent and will be removed when initiative ends."
                addItemS("SupportA",retString)
            }
        }
    }
}

function getSubclassStats(classname, level){
    if (classname == 'PistolTricks'){
        if (level >= 3){
            initiative.innerHTML = parseInt(initiative.innerHTML)+2
        }
    }
    if (classname == 'ExplosiveCrafting'){
        if (level >= 1){
            document.getElementById('maxCP').innerHTML = parseInt(document.getElementById('maxCP').innerHTML)+1
        }
        if (level >= 3){
            document.getElementById('maxCP').innerHTML = parseInt(document.getElementById('maxCP').innerHTML)+1
        }
        if (level >= 5){
            document.getElementById('maxCP').innerHTML = parseInt(document.getElementById('maxCP').innerHTML)+1
            document.getElementById('Throwing').innerHTML = parseInt(document.getElementById('Throwing').innerHTML)+15
        }
        if (level >= 7){
            document.getElementById('maxCP').innerHTML = parseInt(document.getElementById('maxCP').innerHTML)+1
        }
        if (level >= 9){
            document.getElementById('maxCP').innerHTML = parseInt(document.getElementById('maxCP').innerHTML)+1
        }
    }
    if (classname == 'PsionicPowers'){
        if (level >= 5){
            document.getElementById('upSmarts').innerHTML = parseInt(document.getElementById('upSmarts').innerHTML)+1
            document.getElementById('upAnimalHandling').innerHTML = parseInt(document.getElementById('upAnimalHandling').innerHTML)+1
            document.getElementById('upAwareness').innerHTML = parseInt(document.getElementById('upAwareness').innerHTML)+1
            document.getElementById('upSurvival').innerHTML = parseInt(document.getElementById('upSurvival').innerHTML)+1
            document.getElementById('upMechanic').innerHTML = parseInt(document.getElementById('upMechanic').innerHTML)+1
        }
    }
    if (classname == 'StealthTactics'){
        if (level >= 5){
            document.getElementById('chance3').hidden = ""
        }
        else{
            document.getElementById('chance3').hidden = "hidden"
        }
    }
}


function addItemS(list,text)
{
    var textnode=document.createTextNode(text);
    var node=document.createElement("li");
    node.className = "subclass"
    node.appendChild(textnode);
    document.getElementById(list).appendChild(node);
}

function addItem2(list,text)
{
    var textnode=document.createTextNode(text);
    var node=document.createElement("li");
    node.className = "less"
    node.appendChild(textnode);
    document.getElementById(list).appendChild(node);
}