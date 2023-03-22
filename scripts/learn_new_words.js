$(".dropdown-menu li a").click(function(){
  
    $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
  });
  
$(".learn-start").click(function(){
  const nwords = $(".btn:first-child").text();
  window.location.href = `/TianTian/learnwords/?nwords=${nwords}` ;
});
