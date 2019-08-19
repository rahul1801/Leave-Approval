var sent = document.getElementById('mail')
var roll = document.getElementById('roll')

var messages = ['Student is facing a medical issue. Urgent approval of pass is requested.',"A member of students's family is not keeping well. Urgent approval of pass is requested.","Student is going out on College Fest Related Work. Urgent approval of pass is requested.",'Student has to go outside for project related work. Urgent approval of pass is requested.']
var mails = ['test1@example.com','test2@example.com','test3@example.com','test4@example.com']
mail.addEventListener('click',()=>{
roll_text = roll.value;
roll_text = roll_text.toLowerCase();
let reg = /\b(cb|am|bl).en.u4(cse|ece|eee|che|civ)[0-9][0-9][0-9][0-9][0-9]\b/
if(!reg.test(roll_text)){
alert('Enter a valid roll number')
}
else{
    var authority = document.getElementById('drop1')
    var reason = document.getElementById('drop2')
      
    var mail = `mailto:${mails[authority.selectedIndex]}?subject=`+reason.value+'-'+roll_text+`&body=${messages[reason.selectedIndex]}`;
    window.location.href = mail
    
}
})