// To set all paragrph design with the use javascript 
// select all paragraph and append one designing adding class as attribute to import as src link

console.log("this is the para");

const para = document.querySelectorAll("p");
console.log(para,typeof(para));

const para1 = document.getElementsByTagName("p");
console.log(para1);

for (let index = 0; index < para1.length; index++) {
    const element = para1[index];
    // console.log(element.innerHTML);
    element.classList = "description";
}

// document.get
// console.log(para,typeof(para));

// for (const key in para1) {
   
//         const element = para1[key];
        
//         console.log(element);

//         // element.classList.add("description");

// }




// console.log(getAttribute(para));
