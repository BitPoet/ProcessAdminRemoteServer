
$(document).on('click', '.arsconfirmexport', function(evt){
	if(! confirm(ProcessWire.config.ars.exportmsg)) evt.preventDefault();
});
