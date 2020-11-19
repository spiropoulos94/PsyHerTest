
let blog = document.querySelector(".homepage-blog")
let homepageContent = Array.from( document.querySelectorAll(".homepage-content"))
let headerNewsButton = document.querySelector(".header-news-button")
let navButtonsWithoutNews = Array.from(document.querySelectorAll(".nav-menu>ul>li")).filter(el => el.className !== "header-news-button")

console.log(navButtonsWithoutNews)

const showBlogPage =() => {
    blog.style.display = "block"
    navButtonsWithoutNews.map(el => el.classList.remove("active"))
    headerNewsButton.classList.add('active')
    homepageContent.map(el => el.style.display ="none")
}

const showHomePageContents = () => {
    console.log("deixnei to homepage")
    homepageContent.map(el => el.style.display ="block")
    blog.style.display = "none"
}


headerNewsButton.addEventListener("click", ()=>{
    console.log('deixnei to blog')
   showBlogPage();
})

navButtonsWithoutNews.map(button => button.addEventListener("click", ()=>{
    showHomePageContents();
}))

