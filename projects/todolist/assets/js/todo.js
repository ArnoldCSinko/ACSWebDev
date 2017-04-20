//jQuery Solution for TodoList
//By Arnold C. Sinko

//Check off list item
$("ul").on("click", "a", function(){
	$(this).toggleClass("done");
});

//Remove list item
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	//prevent event bubble
	e.stopPropagation(e);
});

//Get user input for adding list item
$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		var itemText = $(this).val();
		//create new li to append to list
		$("ul").append("<li><span><a href='#'><i class='fa fa-trash'></i></a></span><a href='#'>" + itemText + "</a></li>");
		$(this).val("");

	}
});
//Toggle text input when plus or minus is clicked
$("#addToList").on("click", function(){

	$("input[type='text'").fadeToggle();
  $("#addToList").toggleClass("fa-minus fa-plus");
});











 
