const nextButton = document.querySelector('.next-button')
const backButton = document.querySelector('.back-button')
const projectSection = document.querySelector('.project-section')



let firstProject = 
`
<div class="project-item card">
            
<div>
    <img src="/img/product landing page .png" alt="">
</div>

<div>
    <h3>Product Landing Page</h3>
    <p class="project-desc">Made with HTML and CSS. After looking up different page layouts I liked the look of the zigzaging cards. The hardest part about this project was making it mobile friendly as it was initially designed for desktop screens.</p>
</div>
`

let secondProject = 
`
<div class="project-item card">
            
<div>
    <img src="/img/Weather-app img.png" alt="">
</div>

<div>
    <h3>Weather App</h3>
    <p class="project-desc">A weather app constructed with HTML, CSS, JavaScript, and the AccuWeather API. Simple and straightforward. Users can search for a city or zip code to acquire the location, temperature, and current condition using the AccuWeather API. Displays changing background images depending on current conditions. </p>
</div>
`
let thirdPenis = 
`
<div class="project-item card">
            
<div>
    <img src="/img/DinnerDeciderOrange.png" alt="">
</div>

<div>
    <h3>Dinner Decider</h3>
    <p class="project-desc">Enter the future where machines make all the decisions for you. A simple app for the indecisive. made with HTML, CSS, JavaScript</p>
</div>


`

let projectList = [firstProject, secondProject, thirdPenis]

let number = 0

projectSection.innerHTML = projectList[number]
console.log(number);

    

    if(number <= 1){

        nextButton.addEventListener('click', e =>{
            number++
            
            if(number >= 3){
                number = 0
            }
            projectSection.classList.add('fadeout')
            setTimeout(() =>{ projectSection.classList.remove('fadeout'), projectSection.classList.add('fadein'), projectSection.innerHTML = projectList[number]}, 200)
            console.log(number);
        })
    }
    if (number >= 0){

        backButton.addEventListener('click', e =>{
            number--
            if(number <= -1){
                number = 2
            }
            projectSection.classList.add('fadeout')
            setTimeout(() =>{ projectSection.classList.remove('fadeout'), projectSection.classList.add('fadein'), projectSection.innerHTML = projectList[number]}, 200)
            console.log(number);
        })
    }
    
    


