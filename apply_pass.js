type = documnet.getElementById('type')
sdate = documnet.getElementById('s-date')
edate = document.getElementById('e-date')
stime = documnet.getElementById('s-time')
etime = document.getElementById('e-time')
grounds = documnet.getElementById('grounds')

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

    var doc = document.implementation.createDocument("","",null)
	var rootElem = doc.createElement("pass")
	
	var urlelem = doc.createElement("type")
	urlelem.innerHTML = type.selectedIndex
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("sdate")
	urlelem.innerHTML = sdate.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("edate")
	urlelem.innerHTML = edate.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("stime")
	urlelem.innerHTML = stime.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("etime")
	urlelem.innerHTML = etime.value
	rootElem.appendChild(urlelem)
	var urlelem = doc.createElement("grounds")
	urlelem.innerHTML = grounds.value
	rootElem.appendChild(urlelem)
	
    doc.appendChild(rootElem)

	// var data = JSON.stringify({"type": type.value,
	// 						"sdate": sdate.value,
	// 						"edate":edate.value,
	// 						"stime":stime.value,
	// 						"etime":etime.value,
    // 						"grounds":grounds.value});
    var str = new XMLSerializer().serializeToString(doc.documentElement);
    var cook = document.cookie
    var data = JSON.stringify({"doc":str,"cookie":cook})
    xhr.send(data);
	
})
