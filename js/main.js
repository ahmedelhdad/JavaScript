// Start Icon 
let boxSittings=document.querySelector(".settings-box")
let toggleSettings=document.querySelector(".toggle-settings")
let IconSettings=document.querySelector(".fa-gear")

toggleSettings.onclick = function()
{
    IconSettings.classList.toggle("fa-spin")
    boxSittings.classList.toggle("open")
}
// End Icon 

// Start Change Image Background 
let btnColor=document.querySelectorAll(".setttings-container .color ul li ")

if(window.localStorage.getItem("color"))
{
    btnColor.forEach(function(element) {
        element.classList.remove("active")
    })
   document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active")
   document.documentElement.style.setProperty("--main-color",localStorage.getItem("color"))
   
}
btnColor.forEach(function(element) {
    element.addEventListener('click' , function(e) {
        btnColor.forEach(function(el) {
            el.classList.remove('active')
        })
        e.target.classList.add("active")
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        localStorage.setItem('color',e.target.dataset.color)
    })
})
let backgroundInterval;
let backgroundOption=true;
let backgroundLocalItem=localStorage.getItem("background_option")
if(backgroundLocalItem !== null)
{
    if(backgroundLocalItem === 'true')
    {
        backgroundOption=true;
        document.querySelector('.random-background .yes').classList.add('active')
    }else
    {
        backgroundOption=false;
        document.querySelector('.random-background .no').classList.add('active')
    }
}
document.querySelectorAll('.random-background button').forEach(function(chose) {
    chose.addEventListener('click' , function(e) {
        document.querySelectorAll('.random-background button').forEach(function(e) {
            e.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})

document.querySelectorAll('.random-background button').forEach(function(ele) 
{
    ele.addEventListener("click" , function(e) {
        
        if(e.target.dataset.background === "yes")
        {
            backgroundOption=true
            randomizeIamge();
            localStorage.setItem('background_option', true)
        }else
        {
            backgroundOption=false
            clearInterval(backgroundInterval)
            localStorage.setItem('background_option',false)
        }
    })
})
// End Change opacity Button 
// Random Background Option 

// End Background Option 

// End Change color Background 
// Selcect Header 
let myBackground =document.querySelector(".header")
// Array Image 
let arrayBackground=["01.jpg" , "02.jpg","03.jpg","04.jpg","05.jpg"];



function randomizeIamge()
{
    if(backgroundOption === true)
    {
        backgroundInterval = setInterval(function () {
            let myRandom=Math.floor(Math.random() * arrayBackground.length)
            myBackground.style.cssText=`background-image: url(../imgs/${arrayBackground[myRandom]});`
            
        },10000)
    }
}
randomizeIamge();
// End Change Image Background 


// Start Navbar 

let toggleBtn = document.querySelector(".toggle-menu");
let link = document.querySelector(".header ul");

toggleBtn.onclick = function()
{
    link.classList.toggle('open')
}
document.addEventListener('click' ,(e) => {
    if(e.target !== toggleBtn && e.target !== link)
    {
        if(link.classList.contains('open'))
        {
            link.classList.toggle('open')
        }
    }
})
// Start Our Skills 
let myDiv =document.querySelectorAll('.box div span')
console.log()
window.onscroll = function()
{
    if(scrollY >= 1157)
    {
        myDiv.forEach(function(skill) {
            skill.style.cssText = "animation: mark 1s linear forwards;"
        })
    }
}
// End Our Skills 
// Start Our Gallery 
let ourGallery=document.querySelectorAll('.gallery .image img')
ourGallery.forEach(function(img) {
    img.addEventListener("click" , function(e) {
        let overlay =document.createElement('div')
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay)

        let popupBox = document.createElement('div')
        popupBox.className = "popup-box"
        overlay.appendChild(popupBox)
        
        let popupText =document.createElement('h2')
        popupText.className="popup-text";
        popupText.innerHTML=e.target.alt
        popupBox.appendChild(popupText);

        let popupImage=document.createElement('img')
        popupImage.className = "popup-img"
        popupImage.src = e.target.src
        popupBox.appendChild(popupImage)

        let iconClose = document.createElement('i')
        iconClose.className = "fa-solid fa-xmark"
        popupBox.appendChild(iconClose)
        iconClose.onclick = function()
        {
            overlay.style.display="none"
        }
    })
})
// End Our Gallery 
// Start Bullets 

let bullets=document.querySelector('.bullets')
let bulletsBtn=document.querySelectorAll('.show-bullets button')

let bulletOption = true;

let bulletLocal = localStorage.getItem('bulletOption');


if(bulletLocal !== null)
{
    bulletsBtn.forEach(function(el) {
        el.classList.remove('active')
    })
    if(bulletLocal === "true")
    {
        bullets.style.display = "block"
        document.querySelector('.show-bullets .yes').classList.add('active')
    }else
    {
        bullets.style.display = "none"
        document.querySelector('.show-bullets .no').classList.add('active')
    }
}

bulletsBtn.forEach((bullet) => {
    bullet.addEventListener('click' , (e) => {
        if(e.target.dataset.info === 'yes')
        {
            bullets.style.display = "block"
            localStorage.setItem('bulletOption' , true)
        }else
        {
            bullets.style.display = "none"
            localStorage.setItem('bulletOption' , false)
        }
        bulletsBtn.forEach((bl) => {
            bl.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})

let allBullets = document.querySelectorAll('.bullets ul li')
let allLinks = document.querySelectorAll(' nav ul li ')
function scrollToSomeWhere(elements)
{
    elements.forEach((link) => {
        link.addEventListener('click' , (e) => {
            e.preventDefault()
            document.querySelector(e.target.dataset.link).scrollIntoView({
                behavior:'smooth'
            })
        })
    })
}
scrollToSomeWhere(allLinks);
scrollToSomeWhere(allBullets);



let btnRest =document.querySelector('.rest-options ')
btnRest.onclick = function()
{
    localStorage.removeItem('color')
    localStorage.removeItem('background_option')
    localStorage.removeItem('bulletOption')
    window.location.reload();
}