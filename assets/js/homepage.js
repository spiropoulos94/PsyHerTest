
let blog = document.querySelector(".homepage-blog")
let homepageContent = Array.from( document.querySelectorAll(".homepage-content"))
let headerNewsButton = document.querySelector(".header-news-button")
let navButtons = Array.from(document.querySelectorAll(".nav-menu>ul>li"))

const showBlogPage =() => {
    blog.style.display = "block"
    navButtons.map(el => el.classList.remove("active"))
    headerNewsButton.classList.add('active')
    homepageContent.map(el => el.style.display ="none")
}

console.log(navButtons)


headerNewsButton.addEventListener("click", ()=>{
   showBlogPage();
   console.log(navButtons)
})

navButtons.map(button => button.addEventListener("click", console.log(button)))