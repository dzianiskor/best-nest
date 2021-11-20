document.querySelector(".close-categories-panel").addEventListener("click", (e)=> {
    e.target.closest(".top-categories-panel-wrapper").classList.remove("opened");
});

document.querySelector(".categories-wrapper").addEventListener("click", (e)=> {
    document.querySelector(".top-categories-panel-wrapper").classList.toggle("opened");
});