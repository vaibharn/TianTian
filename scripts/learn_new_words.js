var nwords=0;

$(".dropdown-menu li a").click(function(){
  
    $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
    nwords=$(this).text();
  });
  
$(".learn-start").click(function(){
  window.location.href = `/TianTian/learnwords?nwords=${nwords}` ;

});