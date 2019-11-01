function toggle(id) {
    var item = document.getElementById(id);
    var state = parseInt(item.getAttribute("data-state"));
    var max_state = parseInt(item.getAttribute("data-max-state"));
    if (max_state === 1) {
        if (state === 0) {
            item.style.opacity = 1;
            state = 1;
        } else {
            item.style.opacity = 0.25;
            state = 0;
        }
    } else {
        if (state === max_state) {
            item.style.opacity = 0.25;
            state = 0;
        } else {
            item.style.opacity = 1;
            state += 1;
        }
        item.src = "res/items/" + item.alt + "-" + state + ".png";
    }
    item.setAttribute("data-state", state);
}

function toggleNoDim(id) {
    var item = document.getElementById(id);
    var state = parseInt(item.getAttribute("data-state"));
    var max_state = parseInt(item.getAttribute("data-max-state"));
    if (max_state === 1) {
        if (state === 0) {
            state = 1;
        } else {
            state = 0;
        }
    } else {
        if (state === max_state) {
            state = 0;
        } else {
            state += 1;
        }
        item.src = "res/items/" + item.alt + "-" + state + ".png";
    }
    item.setAttribute("data-state", state);
}

function togglePrize(id) {
    var item = document.getElementById(id);
    var state = parseInt(item.getAttribute("data-state"));
    var completed = parseInt(item.getAttribute("data-completed"));
    if (completed !== 1) {
        if (state === 4) {
            state = 0;
        } else {
            state += 1;
        }
        item.src = "res/prize/prize-" + state + ".png";
        item.setAttribute("data-state", state);
    }
}

function toggleComplete(id) {
    var item = document.getElementById(id);
    var state = parseInt(item.getAttribute("data-state"));
    var completed = parseInt(item.getAttribute("data-completed"));
    if (state !== 0) {
        if (completed === 0) {
            completed = 1;
            item.src = "res/prize/completed-" + state + ".png";
        } else {
            completed = 0;
            item.src = "res/prize/prize-" + state + ".png";
        }
        item.setAttribute("data-completed", completed);
    }
}

function toggleMedallion(id) {
    var item = document.getElementById(id);
    var state = parseInt(item.getAttribute("data-state"));
    if (state === 3) {
        state = 0;
    } else {
        state += 1;
    }
    item.src = "res/medallion/medallion-" + state + ".png";
    item.setAttribute("data-state", state);
}

function toggleChest(id) {
    var item = document.getElementById(id);
    var state = parseInt(item.getAttribute("data-state"));
    var max_state = parseInt(item.getAttribute("data-max-state"));
    if (state === 0) {
        state = max_state;
    } else {
        state -= 1;
    }
    item.src = "res/chest/chest-" + state + ".png";
    item.setAttribute("data-state", state);
}

function toggleAga() {
    var item = document.getElementById("aga-img");
    var state = parseInt(item.getAttribute("data-state"));
    if (state === 0) {
        state = 1;
        item.src = "res/other/aga-dead.png";
    } else {
        state = 0;
        item.src = "res/other/aga.png";
    }
    item.setAttribute("data-state", state);
}

function init() {

    var retro = getParameterByName("retro");
    if (retro === "true") {
        var max_states = [3, 3, 3, 11, 7, 4, 5, 5, 5, 9];
        var els = document.getElementsByClassName("chest");
        for (let i = 0; i < els.length; i++) {
            els[i].setAttribute("data-max-state", max_states[i]);
            els[i].src = "res/chest/chest-" + max_states[i] + ".png";
        }
    }

    var els = document.getElementsByTagName("img");
    for (let i = 0; i < els.length; i++) {
        els[i].setAttribute("draggable", "false");
        els[i].setAttribute("ondragstart", "return false;");
    }

    var els = document.getElementsByClassName("item");
    for (let i = 0; i < els.length; i++) {
        els[i].style.opacity = 0.25;
        els[i].setAttribute("data-state", "0");
    }

    var els = document.getElementsByClassName("item-nodim");
    for (let i = 0; i < els.length; i++) {
        els[i].setAttribute("data-state", "0");
    }

    document.getElementById("bomb").style.opacity = 1;
    document.getElementById("bomb").setAttribute("data-state", "1");

    els = document.getElementsByClassName("prize");
    for (let i = 0; i < els.length; i++) {
        els[i].setAttribute("data-state", "0");
        els[i].setAttribute("data-completed", "0");
    }

    els = document.getElementsByClassName("chest");
    for (let i = 0; i < els.length; i++) {
        els[i].setAttribute("data-state", els[i].getAttribute("data-max-state"));
    }

    els = document.getElementsByClassName("medallion");
    for (let i = 0; i < els.length; i++) {
        els[i].setAttribute("data-state", "0");
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}