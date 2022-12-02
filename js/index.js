const listElement = document.querySelectorAll('.list__buttom--click')

const bar = document.querySelector('.nav__bar')
const navigation = document.querySelector('.list')
const body = document.querySelector('main')
const paragraph = Array.from(document.querySelectorAll('.cont__paragraph'))

/* icons*/

const listIcon = document.querySelectorAll('.list__icon')

listElement.forEach( listElements => {
    
    listElements.addEventListener('click', () => {
        // console.log(listElements)
        listElements.classList.toggle('arrow')

        let height = 0;
        const menu = listElements.nextElementSibling;

        if( menu.clientHeight == 0) {
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px` 
    })

});


bar.addEventListener('click', ()=> {
    
    // console.log(listIcon)
    navigation.classList.toggle('open')
    bar.classList.toggle('bar') 

    body.classList.toggle('dark')
    
    
    document.body.classList.toggle('stop-scroll')
    paragraph.map( parrafo => {
        parrafo.classList.toggle('cont__paragraph--replace')
    })
    console.log(paragraph)
    

})



