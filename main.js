import './calculator.css'
import './style.css'


const app = document.getElementById('app')
const calculatorCard = document.createElement('div')
calculatorCard.className = 'calculator-card'
const calculator = document.createElement('div')
calculatorCard.appendChild(calculator)


const calculatorButtons = document.createElement('div')
calculatorButtons.className = 'calculator-buttons'
calculatorCard.appendChild(calculatorButtons)


calculator.id = 'calculator'
calculator.className = 'calculator'


app.appendChild(calculatorCard)


const input = document.createElement('input')
input.type = 'text'
calculator.appendChild(input)

const operations = ['*', '/', '+', '-'] // Adding the '^' (power) operator works using regex, so will use a custom button to respect exercice's rules
operations.forEach((op, index) => {
  const button = document.createElement('button')
  button.textContent = op
  button.id = 'button-' + index
  button.className = 'operation-button'
  button.addEventListener('click', () => { input.value += op })
  console.log(button.id)
  calculator.appendChild(button)
})


for (let i = 0; i < 10; i++) {
  const button = document.createElement('button')
  button.textContent = i
  button.value = i
  button.addEventListener('click', () => {
    input.value += i
  })
  calculator.appendChild(button)
}

const dotButton = document.createElement('button')
dotButton.textContent = '.'
dotButton.addEventListener('click', () => { input.value += '.' })
calculator.appendChild(dotButton)



const powerButton = document.createElement('button')
powerButton.className = 'operation-button'
powerButton.textContent = '^'
powerButton.addEventListener('click', () => { input.value += '^' })
calculatorButtons.appendChild(powerButton)


const clearButton = document.createElement('button')
clearButton.className = 'operation-button'
clearButton.textContent = 'C'
clearButton.addEventListener('click', () => { input.value = '' })
calculatorButtons.appendChild(clearButton)

const deleteButton = document.createElement('button')
deleteButton.textContent = 'DEL'
deleteButton.addEventListener('click', () => { input.value = input.value.slice(0, -1) })
calculator.appendChild(deleteButton)

const equalsButton = document.createElement('button')
equalsButton.className = 'operation-button'
equalsButton.textContent = '='
equalsButton.addEventListener('click', () => {
  const powerRegex = /(\d+)\^(\d+)/
  const match = input.value.match(powerRegex)
  if (match) {
    const base = parseInt(match[1])
    const exponent = parseInt(match[2])
    input.value = Math.pow(base, exponent)
  } else {
    input.value = eval(input.value)
  }
})
calculatorButtons.appendChild(equalsButton)
