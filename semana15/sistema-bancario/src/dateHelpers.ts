const today: Date = new Date()

const dateOfBirth: string = "21/05/1993"



export const isAdult = (dateOfBirth: string): boolean => {
    const [day, month, year] = dateOfBirth.split("/")

    const dateOfBirthFormat = new Date(`${year}-${month}-${day}`)

    const age: number = (today.getTime() - dateOfBirthFormat.getTime())/1000/60/60/24/365

    return age >= 18
}

export const getTimeStamp = (dateOfBirth: string): number => {
    const [day, month, year] = dateOfBirth.split("/")
    
    return new Date(`${year}-${month}-${day}`).getTime()
}