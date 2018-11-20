$(document).ready(function() {
    $('#emTable').dataTable( {
        "dom": 'Blfrtip',
        "buttons": ['copy', 'csv', 'excel', 'pdf', 'print'],
        "processing": true,
        "serverSide": true,
        "searching" : true,
		"destroy"   : true,
		"paging":     true, 
		"ordering"     : true,
		"iDisplayLength": 10,
		"bLengthChange" : true,
		"lengthMenu": [20, 50, 100, 1000], 
        // "blengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ]
		"scrollY"       : '50vh',
        "ajax": {
        		'url':  "pscript/employee_info.pl",
        		'type': 'POST',
        		'data': {},
        		'dataType':  'json',
        		// error: function;,
    			},
        
    } );
} );
