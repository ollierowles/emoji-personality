const myEmojis = ["👨‍💻", "⚽", "🎸", "🏋️"]
const emojiContainer = document.getElementById("emojiContainer")
const emojiInput =document.getElementById("emoji-input")


renderEmojis()


function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span")
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

/* The add to front and end buttons show two different implementations of 
running a function on click, unshift using an eventListener while add to end 
runs an function from onClick in HTML. */

function addClick() {

    if (!emojiInput.value){
        return  
    }
    else {
        console.log(emojiInput.value)
        myEmojis.push(emojiInput.value)
        console.log(myEmojis)
    }

    emojiInput.value= ""
    emojiContainer.innerHTML= ""
    renderEmojis()
}

const unshiftBtn = document.getElementById("unshift-btn")

unshiftBtn.addEventListener("click", function(){

    if (!emojiInput.value){
        return  
    }
    else {
        console.log(emojiInput.value)
        myEmojis.unshift(emojiInput.value)
        console.log(myEmojis)
    }

    emojiInput.value= ""
    emojiContainer.innerHTML= ""
    renderEmojis()
})

const shiftBtn = document.getElementById("shift-btn")

shiftBtn.addEventListener("click", function(){

    myEmojis.shift()
    console.log(myEmojis)
    emojiInput.value= ""
    emojiContainer.innerHTML= ""
    renderEmojis()
})

const popBtn = document.getElementById("pop-btn")

popBtn.addEventListener("click", function(){

    myEmojis.pop()
    console.log(myEmojis)
    emojiInput.value= ""
    emojiContainer.innerHTML= ""
    renderEmojis()
})