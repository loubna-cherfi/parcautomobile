$(document).ready(function (){


  $("body").on("click",".menu-item", function(){
      var id = $(this).attr('id');

      if($(this).find(".modulePlus").hasClass("fa-plus")){
        $(this).find(".modulePlus").removeClass("fa-plus");
        $(this).find(".modulePlus").addClass("fa-minus");
      }
      else{
        $(this).find(".modulePlus").addClass("fa-plus");
        $(this).find(".modulePlus").removeClass("fa-minus");
      }
      $("body #subMenu"+id).toggle("3s");
    })
  
    $("body").on("click",".subMenu-item", function(){
      
      if($(this).find(".submodulePlus").hasClass("fa-plus")){
        $(this).find(".submodulePlus").removeClass("fa-plus");
        $(this).find(".submodulePlus").addClass("fa-minus");
      }
      else{
        $(this).find(".submodulePlus").addClass("fa-plus");
        $(this).find(".submodulePlus").removeClass("fa-minus");
      }
  
      var id = $(this).attr('id');
      $("body #action"+id).toggle("3s");
    })

    // $("#navbarDropdown").on("click", function(){
    //   $("#divMenu").toggle("5ms");
    // })

    // $("html").click(function(e) {
    //   if ($(e.target).closest('#navbarDropdown').length == 0)
    //       $("#divMenu").hide("5ms");
    // });

    $('body').on('change', '#site', function (e) {
      var id = $(this).val();
    
      if (id) {
        window.location.href = '/dossier/'+ id;
      }
    })
  
})