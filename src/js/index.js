var outer_text_element;
const welcome_texts = [".self", "...welcome", "greninja!!", "gren..?", "ghostkeeper."];

window.onload = function onLoad() {
    outer_text_element = document.getElementById("outer-text");
    main()
}

function main() {
    outer_text_element.textContent = welcome_texts[Math.floor(Math.random() * welcome_texts.length)]
}