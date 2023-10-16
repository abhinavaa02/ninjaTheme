// starting script
const tempArray = document.getElementsByClassName("post-card card-grey");
tempArray[0].classList.replace("card-grey", "selected-card");
const content1 = document.getElementById(0 + "-post-content").innerText.substring(0, 600).trim() + "...";
const url1 = document.getElementById(0 + "-post-url").innerText;
setTimeout(() => {
    document.getElementById("home-post-content").innerText = content1;
    document.getElementById("home-post-more").href = url1;
}, 500);

// horizontal scroll


// const cardArray = document.getElementsByClassName("home-post-card");
// console.log(cardArray);
// const totalCards = cardArray.length;
// const screenWidth = window.screen.width;
// cardArray.forEach((div) => {
//     // div.style.width = screenWidth/3;
//     console.log("hello");
// })

function doThis(temp, url) {
    // changing greyscales
    const selectedCard = document.getElementsByClassName("post-card selected-card")[0];
    selectedCard.classList.replace("selected-card", "card-grey");

    const newSelectedCard = document.getElementById("home-postcard-" + temp);
    newSelectedCard.classList.replace("card-grey", "selected-card");


    // Changing Content
    const contentDiv = document.getElementById("home-post-content");
    const urlDiv = document.getElementById("home-post-more");
    contentDiv.classList.remove("animate__animated", "animate__fadeInLeft");
    const content = document.getElementById(temp + "-post-content").innerText.substring(0, 600).trim() + "...";
    contentDiv.classList.add("animate__animated", "animate__fadeInLeft");
    contentDiv.innerText = content;
    urlDiv.href = url;
}