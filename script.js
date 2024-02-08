//your JS code here. If required.


let n = getDOMLevel();
alert(`The level of the element is: ${n}`)
function getDOMLevel(e) {
	const tragetElement = document.getElementById("level");
	let domLevel = 0;
	hasParentElement(tragetElement);
	function hasParentElement(element) {
		if(element.parentNode){
			domLevel++;
			hasParentElement(element.parentNode);
		}
	}
	return domLevel;
}