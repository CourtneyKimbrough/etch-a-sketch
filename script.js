const container = document.querySelector("#container");

// create 16 divs
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("rows");
    container.appendChild(row);
    for (let i = 0; i < 16; i++) {
        if (i < 16) {
            let div = document.createElement("div");
            div.classList.add("divs");
            row.appendChild(div);
        }
    }
}

// Function for turning .divs from black to pink

const divs = document.querySelectorAll(".divs")

divs.forEach(div => {
    div.addEventListener("mouseover", function() {
        div.style.backgroundColor = "pink";
    });
});
  