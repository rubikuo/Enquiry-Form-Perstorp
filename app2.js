//--------------Ada's javascript code ---------------//

//------Request 12----------------------------------------//
//-------------------------------------------------------//
//-----request: if temperature checkbox is clicked (id="special2"), then the input ˚C is required (id="temperature"----//
//-----the input formate must be number between 0 and 200 ------------------//

$(() => {
  $("#special2").click(function() {
    if (this.checked) {
      $("#temperature").prop("required", true); //add required to #temperature, if special2 checkbox is checked
    }
  });

  $("#special2").prop("required", false);

  // if the input value is filled out, the checkbox is required. 
  // problem is if delete input value, required still there ( need to solve) 
  $("#temperature").change(function() {
    $("#special2").prop("required", true);
  });

});
