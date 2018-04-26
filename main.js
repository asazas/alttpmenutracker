function toggle(id) {
    var item = document.getElementById(id);
    var state = parseInt(item.getAttribute("data-state"));
    var max_state = parseInt(item.getAttribute("data-max-state"));
    if (max_state === 1) {
        if (state === 0) {
            item.style.opacity = 1;
            state = 1;
        } else {
            item.style.opacity = 0.13;
            state = 0;
        }
    } else {
        if (state === max_state) {
            item.style.opacity = 0.13;
            state = 0;
        } else {
            item.style.opacity = 1;
            state += 1;
        }
        item.src = "res/y-items/" + item.alt + "-" + state + ".png"
    }
    item.setAttribute("data-state", state);
}

function init() {
    var els = document.getElementsByClassName("item");
    for (let i = 0; i < els.length; i++) {
        els[i].style.opacity = 0.13;
        els[i].setAttribute("data-state", "0");
    }
}