// ==UserScript==
// @name           Basecamp Todo ID
// @namespace      de.knuspermagier
// @description    Shows the todo id in basecamp
// @include        https://quotefm.basecamphq.com/*
// ==/UserScript==

var items = document.getElementsByTagName("div");

for(var i = 0; i < items.length; i++) {
	var item = items[i];
	
	if(item.getAttribute('class') != 'widget list_widget item_wrapper commentable') {
		continue;
	}
	
	var itemId = item.getAttribute('record');
	
	if(itemId == null) {
		continue;
	}
	
	var span = document.getElementById('item_wrap_' + itemId);
	
	span.innerHTML = '[' + itemId + '] ' + span.innerHTML;
}
