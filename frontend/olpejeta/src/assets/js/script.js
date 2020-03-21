
// Login hide password

$(document).ready(function(){
  $("#me").click(function() {

    if ($("#pwd").attr("type") == "password"){
      console.log("clicked")
      $("#me").attr("class", "fa fa-eye-slash");
      $("#pwd").attr("type", "text");
    } else {
      $("#me").attr("class", "fa fa-eye");
      $("#pwd").attr("type", "password");
    }
    
  });
})

