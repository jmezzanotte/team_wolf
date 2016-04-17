function addEvent ( obj, type, fn ){
        
	'use strict';
        
    if ( obj && obj.addEventListener ){ 
    	obj.addEventListener(type, fn, false);
    } else if ( obj && obj.attachEvent ) { // Older IE
        obj.attachEvent('on' + type, fn);
    }
    
}



window.onload = function() {
	
	'use strict';
	
	addEvent( window, 'resize', function() { 
		var sectTwoContainer = document.getElementById('sect-two-container');
		var sectTwo = document.getElementById('sect-two'); 
	
		sectTwo.style.top = sectTwoContainer.offsetTop + 'px';
	});
	

	
}

