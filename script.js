let count = 250
counter = 1
function add(id1,id2){
    count = count++
    counter++
    const counter2 = document.getElementById(id1).innerHTML = counter

    const price = document.getElementById(id2).textContent = Math.trunc(count  +=  250);
}

function minus(id1,id2){
    
if(counter > 1){
counter--
count = count--
const counter2 = document.getElementById(id1).innerHTML = counter

const price = document.getElementById(id2).textContent = Math.trunc(count  -=  250);
}


}

function chngcontent(Id){
    const container2 = document.getElementById(Id)
    const container = document.getElementById('container')
    container.classList.add('none-display')
    // const container2 = document.getElementById('2ndcontainer')
container2.classList.add('block-display')

}


function displaymainpg(Id){
    const container2 = document.getElementById(Id)
    container2.classList.remove('block-display')
const container = document.getElementById('container')
container.classList.remove('none-display')

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



// const changeurl = document.getElementById('updatebtn') 
// changeurl.addEventListener('click', function(){
//     const newslug = 'new-slug'
//     const newurl = `/new-path/${newslug}`
//     window.history.replaceState({path: newurl}, '', newurl)
// })