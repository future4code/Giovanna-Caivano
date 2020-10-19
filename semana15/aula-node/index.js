const countries = require("./countries")

const name = process.argv[2]
const continent = process.argv[3]

const searchCountryByName = (name) => {
    return countries.filter(country => {
        return country.name.toLowerCase().includes(name)
    })
}

const searchCountryByNameAndContinent = (name, continent) => {
    return countries.filter(country => {
        return country.name.toLowerCase().includes(name) && country.continent === continent
    })
}

if(!continent){
    console.table(searchCountryByName(name))
} else {
    console.table(searchCountryByNameAndContinent(name, continent))
}