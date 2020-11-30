import { BlockLike } from "typescript";
import { validateCharacter } from "./validateCharacter"

export const performAttack = (attacker:Fighter, defender:Fighter):Fighter[] => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid fighter.");
    }

    if(defender.defense > attacker.attack){
        return [attacker, defender]
    }

    return [{
        ...defender,
        health: defender.health - (attacker.attack - defender.defense)
    }, 
    attacker]
}

export const performAttackWithInversion = (
    attacker:Fighter, 
    defender:Fighter, 
    validator: (input:any) => boolean
    ) => {
        if(!validator(attacker) || !validator(defender)){
            throw new Error("Invalid fighter.");
        }

        if(attacker.attack > defender.defense){
            defender.health -= attacker.attack - defender.defense
        }
    }