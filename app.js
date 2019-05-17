// ------------------ javascript code ----------------//

/* Request 18 ---- submit the form sending an email to the project owner ------*/
$(() => {
  var ourform = $("form");
  ourform.submit(e => {
    e.preventDefault(); 

  var service_id = "adrienn_timko_gmail_com";
  var template_id = "enquiry";
  let temp_params = {
    from_name: $('#username').val(),
    from_email: $('#useremail').val(),
    transportType: $('#transport-type').val(),
    //if bulk or both than special: $('#form-check-input').val()
    //how to define request4 (quantity and frequency) here, like this? (see below)
    quantity: $('#qty-input').val(),
    // quantityOrfrequent: $("#truckOrTon").on("change", function(){
    //   $("#truckOrTon : selected").text();
    // }),
    current_load: $('#quoteType1').val(),
    when_load: $('#calender').val(), //if current load, than calender as well OR if estimate don't show current_load and when_load
    estimate: $('#quoteType2').val(),
    product: $('#product-description').val(),
    from_place: $('.transport-from').val(),
    to_place: $('.transport-to').val(),
    remarks: $('#remarks').val(),
  }

  console.log(temp_params);
  var data = {
    service_id: service_id,
    template_id: template_id,
    user_id: 'user_HHBliVsX4LsToyTawkEQm',
    template_params: {
      'from_name': temp_params.from_name,
      'from_email': temp_params.from_email,
      // 'quantityOrfrequent': temp_params.quantityOrfrequent,
      'transportType': temp_params.transportType,
      'quantity': temp_params.quantity,
      'current_load': temp_params.current_load,
      'when_load': temp_params.when_load,
      'estimate': temp_params.estimate,
      'product': temp_params.product,
      'from_place': temp_params.from_email,
      'to_place': temp_params.to_place,
      'remarks': temp_params.remarks
    }
  };
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
    alert('Your mail is sent!');
  }).fail(function(error) {
    console.log('Oops... ' + JSON.stringify(error));
  });
  ourform.find("button").text("Sending...");
  
});

    
 

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
      $("#calender").val("");
    }
  });

  /*---- request 17 countryAPI ----- */
  getCountriesAndCities();

  // /*--- request 18 to disable the submit button when the specail check box is not selected ---*/
  // const submitBtn = $("#submit-btn");
  // submitBtn.prop("disabled", true);
  // $("#none").change(function () {
  //   if (this.checked) {
  //     submitBtn.prop("disabled", false);
  //   } 
  // });
  
  // $(".specail").change(function() {
  //   if (this.checked) {
  //     submitBtn.prop("disabled", false);
  //   } 
  // });
  // $("#packed").change(function() {
  //   if (this.checked) {
  //     submitBtn.prop("disabled", false);
  //   }
  // });
});
/*----- request 17 countryAPI  ---*/
function getCountriesAndCities() {
  $.getJSON("https://restcountries.eu/rest/v2/all", function(data) {
    $.each(data, function(i, item) {
      $("#countries").append(
        "<option id='" + item.alpha2Code + "' value='" + item.name + "'>"
      );
    });
  });
}