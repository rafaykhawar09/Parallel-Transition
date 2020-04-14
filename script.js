
$(document).ready(()=>{

     let flag = 0; 

     $(".switch-btn").click(()=>{

          if(flag === 0){
               $(".slider").addClass("slider-after");
               
               $("#login-form")
               .addClass("moveFormLeft")
               .addClass("hide")
               .removeClass("show");

               $("#sign-up-msg")
               .addClass("moveMsgRight")
               .addClass("hide")
               .removeClass("show");
               
               $("#login-msg")
               .addClass("moveMsgLeft")
               .addClass("show");

               $("#sign-up-form")
               .addClass("moveFormRight")
               .addClass("show");

               flag = 1;
          }
          else{
               $(".slider").removeClass("slider-after");
               
               $("#login-msg")
               .removeClass("show")
               .addClass("hide")
               .removeClass("moveMsgLeft");

               $("#sign-up-form")
               .removeClass("show")
               .addClass("hide")
               .removeClass("moveFormRight");


               $("#login-form")
               .removeClass("hide")
               .addClass("show")
               .removeClass("moveFormLeft");

               $("#sign-up-msg")
               .removeClass("hide")
               .addClass("show")
               .removeClass("moveMsgRight");

               flag = 0;
          }
     })
});
