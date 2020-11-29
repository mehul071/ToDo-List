//check off the todos by clicking the todo's
$("ul").on("click","li",function(){
	$(this).toggleClass("addgray");
});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(){
	if(event.which === 13){
		var newtodo=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" +newtodo+ "</li>");
	}

});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});