document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmission)
  console.dir(form)

  setDate(form)


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
}


const handleDeleteButton = function(event) {
  const playLogs = document.querySelector('#play-logs')
  playLogs.innerHTML = '';
}
