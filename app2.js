//--------------Ada's javascript code ---------------//

//------Request 12----------------------------------------//
//-------------------------------------------------------//
//-----request: if temperature checkbox is clicked (id="special2"), then the input ˚C is required (id="temperature"----//
//-----the input formate must be number between 0 and 200 ------------------//

$(() => {
    $('#special2').change(function() {
         if (this.checked) {
             $('#temperature').prop('required',true); //add required to #temperature, if special2 checkbox is checked
         } else if (('#temperature').value) {
           (this).prop('checked', true); //should check the box, but it doesn't check
         }
    });
 });


