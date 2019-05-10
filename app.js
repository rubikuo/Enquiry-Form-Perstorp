// ------------------ Rubi’s javascript code ----------------//
$(() => {
  /*---- to show or hide special requirment ------*/
 
  $("#bulk").click(() => {
    $("#ifBulk").css("display", "block");
  });
 
  $("#packed").click(() => {
    $("#ifBulk").css("display", "none");
  });
 
  $("#both").click(() => {
    $("#ifBulk").css("display", "block");
  });
 
 
  /*--- to disable special requirement checkbox when none is clicked ----*/
 
  $("#none").change(function() {
    if (this.checked) {
      $(".special").prop("checked", false);
    }
  });
 
  /*--- to disable none checkbox when requestments are clicked ----*/
 
  $(".special").change(function() {
    if (this.checked) {
      $("#none").prop("checked", false);
    }
  });
 
  /*--- to disable the submit button when the check box is not selected ---*/
  const submitBtn = $("#submit-btn");
  submitBtn.attr("disabled", "disabled");
 
  $('input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") === true) {
      submitBtn.removeAttr("disabled");
    } else {
      submitBtn.attr("disabled", "disabled");
    }
  });
 });