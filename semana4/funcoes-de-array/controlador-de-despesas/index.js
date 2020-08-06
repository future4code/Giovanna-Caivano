//arrays
const xArray = []
const xList = document.getElementById("expeditures-list")
const yList = document.getElementById("filtered-list")
const totalAmmountDisplay = document.getElementById("total-ammount")

//funções
function submitExpenditure() {

    //variáveis de tipo primitivo
    const xValue = document.getElementById("expend-ammount")
    const xType = document.getElementById("expend-type")
    const xDescript = document.getElementById("expend-description")
    
    //objeto
    const xRegister = {
        ammount: Number(xValue.value),
        type: xType.value,
        description: xDescript.value
    }
        
    if (xValue.value === "" || xDescript.value === ""){
        alert("Valor ou descrição inválidos!")
    } else {
        xArray.push(xRegister)
        
        xValue.value = ""
        xDescript.value = ""
    
        loadExpenditure(xRegister, xList)

    }
    
    const calculationArray = xArray.map((expenditure,index,array) => {
        return expenditure.ammount
    })
    
    function getSum(total,num) {
        return total + num
    }

    let totalAmmount = calculationArray.reduce(getSum,0)

    totalAmmountDisplay.innerHTML = totalAmmount
    
    event.preventDefault()
}

function loadExpenditure(xRegister, xList) {
    xList.innerHTML += `<div><p>Valor: ${xRegister.ammount}</p><p>Tipo de despesa: ${xRegister.type}</p><p>Descrição: ${xRegister.description}</p></div>`
}

function filter() {
    const minAmmount = document.getElementById("filter-min").value
    const maxAmmount = document.getElementById("filter-max").value

    const tmpArray = xArray.filter((expenditure, index, array) => {
        if (expenditure.ammount > Number(minAmmount) && expenditure.ammount < Number(maxAmmount)) {
            return true
        }
        return false
    })
    
    tmpArray.forEach((expenditure, index, array) => {
        loadExpenditure(expenditure, yList)
    })

    event.preventDefault()

}

function cleanFilters() {
    
    const minAmmountElement = document.getElementById("filter-min")
    const maxAmmountElement = document.getElementById("filter-max")
    
    minAmmountElement.value = ""
    maxAmmountElement.value = ""
    
    event.preventDefault()
}

function sortRegisters() {
    xArray.sort(function(a, b) {
        return a.ammount - b.ammount
    })

    xList.innerHTML = ""

    xArray.forEach((expenditure, index, array) => {
        loadExpenditure(expenditure, xList)
    })

    event.preventDefault()
}
