
let blog = document.querySelector(".homepage-blog")
let homepageContent = Array.from( document.querySelectorAll(".homepage-content"))
let headerNewsButton = document.querySelector(".header-news-button")
let navButtons = Array.from(document.querySelectorAll(".nav-menu>ul>li"))

const showBlogPage =() => {
    blog.style.display = "block"
    headerNewsButton.classList.add('active')
    homepageContent.map(el => el.style.display ="none")
}

console.log(blog)


headerNewsButton.addEventListener("click", ()=>{
   showBlogPage();
   console.log(navButtons)
})

