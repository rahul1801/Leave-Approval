sub = document.getElementById("sub")

user = document.getElementById('username')
pass = documnet.getElementById('password')
name = documnet.getElementById('name')
email = document.getElementById('email')
dob = documnet.getElementById('date')
phno = document.getElementById('phone')
addr = documnet.getElementById('address')

sub.addEventListener('click',()=>{
	xhr = new XMLHttpRequest();
    var url = "url";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.text)
        } 
    }

    var hash = CryptoJS.MD5(pass.value);
	var doc = document.implementation.createDocument("","",null)
	var rootElem = doc.createElement("warden")
	
	var urlelem = doc.createElement("username")
	urlelem.innerHTML = user.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("password")
	urlelem.innerHTML = hash
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("name")
	urlelem.innerHTML = name.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("email")
	urlelem.innerHTML = email.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("dob")
	urlelem.innerHTML = dob.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("phno")
	urlelem.innerHTML = phno.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("address")
	urlelem.innerHTML = addr.value
	rootElem.appendChild(urlelem)
	
    doc.appendChild(rootElem)
    
    // var hash = CryptoJS.MD5(pass.value);
	// var data = JSON.stringify({"username": user.value,
	// 						"password": hash,
	// 						"name":name.value,
	// 						"email":email.value,
	// 						"dob":dob.value,
	// 						"phone":phno.value,
    // 						"address":addr.value});
    var str = new XMLSerializer().serializeToString(doc.documentElement);
    var data = JSON.stringify({"doc":str})
    xhr.send(data);
	
})
