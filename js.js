//query selector all
// alert('hello')

let oddLi=document.querySelectorAll('.listItems:nth-child(odd)');
for (let i=0;i<oddLi.length;i++){
    oddLi[i].style.background='pink';
}
//When user click Submit button
document.getElementById("submitBtt").addEventListener("click", addUserData);

function addUserData() {
    let userColor=document.getElementById('colorOption').value;
    console.log(userColor);
    document.getElementById("form1").style.background = userColor;

    const usersList=document.getElementById('usersList');
    const newUserName=document.getElementById('name').value;
    const newUserEmail=document.getElementById('email').value;
    console.log(newUserName, newUserEmail);
    const userRow=document.createElement('tr');
    
    const nameData = document.createElement('td');
    const emailData = document.createElement('td');
    const colorData=document.createElement('td');

    nameData.appendChild(document.createTextNode(newUserName));
    emailData.appendChild(document.createTextNode(newUserEmail));
    colorData.appendChild(document.createTextNode(userColor));

    userRow.appendChild(nameData);
    userRow.appendChild(emailData);
    userRow.appendChild(colorData);
    usersList.appendChild(userRow);

}
//when user clicks reset button ==> reset form background color
function resetBackground() {
    document.getElementById('form1').style.background='white';
}
//when the user select option to add new items to the available list 
function addItems() {
    const avaiItems=document.querySelector('#items');
    var noItems=document.querySelectorAll('.listItems').length;
    const noNewItems=document.querySelector('input[type="radio"]:checked').value;
    for (let i=0; i<noNewItems;i++){
        let newItem=document.createElement('li');
        newItem.appendChild(document.createTextNode(`new item ${noItems+i+1}`));
        avaiItems.appendChild(newItem);
    }
    

}