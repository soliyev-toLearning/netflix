const clicker = document.querySelector('.clicker')
const category = document.querySelector('.category')

clicker.addEventListener('click', () => {

    if (category.style.visibility == "visible") {
        category.style.visibility =  "hidden"
    } else {
        category.style.visibility =  "visible"
    }
})
