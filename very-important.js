// overrideable
window.veryImportantKey = 99;

/**
 * @param {string} selector
 * @param {string} styling
 */
const veryImportant = (selector, styling) => {
	let finalSelector = '';
	for (let i = 0; i < window.veryImportantKey; i++) {
		finalSelector += selector;
	}
	let css = finalSelector + '{' + removeLastSemicolon(styling) + '!important;}';
	appendStyle(css);
}

/**
 * @param {string} str
 */
function removeLastSemicolon(str) {
	if (str.charAt(str.length - 1) === ';') {
		return str.slice(0, -1);
	} else {
		return str;
	}
}

/**
 * @param {string} css
 */
const appendStyle = (css) => {
	let head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');

	head.appendChild(style);

	style.type = 'text/css';
	if (style.styleSheet) {
		// this is required for IE8 and below.
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
}