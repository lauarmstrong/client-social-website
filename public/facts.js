

//new code
let factList = [
    {
        habbit: 'Use a keep cup',
        comparison: false
    },
    {
        habbit: 'Use a refillable glass bottle',
        comparison: true
    },
    {
        habbit: 'Take the tube',
        comparison: true
    },
    {
        habbit: 'Drink vegan milk',
        comparison: false
    },
    {
        habbit: 'Turn down the thermostat',
        comparison: true
    }
]

//JSON
const getsavedFacts = function () {
    const factListJSON = localStorage.getItem("fact")
    if (factListJSON !== null) {
        factList = JSON.parse(factListJSON)
        localStorage.clear()
    } else {
        return []
    }
}
getsavedFacts()



//Filter List by search text and add element to #todo
const filters = {
    searchText: ''
}

const renderFact = function (factList, filters) {
    const filteredFact = factList.filter(function (fact) {
        return fact.habbit.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredFact.forEach(function (fact) {
        const factEl = document.createElement('p')
        factEl.textContent = fact.habbit
        document.querySelector('#fact').appendChild(factEl)
    })
    // todoList.forEach(function (todo){
    //     const newTodo = document.createElement('p')
    //     newTodo.textContent = todo.task
    //     document.querySelector('#todo').appendChild(newTodo)
    // })
}
document.querySelector('#fact').innerHTML = ''
renderFact(factList, filters)








//Button message on-click
document.querySelector('#nothing').addEventListener('click', function (boop) {
    console.log('You clicked the button!')
    console.log(boop)
    boop.target.textContent = 'YASS QUEEN'
})
//Assign filter to user search text upon type
document.querySelector('#searchText').addEventListener('input', function (search) {
    filters.searchText = search.target.value
    document.querySelector('#fact').innerHTML = ''
    renderFact(factList, filters)
})

//Submit a new todo form
document.querySelector('#factForm').addEventListener('submit', function (submit) {
    submit.preventDefault()
    console.log(submit.target.elements.newFact.value)
    factList.push({ habbit: submit.target.elements.newFact.value, comparison: false })
    localStorage.setItem("fact", JSON.stringify(factList))
    document.querySelector('#fact').innerHTML = ''
    renderFact(factList, filters)
    submit.target.elements.newFact.value = ''
})


