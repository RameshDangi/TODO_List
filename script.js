let task = [];

let ad_btn = document.querySelector("#ad");
ad_btn.addEventListener("click", ()=>{
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "add task";
    document.body.appendChild(input);
});