let count = 250
counter = 1
function add(id1,id2){
    count = count++
    counter++
    const counter2 = document.getElementById(id1)
    
    
    counter2.innerHTML = counter

    const price = document.getElementById(id2)
    
    price.textContent = Math.trunc(count  +=  250);
}

function minus(id1,id2){
if(counter > 1){
counter--
count = count--
const counter2 = document.getElementById(id1)
counter2.innerHTML = counter
const price = document.getElementById(id2)
price.textContent = Math.trunc(count  -=  250);
}


}



function chngcontent(Id){
    const container2 = document.getElementById(Id)
    const container = document.getElementById('container')
    container.classList.add('none-display')
    // const container2 = document.getElementById('2ndcontainer')
container2.classList.add('block-display')}



// Changing url of the page when click on button
const changeurl = document.querySelectorAll('.buy-now-btn') 
changeurl.forEach(button => {
    button.addEventListener('click', function(){
    const newslug = 'products'
    const buttonvalue = button.value
    const newurl = `${newslug}/${buttonvalue}`
 window.history.replaceState({path: newurl}, '', newurl)
console.log(button)

// window.location.replace((newurl))


})

})


function displaymainpg(Id){
    const container2 = document.getElementById(Id)
    container2.classList.remove('block-display')
const container = document.getElementById('container')
container.classList.remove('none-display')

let url = "http://127.0.0.1:5500/shoes-store/nine-waffle-one/"
let newurl = url.replace(
    "/shoes-store/nine-waffle-one/", "")
window.history.replaceState({path: newurl}, '', newurl)
}

count2 = 1
function addtocart(Id){
    const button = document.getElementById(Id)
button.innerHTML = count2++

}



const mainimgbtn = document.getElementById('main-img-button')
mainimgbtn.addEventListener('click', function(){
const button = this.value
console.log(button)
localStorage.setItem(button, "Nine Waffle one")
})



