const getsavedFacts = function () {
    const factListJSON = localStorage.getItem("fact")
    if (factListJSON !== null) {
        factList = JSON.parse(factListJSON)
        localStorage.clear()
    } else {
        return []
    }
}