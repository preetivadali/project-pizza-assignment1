// Start here
//
// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)

const username = prompt('Please enter your name:')
alert(`Hi ${username}! let's get started`)

// Step 2 - Food choice

// Your code goes here

const menu = prompt(
  `Please select from the menu:
   1) Pizza
   2) Pasta
   3) Salad
   Please select the number of your favourite food`
)

let selectedfood = ''
if (menu === '1') {
  selectedfood = 'Pizza'
} else if (menu === '2') {
  selectedfood = 'Pasta'
} else if (menu === '3') {
  selectedfood = 'Salad'
} else {
  alert(`You have selected an invalid menu. Please go back and select again`)
  exit(1)
}

alert(`You have selected ${selectedfood}!`)

// Step 3 - Subtype choice

// Your code goes here
let submenu = ''
let selectedsubmenu = []

if (selectedfood === 'Pizza') {
  submenu = prompt(
    `Select your favourite Pizza
      1. Chicken Pizza
      2. Vegetarian Pizza
      3. Cheese Pizza
      Please enter a number`
  )
} else if (selectedfood === 'Pasta') {
  submenu = prompt(
    `Select your favourite Pasta
        1. White creamy Pasta
        2. Tomato Pasta
        3. Vegan Pasta
        Please enter a number`
  )
} else if (selectedfood === 'Salad') {
  submenu = prompt(
    `Select your favourite Salad
          1. Chicken Salad
          2. Green Salad
          3. Fruit Salad
          Please enter a number`
  )
}

// Step 4 - Age
// Your code goes here

let age = prompt(`Please enter your age `)

let confirm = ''

if (age >= 20) {
  confirm =
    prompt(`Cost of your selected menu will be 100sek. Do you like to order?)

 Please enter a number to confirm:
 1) Yes
 2) No`)
} else if (age <= 19) {
  confirm =
    prompt(`Cost of your selected menu will be 85sek. Do you like to order?)
 
  Please enter a number to confirm:
  1) Yes
  2) No`)
} else {
  alert(` Invalid entry. Please enter your correct age.`)
}

// Step 5 - Order confirmation
// Your code goes here

if (confirm === '1') {
  alert(`Thankyou for your order. Your ordered will be prepared shortly.`)
} else if (confirm === '2') {
  alert(`Thankyou. See you later`)
} else {
  alert(`Invalid entry. Please select 1 or 2`)
  exit(1)
}
