let task = [];

let ad_btn = document.querySelector("#ad");
ad_btn.addEventListener("click", ()=>{
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "add task";
    input.id = "value_ad";

    let para = document.querySelector("#new_task");
    input.addEventListener("input", ()=>{
        para.innerText = input.value;
    });

    document.body.appendChild(input);
});