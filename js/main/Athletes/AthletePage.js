class AthletePage {
    constructor() {
        this.singleAthleteShowPageContainer = document.querySelector('.athlete-show-page-container')
        this.athletePage = document.createElement('div');
        this.singleAthleteShowPageContainer.append(this.athletePage);
        this.athletePage.classList.add('athlete-page');
    }

    changeInnerHTML(athlete){
        console.log(athlete.data.attributes)
        let {id} = athlete.data
        let {username, routines} = athlete.data.attributes
        this.athletePage.innerHTML = 
        `
        <div class='athlete-show-card' data-show-athlete-id='${id}'>
            <h2>${username}</h2>
            <div class='athlete-show-routine-list-container routine-cards-container'></div>
        </div>
        `
        for (const routine of routines) {
            let {athlete_id, id, name} = routine;
            let routineCardsContainer = document.querySelector('.routine-cards-container')
            let routineCard = document.createElement('div')
            routineCardsContainer.append(routineCard);
            routineCard.classList.add('routine-card');
            routineCard.dataset.routineCard = id;
            routineCard.innerHTML = 
            `
            <h2 class='routine-name'>${name}</h2>
            <p>By: ${username}</p>
            `
        }        
    }
    
}

