sub = document.getElementById('sub')
sub.addEventListener('click',()=>{
    pass = document.getElementById('type')
    flag = 0
    area = document.getElementById('grounds')
    if(area.value == ""){
        flag = 1
        alert('grounds for leave cannot be empty')
    }
    if(pass.value == 'Day Pass'){
        s_date = document.getElementById('s-date')
        s_date_value = s_date.value
        e_date = document.getElementById('e-date')
        e_date_value = e_date.value

        e_time = document.getElementById('e-time')
        e_time_value = e_time.value

        if(s_date_value != e_date_value){
            alert('For Day Pass please enter the same start date and end date')   
            flag = 1 
        }
        else{
            if(e_time_value > "19:00"){
                alert("You have to be in college before 7 pm")
                flag = 1
            }
        }

    }
    if (flag == 0){
        window.location.href = 'list_student_passes.html'
    }
    
})