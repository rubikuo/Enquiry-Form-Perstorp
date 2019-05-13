// ------------------ Rubi's javascript code ----------------//
$(() => {
  /* Request 11 ---- to show or hide special requirment ------*/

  $("#bulk").click(() => {
    $("#ifBulk").css("display", "block");
  });

  $("#packed").click(() => {
    $("#ifBulk").css("display", "none");
  });

  $("#both").click(() => {
    $("#ifBulk").css("display", "block");
  });

  /* ----- request 12 if temperatue is required ---*/

  $("#temperature").val(""); 

  $("#special2").change(function() {
    if (this.checked) {
      $("#temperature").prop("required", true);
    } else {
      $("#temperature").prop("required", false);
      $("#temperature").val("");
    }
  });

  $("#temperature").change(function() {
    if ($(this).val().length > 0) {
      $("#special2").prop("checked", true);
      $(this).prop("required", true);
    }
  });

  /*--- request 13 to disable special requirement checkbox when none is clicked ----*/

  $("#none").change(function() {
    if (this.checked) {
      $(".special").prop("checked", false);
    }
  });

  /*--- request 13 to disable none checkbox when requestments are clicked ----*/

  $(".special").change(function() {
    if (this.checked) {
      $("#none").prop("checked", false);
    }
  });

  /*----- request 15 if current load is clicked, datepicker is required ------------*/

  $("#calender").prop("required", true); // its to match the default setting

  $("#quoteType1").change(function() {
    if (this.checked) {
      $("#calender").prop("required", true);
    }
  });

  $("#quoteType2").change(function() {
    if (this.checked) {
      $("#calender").prop("required", false);
    }
  });

  /*--- to disable the submit button when the check box is not selected ---*/
  // const submitBtn = $("#submit-btn");
  // submitBtn.prop("disabled", true);

  // $(".specail").change(function() {
  //   if (this.checked) {
  //     submitBtn.prop("disabled", false);
  //   } else {
  //     submitBtn.prop("disabled", true);
  //   }
  //   $("#packed").change(function () {
  //     if (this.checked) {
  //       submitBtn.prop("disabled", false);
  //     }

  // });
});
