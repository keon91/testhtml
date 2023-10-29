// let el = document.getElementById("runningString");
// let text = el.innerHTML;

// setInterval(function () {
//     text = text[text.length - 1] + text.substring(0,
//         text.length - 1);
//     el.innerHTML = text;
// }, 100);


const root = documentElement

const marqueeContent = document.querySelector("ul.marqueeContent")

root.style.setProperty('--marquee-elements', marqueeContent.children.length)

const marquee = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed")

for (let index = 0; index < marqueeElementsDisplayed.length; index++) {
    marqueeContent.appendChild(marqueeContent.choldren[i].cloneNode(true))
}