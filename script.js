
const  inputContainer = document.querySelector('input')
// console.log(inputContainer)

const lightTheme = {
    'background': '#1B2029',
    'color': 'white'
}

const darkTheme = {
    'background-color': 'white',
    'color': 'black'

}

inputContainer.addEventListener('change', function() {
    const ischecked = inputContainer.checked

    ischecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
   
    
})

function changeTheme(theme) {
    
}

  



