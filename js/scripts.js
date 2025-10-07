/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("year").innerHTML = new Date().getFullYear();

      //use ajax to submit form to https://formsubmit.co/ajax/2c0ff9022327706cd6181c8fafa99eb6/
      $(".contact-form").submit(function (e) {

        // get email
        var email = $("#email").val();
        // check if email is valid using api
        $.get(
          "https://api.trumail.io/v2/lookups/json?email=" + email,
          function (data) {
            if (data.deliverable == false) {
              Swal.fire({
                title: "Invalid Email",
                html: "Please enter a valid email address.",
                icon: "error",
              });
              e.preventDefault();
            }
          }
        );
        e.preventDefault();
        var form = $(this);
        var formdata = form.serialize();
        // show submitting message
        Swal.fire({
          title: "Submitting...",
          html: "Please wait a moment...",
          didOpen: () => {
            Swal.showLoading();
          },
        });
      
        
        // disable the submit button
        $("#submit-form").attr("disabled", true);
     $("body").css("overflow", "hidden");
        
        $.ajax({
          type: "POST",
          url: "https://formsubmit.co/ajax/2c0ff9022327706cd6181c8fafa99eb6",
          data: formdata,
          success: function () {
            Swal.fire({
              title: "Sent Successful",
              html: "I will get back to you soon.",
              icon: "success",
            });
            form.trigger("reset");
            
            // enable the submit button
            $("#submit-form").attr("disabled", false);
            // enable scrolling
            $("body").css("overflow", "auto");
          },
          error: function () {
           Swal.fire({
              title: "Something went wrong",
              html: "Please mail me at <strong>dnischal11@gmail.com</strong>",
              icon: "error",
              showCloseButton: true,
            });
            // enable scrolling
            $("body").css("overflow", "auto");
          },
        });
      });
          $("a").each(function () {
        if ($(this).attr("href") == "#") {
          //cannot be clicked
          $(this).click(function (e) {
            e.preventDefault();
          });

          // color
          $(this).css("background-color", "#696969");
          //cursor style
          $(this).css("cursor", "not-allowed");
        }
      });
