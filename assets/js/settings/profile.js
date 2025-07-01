$(document).ready( function () {

  $("#profession").select2();

  $("body").on("click", "#saveInfoUser", function(){
    var id = $("#id").val();
    var fullName = $("#fullName").val();
    var status = $('input[name="active"]:checked').val();
    var profession = $("#profession").val();

    const la = ladda.create(document.activeElement);

    la.start();

    $.ajax({
      type: "POST",
      url:"/updateInfoUser",
      data:{
        id:id,
        fullName:fullName,
        status:status,
        profession:profession
      },
      success: function(data){
        
        la.stop()
        toastr.success("Modification fait avec succéss !");
      },
      error:function(){
        la.stop();
        toastr.error("Erreur")
      }
    })

  })

  $("body").on("click", "#savePasswordChange", function(){
    var id = $("#id").val();
    var oldPassword = $("#currentPassword").val();
    var newPassword = $("#newPassword").val();
    var repeatNewPassword = $("#repeatNewPassword").val();

    if(!oldPassword){
      toastr.warning("Veuillez entrer le mot de passe actuel");
    }
    else if(!newPassword){
      toastr.warning("Veuillez entrer le nouveau mot de passe");
    }
    else if(!repeatNewPassword){
      toastr.warning("Veuillez confirmer le nouveau mot de passe");
    }
    else if(newPassword != repeatNewPassword){
      toastr.warning("Veuillez confirmer le même nouveau mot de passe");
    }
    else{

      const la = ladda.create(document.activeElement);

            la.start();

      $.ajax({
        type: "POST",
        url:"/updatePassword",
        data:{
          id:id,
          oldPassword:oldPassword,
          newPassword:newPassword,
          repeatNewPassword:repeatNewPassword
        },
        success: function(data){
          if(data == "GOOD"){

            toastr.success("Votre mot de passe à été modifié !");
          }
          else{
            toastr.warning(data);
          }

          la.stop()
        },
        error:function(){
          toastr.error("Erreur")

          la.stop()
        }
      })
    }

    

  })
  

})