export const today: number = new Date().getTime()

export const isAdult = (dateOfBirth: string): boolean => {
    const [day, month, year] = dateOfBirth.split("/")

    const dateOfBirthFormat = new Date(`${year}-${month}-${day}`)

    const age: number = (today - dateOfBirthFormat.getTime())/1000/60/60/24/365

    return age >= 18
}

export const getTimeStamp = (date: string): number => {
    const [day, month, year] = date.split("/")
    
    return new Date(`${year}-${month}-${day}`).getTime()
}