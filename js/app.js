document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmission)
  console.dir(form)

  setDate(form)

  const wins = {}

  const addPlayerForm = document.querySelector('#add-player-form')
  addPlayerForm.addEventListener('submit', handleAddPlayer)


  const deleteButton = document.querySelector('#delete')
  deleteButton.addEventListener('click', handleDeleteButton)
})

const setDate = function (form) {
  const date = new Date();
  const dateString = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);
  form.date.value = dateString
  form.date.max = dateString
}

const handleAddPlayer = function (event) {
  event.preventDefault();
  //Add player to table and selector
  const player = this.addPlayer.value
  const selector = document.querySelector('#victor')
  selector.insertAdjacentHTML('beforeend', `<option>${player}</option>`)
  const table = document.querySelector('#win-table')
  table.insertAdjacentHTML('beforeend',
  `<tr><td>${player}</td><td id='${player}-wins'>0</td></tr>`)
}

const handleFormSubmission = function (event) {
  event.preventDefault();
  const playLogs = document.querySelector('#play-logs')

  const logContainer = document.createElement('div')
  logContainer.classList.add('log')
  const victor = document.createElement('h2')
  const game = document.createElement('h3')
  const date = document.createElement('p')

  playLogs.appendChild(logContainer)
  logContainer.appendChild(victor)
  logContainer.appendChild(game)
  logContainer.appendChild(date)

  victor.textContent = "Victor: " + this.victor.value
  game.textContent = this.game.value + ' : ' + this.gameType.value
  date.textContent = this.date.value

  addWin(this.victor.value)
}

const addWin = function (victor) {
  const playerWin = document.querySelector(`#${victor}-wins`)
  playerWin.textContent = parseInt(playerWin.textContent) + 1
}


const handleDeleteButton = function(event) {
  const playLogs = document.querySelector('#play-logs')
  playLogs.innerHTML = '';
}
