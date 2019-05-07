// ------------------ Rubi's javascript code ----------------//
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

  /*---- to disable special requestments checkbox when none is selected ----*/
  const specialrequirements = $(".special");
  $("#none").click(function() {
    if ($(this).prop("checked") == true) {
      specialrequirements.removeAttr("checked");
      specialrequirements.attr("disabled", "disabled");
    } else {
      specialrequirements.removeAttr("disabled");
    }
  });

  /*--- to disable none checkbox when requestments are clicked ----*/

  const none = $("#none");
  $(".special").click(function() {
    if ($(this).prop("checked") == true) {
      none.attr("disabled", "disabled");
    } else {
      none.removeAttr("disabled");
    }
  });
});
