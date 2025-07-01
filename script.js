let ad_btn = document.querySelector("#ad");
let task = [];
ad_btn.addEventListener("click", ()=>{
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "add task";
    input.id = "value_ad";

    let list_add = document.querySelector("li");
    input.addEventListener("input", ()=>{
        list_add.innerText = input.value;
    });

    task.push(input.value);

    document.body.appendChild(input);
});