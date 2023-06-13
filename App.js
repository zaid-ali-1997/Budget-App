    
        let Images = [
         {img:"Images/Food.png"},
         {img:"Images/Rent.png"},
         {img:"Images/restaurant.png"},
         {img:"Images/Shopping.png"},
         {img:"Images/Sports.png"},
     ]

    
    function addExpense(){
    let expenseDet = document.getElementById("expenseDet");
    let date = document.getElementById("date").value;
    let expense = document.getElementById("expense").value;
    let category = document.getElementById("category").value;
    let payment = document.getElementById("payment").value;
    let table = document.createElement("table");
    table.setAttribute("class", "myTable");
   expenseDet.appendChild(table);
   let row = document.createElement("tr");
   row.setAttribute("class", "myRow");
   table.appendChild(row);

let column0 = document.createElement("td");
let column1 = document.createElement("td");
let column2 = document.createElement("td");
let column3 = document.createElement("td");
let column4 = document.createElement("td");

// yeha say masla hy
// let x = document.querySelector(".myLargeDiv");
// let y = document.querySelector(".totalAmount");
// if (document.querySelector(".myLargeDiv").style.display === "block") {
//     x.removeChild(y);
//     addBudget();
// } else {
//     document.querySelector('.myLargeDiv').style.display = 'block';
//     addBudget();
// }
// yeha tak



Images.forEach(function (allImages){
    if(allImages.img.includes(document.getElementById("category").value)){
        var MyImage = column0.appendChild(document.createElement("img"));
        MyImage.setAttribute("class", "allImages");
                    MyImage.src = allImages.img;
                    column0.appendChild(MyImage);
                    row.appendChild(column0)
    }
})

   column1.appendChild( document.createTextNode(date));
   column2.appendChild( document.createTextNode(expense));
   column3.appendChild( document.createTextNode(category));
   column4.appendChild( document.createTextNode(payment));
   row.appendChild(column1);
   row.appendChild(column2);
   row.appendChild(column3);
   row.appendChild(column4);
   console.log(category);

};
let subtractCount;
let count = 0;
function addBudget(){
    let expense2 = document.getElementById("expense").value;
    count += +expense2;
    let body = document.body;
    let largeDiv = document.createElement("div");
    largeDiv.setAttribute("class", "myLargeDiv");
    let totalAmount = document.createElement("div");
    body.appendChild(largeDiv);
    largeDiv.appendChild(totalAmount);
    totalAmount.setAttribute("class", "totalAmount");
    let div1 = document.createElement("div");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    
    totalAmount.appendChild(div1);
    totalAmount.appendChild(div2);
    totalAmount.appendChild(div3);

    let heading1 = document.createElement('h2');
    let heading2 = document.createElement('h2');
    let heading3 = document.createElement('h2');
    heading1.appendChild(document.createTextNode("Total Amount"));
    heading2.appendChild(document.createTextNode("Expense"));
    heading3.appendChild(document.createTextNode("Balance"));
    div1.appendChild(heading1);
    div2.appendChild(heading2);
    div3.appendChild(heading3);
    let para1 = document.createElement("p");
    let para2= document.createElement("p");
    let para3 = document.createElement("p");
    div1.appendChild(para1.appendChild(document.createTextNode(document.getElementById("AddBudget").value)));
    div2.appendChild(para2.appendChild(document.createTextNode(count)));
    let balance = document.getElementById("AddBudget").value - count;
    div3.appendChild(para3.appendChild(document.createTextNode(balance )));


}

// function arg() {
//     if (document.querySelector(".totalAmount").style.display === "block") {
//         document.querySelector(".totalAmount").remove();
//         addBudget();
//     } else {
//         document.querySelector('.totalAmount').style.display = 'block';
//         addBudget();
//     }
// }

