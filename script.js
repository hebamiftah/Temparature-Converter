// variables
const form = document.querySelector('form')
const input = form.input
const output = form.output
const unit = form.unit
const storedValue = localStorage.getItem('temperature')

if (storedValue) {
  input.value = storedValue
  updateOutput()
}

// event handlers for temperature conversion
const calculateTemperature = (e) => {
  e.preventDefault()
  localStorage.setItem('temperature', input.value)
  updateOutput()
}

// event handler for reset button
const resetData = () => {
  localStorage.removeItem('temperature')
  output.value = ''
  input.focus()
}

// function for converting temperature
function updateOutput() {
  const inputValue = parseFloat(input.value)

  if (isNaN(inputValue)) {
    output.value = ''
    return
  }

  const selectedUnit = unit.value
  let convertedValue

  if (selectedUnit === 'celsius') {
    convertedValue = (inputValue * 9) / 5 + 32
    output.value = convertedValue.toFixed(2) + ' °F'
  } else {
    convertedValue = ((inputValue - 32) * 5) / 9
    output.value = convertedValue.toFixed(2) + ' °C'
  }
}

// event listeners
input.addEventListener('input', updateOutput)
form.addEventListener('submit', calculateTemperature)
form.addEventListener('reset', resetData)
