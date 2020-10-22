//pré-história >4000AC
//idade antiga até 476DC
//idade média até 1453DC
//idade moderna até 1789DC

function returnHistoricalEra(year?: number, ACDC?: string): string {

    enum Eras {
        PRE_HISTORIA = 'Pré-História',
        IDADE_ANTIGA = 'Idade Antiga',
        IDADE_MEDIA = 'Idade Média',
        IDADE_MODERNA = 'Idade Moderna',
        IDADE_CONTEMPORANEA = 'Idade Contemporânea'
    }
    
    let historicalEra: string = 'Pré-história'

    if(!year){
        return 'Você deve inserir um ano'
    }

    if(ACDC === 'AC' && year<4000){
        historicalEra = Eras.IDADE_ANTIGA
    }

    if(!ACDC || ACDC === 'DC'){
        if(year<=476){
            historicalEra = Eras.IDADE_ANTIGA
        } else if(year>476 && year<=1453){
            historicalEra = Eras.IDADE_MEDIA
        } else if(year>1453 && year<=1789){
            historicalEra = Eras.IDADE_MODERNA
        } else {
            historicalEra = Eras.IDADE_CONTEMPORANEA
        }
    }

    return historicalEra
}

console.log(returnHistoricalEra(2020, 'DC')) 
console.log(returnHistoricalEra(1789, 'DC')) 
console.log(returnHistoricalEra(1500, 'DC'))
console.log(returnHistoricalEra(450, 'DC'))
console.log(returnHistoricalEra(200, 'DC'))
console.log(returnHistoricalEra(2000, 'AC'))
console.log(returnHistoricalEra(20000, 'AC'))