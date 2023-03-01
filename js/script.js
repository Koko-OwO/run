let modifier = 5;
const nier = document.getElementById("nier");
let moveDown = document.addEventListener('keydown', (Event)=> {
    const { style } = block;
        switch (Event.key) {
            case 'ArowUp': (style.top) = `${parseInt(style.top) - modifier}px`; breack;
            case 'ArowDown': (style.top) = `${parseInt(style.top) + modifier}px`; breack;
            case 'ArowLeft': (style.top) = `${parseInt(style.top) - modifier}px`; breack;
            case 'ArowRight': (style.top) = `${parseInt(style.top) + modifier}px`; breack;
        }
})