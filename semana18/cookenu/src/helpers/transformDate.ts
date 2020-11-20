export const transformDate = (date:Date) => {
    const [ year, month, day ] = String(date).substr(0,9).split('-')
    return `${day}/${month}/${year}`
}
