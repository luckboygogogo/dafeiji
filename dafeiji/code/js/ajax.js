function createXHR() {
	return window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
}

function ajax(e) {
	e.type = e.type || "get", e.async = void 0 == e.async || e.async;
	var t = createXHR(),
		n = getParamStr(e.data);

	function a() {
		200 == t.status ? e.success(t.responseText) : e.error(t.status)
	}
	"get" == e.type.toLowerCase() && (e.url += 0 == n.length ? "" : "?" + n), t.open(e.type, e.url, e.async), "get" == e.type.toLowerCase() ? t.send(null) : "post" == e.type.toLowerCase() && (t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(n)), e.async ? t.onreadystatechange = function() {
		4 == t.readyState && a()
	} : a()
}

function getParamStr(e) {
	var t = [];
	for(var n in e) {
		var a = n + "=" + e[n];
		t.push(a)
	}
	return t.join("&")
}