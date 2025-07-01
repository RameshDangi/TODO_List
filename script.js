let ad_btn = document.querySelector("#ad");
let task = [];
ad_btn.addEventListener("click", ()=>{
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "add task";
    input.id = "value_ad";


    let list_add = document.querySelector("#tasklist");

    document.body.appendChild(input);
    document.body.appendChild(list_add);


    input.addEventListener("keydown", (event)=>{
        if(event.key === "Enter"){
            let li = document.createElement("li");
            li.textContent = input.value;
            li.className = "task_item";
            task.push(input.value);
            tasklist.appendChild(li);
            input.remove();
            task.push(input.value);
            console.log(task);
        }
    });

});