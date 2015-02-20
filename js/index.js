
/* Move figures based on position of slider */ 
for(var i=0;i<(imgcount-1);i++) {
	var rotation = parseFloat(-92 + "." + (imgcount - i));
	figs[i].style.webkitTransform = 'rotateX(' + rotation + 'deg)';
	figs[i].style.transform = 'rotateX(' + rotation + 'deg)';
}
document.querySelector('#imgdex figure:last-child figcaption').style.opacity = 1;

function updateImage(slider) {
	var currentimg = document.querySelector('#imgdex figure:nth-child('+slider.value+')');
	if (slider.oldvalue !== undefined) {
		var oldimg = document.querySelector('#imgdex figure:nth-child('+(slider.oldvalue)+')');
	} else {
		slider.oldvalue = imgcount;
		var oldimg = document.querySelector('#imgdex figure:nth-child('+(slider.oldvalue)+')');
	}
	if (slider.value < slider.oldvalue) { 
		// going forwards
		currentimg.style.webkitTransform = 'rotateX('+slider.value+'deg)';
		currentimg.style.transform = 'rotateX('+slider.value+'deg)';
	} 
	if (slider.value > slider.oldvalue) {
		// going backwards
		var rotation = parseFloat(-92 + "." + (imgcount - slider.value));
		oldimg.style.webkitTransform = 'rotateX(' + rotation + 'deg)';
		oldimg.style.transform = 'rotateX(' + rotation + 'deg)';
   }
   if (slider.value !== slider.oldvalue) {
	   currentimg.querySelector('figcaption').style.opacity = 1;
	   oldimg.querySelector('figcaption').style.opacity = 0;
   }
}