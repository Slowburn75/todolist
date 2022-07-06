//check off list by clicking
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed")
});
//remove itme from list
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //add new task
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + " </li>")
    }
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});