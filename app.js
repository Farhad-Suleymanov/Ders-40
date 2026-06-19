let divs = document.querySelectorAll("div");
    divs.forEach((a,i) => {
        let img = document.createElement("img");
        img.src = `https://picsum.photos/200/300?random=${i+1}`
        let p = document.createElement("p");
        p.textContent = `This is a random picture number ${i+1}`
        a.append(img,p);
    });

let btn = document.querySelectorAll(".btn");
let currentNum = 0;
divs[0].style.display = "inline-block";
btn[0].style.backgroundColor = "rgb(42, 42, 240)";
btn[0].style.color = "white";

btn.forEach((b,j) => {
   b.addEventListener("click",(e) =>{
    for (let k = 0; k<divs.length;k++){
        if (k!=j){
            divs[k].style.display = "none";
            btn[k].style.color = "black";
            btn[k].style.backgroundColor = "white";
        }
        else{
            btn[k].style.color = "white";
            btn[k].style.backgroundColor = "rgb(42, 42, 240)";
            divs[k].style.display = "inline-block";
        }
    }
    currentNum = j;
    })
})

let prev = document.querySelector("#previous");
let next = document.querySelector("#next");
next.addEventListener("click", () => {
    if (currentNum < btn.length - 1) {
        currentNum++;
    }
    btn.forEach((b, j) => {
        if (j == currentNum) {
            btn[j].style.color = "white";
            btn[j].style.backgroundColor = "rgb(42, 42, 240)";
            divs[j].style.display = "inline-block";
        } else {
            divs[j].style.display = "none";
            btn[j].style.color = "black";
            btn[j].style.backgroundColor = "white";
        }
    });
});
prev.addEventListener("click", () => {
    if (currentNum > 0) {
        currentNum--;
    }
    btn.forEach((b, j) => {
        if (j == currentNum) {
            btn[j].style.color = "white";
            btn[j].style.backgroundColor = "rgb(42, 42, 240)";
            divs[j].style.display = "inline-block";
        } else {
            divs[j].style.display = "none";
            btn[j].style.color = "black";
            btn[j].style.backgroundColor = "white";
        }
    });
});