const adviceId = document.getElementById("advice-id")
const adviceText = document.getElementById("advice-text")
const diceBtn = document.getElementById("dice-btn")

function getAdvice() {
  adviceText.textContent = "Loading..."
  diceBtn.disabled = true

  fetch("https://api.adviceslip.com/advice")
    .then(response => {
      if (!response.ok) {
        throw new Error("Request failed")
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      adviceId.textContent = `ADVICE #${data.slip.id}`
      adviceText.textContent = `"${data.slip.advice}"`
    })
    .catch(error => {
      console.error(error)
      adviceId.textContent = "ADVICE"
      adviceText.textContent = "Failed to load advice"
    })
    .finally(() => {
      diceBtn.disabled = false
    })
}

diceBtn.addEventListener("click", getAdvice)
getAdvice()