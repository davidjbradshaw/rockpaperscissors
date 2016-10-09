export function getById(Id) {
	return document.getElementById(Id);
}

export function addListener(objName,evt,func){
	const obj = getById(objName);
	if ('addEventListener' in window) obj.addEventListener(evt,func, false);
	else if ('attachEvent' in window) obj.attachEvent('on'+evt,func); // IE8
}
