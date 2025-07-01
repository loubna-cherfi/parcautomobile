  $(document).ready( function () {



        $("select").select2();

        $('#myTable').DataTable({
          lengthMenu: [
            [15, 25, 50, -1],
            [15, 25, 50, 'All'],
        ],
          
          "autoWidth": false

      });
            

        $("body").on("click", ".activateUser" , function(){
          var id = $(this).attr("data-id");

          $.ajax({
            url: "activateUser",
            method: "POST",
            data:{
                idUser: id,
            },
            success: function(data){
              if ( $.fn.dataTable.isDataTable("#myTable") ) {
                $('#myTable').DataTable().clear().destroy();
            }

            $("#listUsers").html(data.html);

            $("#myTable").DataTable({
              lengthMenu: [
                [15, 25, 50, -1],
                [15, 25, 50, 'All'],
            ],
              "autoWidth": false
            })

            toastr.success(data.message);
              }
            })
          
        })

        $("body").on("click", ".deleteUser" , function(){
          var id = $(this).attr("data-id");


          $.ajax({
            url: "deleteUser",
            method: "POST",
            data:{
                idUser: id,
            },
            success: function(data){
              if ( $.fn.dataTable.isDataTable("#myTable") ) {
                $('#myTable').DataTable().clear().destroy();
            }

            $("#listUsers").html(data.html);

            $("#myTable").DataTable({
              lengthMenu: [
                [15, 25, 50, -1],
                [15, 25, 50, 'All'],
            ],
              "autoWidth": false
            })

            $("#closeAddUser").click();
            toastr.success(data.message);
              }
            })
          
        })

        

        $(".saveAddUser").on("click", function(){

          var username = $("#username").val();
          var nom = $("#nom").val();
          var password = $("#password").val();
          var routeName = $("#routeName").val();
          var status = $('input[name="status"]:checked').val();
          var profession = $("#profession").val();

          if(password == ""){
              $("#password").attr('style', "border: 1px solid #eb0000 !important");
          }
          else{
              $("#password").attr('style', "border: 1px solid #gray !important");

          }
          if (username == ""){
              $("#username").attr('style', "border: 1px solid #eb0000 !important");

          }
          else{
              $("#username").attr('style', "border: 1px solid lightgray  !important");

          }
          if (nom == ""){
              $("#name").attr('style', "border: 1px solid #eb0000 !important");

          }
          else{
              $("#name").attr('style', "border: 1px solid lightgray  !important");

          }
          if (profession == ""){
              $("#select2-profession-container").parent().css("border","1px solid #eb0000");

          }
          else{
              $("#select2-profession-container").parent().css("border","1px solid lightgray ");

          }
          if(password != "" && username != "" && nom != "" && profession != ""){

            const la = ladda.create(document.activeElement);

            la.start();

                  $.ajax({
                  url: "addUser",
                  method: "POST",
                  data:{
                      username:username,
                      nom:nom,
                      password:password,
                      status:status,
                      profession:profession,
                      routeName:routeName,
                  },
                  success: function(data){
                    if(data != "USER ALREDY EXIST"){

                      if ( $.fn.dataTable.isDataTable("#myTable") ) {
                          $('#myTable').DataTable().clear().destroy();
                      }

                      $("#listUsers").html(data);

                      $("#myTable").DataTable({
                        lengthMenu: [
                          [15, 25, 50, -1],
                          [15, 25, 50, 'All'],
                      ],
                        "autoWidth": false
                      })

                      $("#closeAddUser").click();
                      toastr.success("Utilisateur ajouté avec success")


                      la.stop();


                    }
                    else{
                      toastr.error("Le nom d'utilisateur déja exist !")
                      la.stop();
                    }
                  }
                  
              })
          }

      })

      $("body").on("click" , ".updateBtn", function(){

        var idUser = $(this).attr("id").slice(13);
        $.ajax({
          url: "findUser",
          method: "POST",
          data:{
              idUser: idUser,
          },
          success: function(data){
            $("#idUser").val(data.id)
            $("#usernameUpd").val(data.username)
            $("#nomUpd").val(data.nom)
            $("#routeNameUpd").val(data.route)
            if(data.status){
              $("#active").prop("checked", "checked")
            }
            else{
              $("#desactive").prop("checked", "checked")

            }
            $("#professionUpd").val(data.profession).trigger("change")

            $("#updateUser").modal('show');
          }
        })
      })

        $(".saveUpdateUser").on("click", function(){

            var idUser = $("#idUser").val();
            var username = $("#usernameUpd").val();
            var nom = $("#nomUpd").val();
            var password = $("#passwordUpd").val();
            var routeName = $("#routeNameUpd").val();
            var status = $('input[name="statusUpd"]:checked').val();
            var profession = $("#professionUpd").val();

            if(password == ""){
                $("#passwordUpd").attr('style', "border: 1px solid #eb0000 !important");
            }
            else{
                $("#passwordUpd").attr('style', "border: 1px solid #gray !important");

            }
            if (username == ""){
                $("#usernameUpd").attr('style', "border: 1px solid #eb0000 !important");

            }
            else{
                $("#usernameUpd").attr('style', "border: 1px solid lightgray  !important");

            }
            if (nom == ""){
                $("#nameUpd").attr('style', "border: 1px solid #eb0000 !important");

            }
            else{
                $("#nameUpd").attr('style', "border: 1px solid lightgray  !important");

            }
            if (profession == ""){
                $("#select2-professionUpd-container").parent().css("border","1px solid #eb0000");

            }
            else{
                $("#select2-professionUpd-container").parent().css("border","1px solid lightgray ");

            }
            if(password != "" && username != "" && nom != "" && profession != ""){

              const l = ladda.create(document.activeElement);

              l.start();

                    $.ajax({
                    url: "updateUser",
                    method: "POST",
                    data:{
                        idUser: idUser,
                        username:username,
                        nom:nom,
                        password:password,
                        status:status,
                        profession:profession,
                        routeName:routeName,
                    },
                    success: function(data){
                      if(data != "USER ALREDY EXIST"){

                        if ( $.fn.dataTable.isDataTable("#myTable") ) {
                            $('#myTable').DataTable().clear().destroy();
                        }

                        $("#listUsers").html(data);

                        $("#myTable").DataTable({
                          lengthMenu: [
                            [15, 25, 50, -1],
                            [15, 25, 50, 'All'],
                        ],
                          "autoWidth": false
                        })

                        $("#updateUser").modal('hide');
                        $("#closeUpdateUser").click();
                        toastr.success("Utilisateur modifié avec success")

                        l.stop();
                      }
                      else{
                        toastr.error("Le nom d'utilisateur déja exist !")
                        l.stop();
                      }
                    },
                    error: function(){
                      l.stop();
                    }
                    
                    
                })
            }

        })


    } );
