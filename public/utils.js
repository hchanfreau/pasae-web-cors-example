function call() {
    $.ajax({
        url: $('.url').val() + $('.token').val()
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    }).fail(
    		function(data, status, jqxhr) {
    			//debugger;
    		    console.log(jqxhr);
    		}		
    );
}