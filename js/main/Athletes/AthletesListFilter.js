class AthletesListFilter {
    constructor() {
        this.athletesListContainer = document.querySelector('.athletes-list-container');
        this.athletesFilter = document.createElement('div')
        this.athletesListContainer.append(this.athletesFilter)
        this.athletesFilter.classList.add('athletes-filter')
        this.buttonAllAthletes = document.createElement('button')
        this.athletesFilter.append(this.buttonAllAthletes)
        this.buttonAllAthletes.classList.add('btn-all-athletes')
        this.buttonAllAthletes.innerText = 'All'
        this.buttonFriends = document.createElement('button')
        this.athletesFilter.append(this.buttonFriends)
        this.buttonFriends.classList.add('btn-friends')
        this.buttonFriends.innerText = 'Friends'

        this.buttonAllAthletes.addEventListener('click', event =>{
            debugger
        })

        this.buttonFriends.addEventListener('click', event => {
            debugger
        })
    }
}