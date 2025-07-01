$(document).ready( function () {

  $("#subModule").select2();
  $("#subModuleUpd").select2();
  

    $('#actionsTable').DataTable({
      lengthMenu: [
        [15, 25, 50, -1],
        [15, 25, 50, 'All'],
    ],
      
      "autoWidth": false

  });






  $("body").on("click", ".saveAddAction" , function(){
    var actionName = $("#actionName").val();
    var icon = $("#icon").val();
    var subModule = $("#subModule").val();
    var ord = $("#ord").val();
    var className = $("#className").val();
    var horizontal = $('input[name="horizontal"]:checked').val();
    var idName = $("#idName").val();
    var routeName = $("#routeName").val();

    if(actionName == ""){
      $("#actionName").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#actionName").attr('style', "border: 1px solid #gray !important");
    }
    if(icon == ""){
      $("#icon").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#icon").attr('style', "border: 1px solid #gray !important");
    }
    if(ord == ""){
      $("#ord").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#ord").attr('style', "border: 1px solid #gray !important");
    }
    // if(className == ""){
    //   $("#className").attr('style', "border: 1px solid #eb0000 !important");

    // }
    // else{
    //   $("#className").attr('style', "border: 1px solid #gray !important");
    // }
    if(subModule == ""){
      $("#select2-subModule-container").parent().css("border","1px solid #eb0000");

    }
    else{
        $("#select2-subModule-container").parent().css("border","1px solid lightgray ");

    }
    // if(idName == ""){
    //   $("#idName").attr('style', "border: 1px solid #eb0000 !important");

    // }
    // else{
    //   $("#idName").attr('style', "border: 1px solid #gray !important");
    // }
    if(routeName == ""){
      $("#routeName").attr('style', "border: 1px solid #eb0000 !important");

    }
    else{
      $("#routeName").attr('style', "border: 1px solid #gray !important");
    }
    if(actionName != "" && icon != "" && ord != "" && className != "" && subModule != ""){
      const l = ladda.create(document.activeElement);

      l.start();

                  $.ajax({
                  url: "addAction",
                  method: "POST",
                  data:{
                      actionName: actionName,
                      icon:icon,
                      ord: ord,
                      className: className,
                      subModule:subModule,
                      horizontal:horizontal,
                      idName:idName,
                      routeName:routeName,
                  },
                  success: function(data){
                      l.stop();
                      

                      if ( $.fn.dataTable.isDataTable("#actionsTable") ) {
                        $('#actionsTable').DataTable().clear().destroy();
                    }

                    $("#listActions").html(data)


                    $("#actionsTable").DataTable({
                      lengthMenu: [
                        [15, 25, 50, -1],
                        [15, 25, 50, 'All'],
                    ],
                      "autoWidth": false
                    })

                    $("#closeAddAction").click();
                    toastr.success("Action ajouté avec success")
                  },
                  error: function(data){
                    toastr.error("Erreur")
                    l.stop()
                  }
                })
    }


  })

  $("body").on("click" , ".update_action" , function(){
    // alert("s")
    var  action = $(this).attr("data-id")

    $.ajax({
     url: "findAction",
     method: "POST",
     data:{
      action: action,
     },
     success: function(data){
      
       $("#idAction").val(data.id);
       $("#actionNameUpd").val(data.nom)
       $("#iconUpd").val(data.icon)
       $("#idNameUpd").val(data.id_button)
       $("#routeNameUpd").val(data.route)
       $("#subModuleUpd").val(data.sousModule).trigger("change")
       if (data.horizontal === true) {
        $("#horizontal_update_true").prop("checked", true);
      } else if (data.horizontal === false) {
          $("#horizontal_update_false").prop("checked", true);
      }


       $("#updateAction").modal('show');
     }
   })
 })

 $("body").on("click", ".saveUpdateAction" , function(){

  var id = $("#idAction").val();
  var nom = $("#actionNameUpd").val()
  var icon = $("#iconUpd").val()
  var id_button = $("#idNameUpd").val()
  var route = $("#routeNameUpd").val()
  var sous_module = $("#subModuleUpd").val()
  var horizontal = $('input[name="horizontal_update"]:checked').val();

  if(nom == ""){
    $("#actionNameUpd").attr('style', "border: 1px solid #eb0000 !important");

  }
  else{
    $("#actionNameUpd").attr('style', "border: 1px solid #gray !important");
  }
  if(sous_module == ""){
    $("#select2-subModuleUpd-container").parent().css("border","1px solid #eb0000");

  }
  else{
      $("#select2-subModuleUpd-container").parent().css("border","1px solid lightgray ");

  }
  if(nom != "" && sous_module != ""){
    const l = ladda.create(document.activeElement);

    l.start();

                $.ajax({
                url: "updateAction",
                method: "POST",
                data:{
                    id:id,
                    nom: nom,
                    icon:icon,
                    id_button:id_button,
                    route:route,
                    sous_module:sous_module,
                    horizontal:horizontal
                },
                success: function(data){
                    l.stop();
                    
                    if ( $.fn.dataTable.isDataTable("#actionsTable") ) {
                      $('#actionsTable').DataTable().clear().destroy();
                  }

                  $("#listActions").html(data)


                  $("#actionsTable").DataTable({
                    lengthMenu: [
                      [15, 25, 50, -1],
                      [15, 25, 50, 'All'],
                  ],
                    "autoWidth": false
                  })

                  $("#closeUpdateAction").click();
                  toastr.success("Action modifiée avec success")
                },
                error: function(data){
                  toastr.error("Erreur")
                  l.stop()
                }
              })
  }


})



$("body").on("click", ".deleteAction" , function(){
  var  action = $(this).attr("data-id")

  const l = ladda.create(document.activeElement);

  l.start();

  // alert(id);
  $.ajax({
    url: "deleteAction",
    method: "POST",
    data:{
      action: action,
    },
    success: function(data){
      l.stop();
            
        if ( $.fn.dataTable.isDataTable("#actionsTable") ) {
          $('#actionsTable').DataTable().clear().destroy();
      }

      $("#listActions").html(data)

      $("#actionsTable").DataTable({
        lengthMenu: [
          [15, 25, 50, -1],
          [15, 25, 50, 'All'],
      ],
        "autoWidth": false
      })

      toastr.success("Action Supprimer avec success")
      },
      error: function(data){
        toastr.error("Erreur")
        l.stop()
      }
    })
})


  

})