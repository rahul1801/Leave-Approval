var sent = document.getElementById('mail')


mail.addEventListener('click',()=>{
	
    var authority = document.getElementById('drop1')
    var reason = document.getElementById('drop2')
    var mail = "mailto:test@example.com?subject="+reason.value+"&body=Student is facing a medical issue. Urgent approval of pass is requested."
    window.location.href = mail
})