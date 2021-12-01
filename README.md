# Password Generator Starter Code
## Description
- An empty var "generatedPassword" is created.
- The user is presented with a "Generate Password" button that when pressed asks the user several prompts.
- Once all the prompts are gathered, depending on which prompts are considered true, a new empty variable ("passwordCriteria") has strings concatenated onto it based on the object keys and it's different key value pairs. 
- Once the now, not empty variable of "passwordCriteria" is generated, a for loop iterates as many times as the length of the desired password and pulls a random character from the "passwordCriteria" string and inputs it into the generatedPassword string. 
- The program then returns the generatedPassword string onto the elementid #password

## Prompts
- Please enter the number of characters you want for your new password. Characters must be more than 8 but fewer than 128
  - If user inputs a number smaller than 8 or larger than 128, the user is reprompted
- Do you want lowercase characters in your password? 
- Do you want uppercase characters in your password? 
- Do you want numeric characters in your password? 
- Do you want special characters in your password? 

[![GIF of Password Generator]()]