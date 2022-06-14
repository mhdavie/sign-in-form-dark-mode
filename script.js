
const  inputContainer = document.querySelector('input')
// console.log(inputContainer)

const rootElement = document.documentElement
// console.log(rootElement)



const lightTheme = {
    'background': '#1B2029',
    'color': 'white'
}

const darkTheme = {
    '--background-color': 'white',
    '--text-color': 'black'

}

inputContainer.addEventListener('change', function() {
    const ischecked = inputContainer.checked

    ischecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
   
    
})

function changeTheme(theme) {
    // alterar o valor da propriedade
    rootElement.style.setProperty('--background-color', 'white')
    
    for (let prop in theme) {
        console.log(prop)

    }



    
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value) 
}

  



