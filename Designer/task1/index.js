let bool = true;
let $hr = document.getElementById("hr");
let $title = document.getElementById("title");
document.getElementById("btn").addEventListener("click", () => {
    if (bool) {
        $hr.style.width = "300px";
        $title.style.color = "#1749ee";
    } else {
        $hr.removeAttribute("style");
        $title.removeAttribute("style");
    }
    bool = !bool;
})