var view = document.getElementById('view')
var name = "Name: Rahul Nair"
var address = "Address: 10 Downing Street, Coimbatore, India"
var email = "Email: rahulcse1767@gmail.com"
var contact = "Phone: 9820315975"
var activity = "Activities: Football, Basketball"

view.addEventListener('click',()=>{
    roll = document.getElementById('rollno');
    roll_text = roll.value;
    roll_text = roll_text.toLowerCase();
    let reg = /\b(cb|am|bl).en.u4(cse|ece|eee|che|civ)[0-9][0-9][0-9][0-9][0-9]\b/
    if(reg.test(roll_text)){
        name1.textContent = name
        address1.textContent = address
        email1.textContent = email
        act1.textContent = activity
        contact1.textContent = contact
    }
    else{
        alert('enter roll number in the proper format')
    
    }
    
})
