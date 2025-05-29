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
const changeurl = document.getElementById('updatebtn') 
changeurl.addEventListener('click', function(){
    const newslug = 'products'
    const newurl = `${newslug}/nine-waffle-one/`
    window.history.replaceState({path: newurl}, '', newurl)
})

// 2nd product url 
const chng2ndurl = document.getElementById('nike-revol-btn')

chng2ndurl.addEventListener('click', function(){
    const newslug = 'products'
    const newurl = `${newslug}/nike-revolution`
    window.history.replaceState({path: newurl}, '', newurl)
})
// /

// 3rd product url

const chng3rdurl = document.getElementById('third-btn')

chng3rdurl.addEventListener('click', function(){
    const newslug = 'products'
    const newurl = `${newslug}/nike-revolution-3`
    window.history.replaceState({path: newurl}, '', newurl)
})


// Nike revolution box
const chng4thurl = document.getElementById('second-urlbtn')

chng4thurl.addEventListener('click', function(){
    const newslug = 'products'
    const newurl = `${newslug}/nike-revolution`
    window.history.replaceState({path: newurl}, '', newurl)
})

// Air jordan box
// airjrdn-btn

const chng5thurl = document.getElementById('airjrdn-btn')

chng5thurl.addEventListener('click', function(){
    const newslug = 'products'
    const newurl = `${newslug}/air-jordan`
    window.history.replaceState({path: newurl}, '', newurl)
})

// Nike sports
// sports-btn
const chng6thurl = document.getElementById('sports-btn')

chng6thurl.addEventListener('click', function(){
    const newslug = 'products'
    const newurl = `${newslug}/nike-sports`
    window.history.replaceState({path: newurl}, '', newurl)
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



// const Productslug = "Shoes-store"
// window.history.pushState({},"",`/${Productslug}`)
// console.log("Current URL:", window.location.href);


// const addtocartbtn = document.getElementById('main-img-button')
// addtocartbtn.addEventListener('click', () =>{
// })

// const productSlug = "Shoes-store";
// // Update the URL without reloading the page
// window.history.pushState({}, "", `${productSlug}`);
// console.log("Current URL:", window.location.href);

// const base ='http://127.0.0.1:5500/'
// const url = new URL('shoes/store/pk',base)
// console.log(url)
// window.location.href = url

