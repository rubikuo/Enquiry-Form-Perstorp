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
  // const specialrequirements = $(".special");
  // $("#none").click(function() {
  //   if ($(this).prop("checked") === true) {
  //     specialrequirements.removeAttr("checked");
  //     specialrequirements.attr("disabled", "disabled");
  //   } else {
  //     specialrequirements.removeAttr("disabled");
  //   }
  // });

  /*--- to disable none checkbox when requestments are clicked ----*/
  // var $others = $('input[name="meh"]').not('#omgwtfbbq')
  // $('#omgwtfbbq').change(function () {
  //     if (this.checked) {
  //         $others.prop('checked', false)
  //     }
  // });
  // $others.change(function () {
  //     if (this.checked) {
  //         $('#omgwtfbbq').prop('checked', false)
  //     }
  // })


   
  $("#none").change(function () {
        if (this.checked) {
          $(".special").prop("checked",false);
        }
  });
   $(".special").change(function () {
     if (this.checked) {
       $("#none").prop("checked",false);
     }
   });

});

/*--- to disable the submit button when the check box is not selected ---*/

const submitBtn = $("#submit-btn");
submitBtn.attr("disabled", "disabled");

$('input[type="checkbox"]').click(function() {
  if ($(this).prop("checked") == true) {
    submitBtn.removeAttr("disabled");
  } else {
    submitBtn.attr("disabled", "disabled");
  }
});
ve