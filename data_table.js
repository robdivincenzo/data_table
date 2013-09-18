function showRow(row){
	var row_text=$(row).children('th').text();
	if($(row).hasClass('collapsed')){
		$(row).children('th').text(row_text.replace("+","-"));
		$(row).nextUntil('.data_total').show();
		$(row).removeClass('collapsed');
		}
	else{
		$(row).children('th').text(row_text.replace("-","+"));
		$(row).nextUntil('.data_total').hide();
		$(row).addClass('collapsed');	
	}
}
function hideParentTable(hideTableDiv){
	parent_id= $(hideTableDiv).parent().attr("id");
	$("##"+parent_id).hide();
	$("##"+parent_id+'_link').text('Show Data Table');
}

function showDataTable(row,column,ajax_function) {
	var showorhide= $("#"+row+"_"+column+"_link").text();
	if(showorhide == 'Show Data Table'){
		if($("#"+row+"_"+column).html() == ''){}
			//Run the ajax function
		else{
			$("#"+row+"_"+column).show();
			$("#"+row+"_"+column+"_link").text('Hide Data Table');
		}
	}
	else{
		$("#"+row+"_"+column).hide();
		$("#"+row+"_"+column+"_link").text('Show Data Table');
	}
}