export const validateCharacter = (input: Fighter) => {
    if( !input.name || 
        input.health === undefined || 
        input.defense === undefined || 
        input.attack === undefined
        ){
        return false
    }

    if(input.health < 0 || input.attack <= 0 || input.defense <= 0){
        return false
    }

    return true
}
