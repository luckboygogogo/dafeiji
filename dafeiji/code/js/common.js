function isCrash(f, t) {
	if(f && t) {
		var e = t.offsetLeft - f.offsetWidth / 2,
			o = t.offsetLeft + t.offsetWidth + f.offsetWidth / 2,
			s = t.offsetTop - f.offsetHeight / 2,
			i = t.offsetTop + t.offsetHeight + f.offsetHeight / 2,
			h = f.offsetLeft + f.offsetWidth / 2,
			r = f.offsetTop + f.offsetHeight / 2;
		if(h > e && h < o && r > s && r < i) return !0
	}
	return !1
}