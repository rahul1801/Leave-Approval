
user = document.getElementById('username')
pass = documnet.getElementById('password')
sub = document.getElementById('sub')

sub.addEventListener('click',()=>{
    xhr = new XMLHttpRequest();
    var url = "url";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            document.cookie = "rno="+json.rno
            console.log(json.text)
        } 
    }
    var hash = CryptoJS.MD5(pass.value);
    var data = JSON.stringify({"username": user.value, "password": hash});
    xhr.send(data);

})
