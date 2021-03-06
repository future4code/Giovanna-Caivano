//arrays
const xArray = []
const xList = document.getElementById("expeditures-list")
const yList = document.getElementById("filtered-list")
const totalAmmountDisplay = document.getElementById("total-ammount")
const totalAmmountByType = document.getElementById("type-list")

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
    
    calcTotalAmmount()

    loadTypeList()
    
    event.preventDefault()
}

function loadExpenditure(xRegister, xList) {
    xList.innerHTML += `<div><p><b>Valor</b>: ${xRegister.ammount}</p><p><b>Tipo de despesa</b>: ${xRegister.type}</p><p><b>Descrição</b>: ${xRegister.description}</p></div>`
}

function filter() {

    const minAmmount = document.getElementById("filter-min")
    const maxAmmount = document.getElementById("filter-max")

    const tmpArray = xArray.filter((expenditure, index, array) => {
        if (expenditure.ammount > Number(minAmmount.value) && expenditure.ammount < Number(maxAmmount.value)) {
            return true
        }
        return false
    })
    
    tmpArray.forEach((expenditure, index, array) => {
        loadExpenditure(expenditure, yList)
    })

    minAmmount.value = ""
    maxAmmount.value = ""

    event.preventDefault()
}

function cleanFilters() {
    
    yList.innerHTML = ""
    
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

function calcTotalAmmount() {
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

function loadTypeList() {
    //cria array de despesas da casa e depois array com valores
    //CASA
    const homeArray = xArray.filter((expenditure,index,array) => {
        if(expenditure.type === "Casa") {
            return true
        }
        return false
    })
    const homeArrayAmmount = homeArray.map((homeExpenditure, index, array) => {
        return homeExpenditure.ammount
    })
    
    //MERCADO
    const mktArray = xArray.filter((expenditure,index,array) => {
        if(expenditure.type === "Mercado") {
            return true
        }
        return false
    })
    const mktArrayAmmount = mktArray.map((homeExpenditure, index, array) => {
        return homeExpenditure.ammount
    })
    
    //VIAGEM
    const tripArray = xArray.filter((expenditure,index,array) => {
        if(expenditure.type === "Viagem") {
            return true
        }
        return false
    })
    const tripArrayAmmount = tripArray.map((homeExpenditure, index, array) => {
        return homeExpenditure.ammount
    })

    //LAZER
    const leisureArray = xArray.filter((expenditure,index,array) => {
        if(expenditure.type === "Lazer") {
            return true
        }
        return false
    })
    const leisureArrayAmmount = leisureArray.map((homeExpenditure, index, array) => {
        return homeExpenditure.ammount
    })

    //OUTROS
    const otherArray = xArray.filter((expenditure,index,array) => {
        if(expenditure.type === "Outros") {
            return true
        }
        return false
    })
    const otherArrayAmmount = otherArray.map((homeExpenditure, index, array) => {
        return homeExpenditure.ammount
    })

    //soma e imprime despesas da casa
    function getSum(total,num) {
        return total + num
    }
    let homeTotalAmmount = homeArrayAmmount.reduce(getSum, 0)
    let mktTotalAmmount = mktArrayAmmount.reduce(getSum, 0)
    let tripTotalAmmount = tripArrayAmmount.reduce(getSum, 0)
    let leisureTotalAmmount = leisureArrayAmmount.reduce(getSum, 0)
    let otherTotalAmmount = otherArrayAmmount.reduce(getSum, 0)

    totalAmmountByType.innerHTML = `<div><p>Casa ------- ${homeTotalAmmount}</p><br><p>Mercado ------- ${mktTotalAmmount}</p><br><p>Viagem ------- ${tripTotalAmmount}</p><br><p>Lazer ------- ${leisureTotalAmmount}</p><br><p>Outros ------- ${otherTotalAmmount}</p></div>`
}