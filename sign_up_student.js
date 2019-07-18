sub = document.getElementById("sub")
sub.addEventListener('click',()=>{
    roll = document.getElementById('rollno');
	roll_text = roll.value;
	roll_text = roll_text.toLowerCase();
	let reg = /\b(cb|am|bl).en.u4(cse|ece|eee|che|civ)[0-9][0-9][0-9][0-9][0-9]\b/
	if(reg.test(roll_text)){
		window.location.href = 'apply_pass.html'
	}
	else{
        alert('enter roll number in the proper format')
    
    }
    
})