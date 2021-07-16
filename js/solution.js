let bodyEL = document.body;
let bodyChilds = bodyEL.childNodes;
let ul = bodyChilds[1];
let li = ul.childNodes;


for (let node of document.body.childNodes ){
    // console.log(node);
}


let arr = Array.from(ul.childNodes);

// console.log(arr);
// console.log(arr.length);


const itemsList = document.getElementsByTagName('li');
// console.log(itemsList.innerHTML);

for (let i = 0; i <= itemsList.length - 1; i++){
    if (itemsList[i].nodeName = 'LI'){
        console.log(Array.from(itemsList[i].innerHTML));
    }
}