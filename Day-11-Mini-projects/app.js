// ==================================================================
// ================== Event Bubbling Pr #1====================
// let div = document.querySelector("div")
// let ul = document.querySelector("ul")
// let li = document.querySelectorAll("li")

// div.addEventListener("click", function () {
//     console.log("div was clicked")
// })

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();//to stop printing to the parent tree
//     console.log("ul was clicked")
// })

// for (lis of li){
//     lis.addEventListener("click", function (event) {
//         event.stopPropagation();
//     console.log("li was clicked")
// })
// }
//         ===================End of evnet bubbling
// ===========================TOdo LIst APP Pr #2===========================================

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");


// btn.addEventListener("click", function () {
//     let lists = document.createElement("li");
//     lists.innerText = input.value;

//     let delBtn = document.createElement("button")//for task deletion
//     delBtn.innerText = "Delete"
//     delBtn.classList.add("delete")

//     lists.appendChild(delBtn);//to delete task

//     ul.appendChild(lists);
//     input.value = "";
// })

// we hace to use event bubblinh to delete the new tasks

// ul.addEventListener("click", function (event) {
  
//"" console.dir(event.target.nodeName)//(so the target event is used to show us the\
    //  identity of deleted task  and nodeName tells us due to which thing it has been executed)""

    // now the real work now use parent element of event.target then romove propery by using if startement

//     if (event.target.nodeName == "BUTTON") {
//         let lisDele = event.target.parentElement;
//         lisDele.remove();
//         console.log(`deleted`)
//     }
// })

// ==========================Todo list app pr #2 end=================================================