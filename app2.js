//--------------Ada's javascript code ---------------//

//------Request 12----------------------------------------//
//-------------------------------------------------------//
//-----request: if temperature checkbox is clicked (id="special2"), then the input ˚C is required (id="temperature"----//
//-----the input formate must be number between 0 and 200 ------------------//

//----solution1: if (special2 is clicked) then { 0 <= #temperature <= 200 } -------//
//---------------else if (temperature is not empty && special2 NOT clicked then { message on the screen: ''} or set it to checked----//

$(() => {
    $('#special2').change(function() { 
         if (this.checked) {
             $('#temperature').prop('required',true); //add required to #temperature, if special2 checkbox is checked
         } else if (('#temperature').value.length !== 0) {
            alert("message") ;//not working
            $(this).prop('checked', true); //should check the box, but it doesn't check
         }
    });
});


/* attr (jquery 1.6), prop, function(e) e.target.checked, isNumeric, is(':checked) = it just checks if it is true, val() instead of value, return true, else if (('#temperature').value.length !== 0) 
NOT CHECKING; IF THERE IS A VALUE:

$('#special2').change(function() { 
         if (this.checked) {
             $('#temperature').prop('required',true); //add required to #temperature, if special2 checkbox is checked
         } else if (('#temperature').value) {
             $(this).prop('checked',true); //should check the box, but it doesn't check
         }
    });

{
$('#special2').change(function() { 
         if (this.checked) {
             $('#temperature').prop('required',true); //add required to #temperature, if special2 checkbox is checked
         } else if (('#temperature').value) {
            $(this).prop('checked',true);
         }
    });
NOT CHECKING; IF THERE IS A VALUE:
{
    $('#special2').change(function(e) { 
         if (e.target.checked) {
             $('#temperature').prop('required',true); //add required to #temperature, if special2 checkbox is checked
         } else if (('#temperature').value) {
            $(e.target).prop('checked',true);
         }
    });
   
it doesn't work either with attr
 EMPTY STRING ALWAYS FALSY!!!
   else if (('#temperature') !== '' && $('#special2').prop('checked',false) {
             $('.error-message').text('Requested unloading temperature is not selected! Please select it.').fadeIn();
         }

   if (('#special2').click()){
            0 <= ('#temperature') <= 200;
        } else if ('#temperature' !== '' && ('#special2').not(click()) ) {
            alert('Requested unloading temperature is not selected! Please select it.');
        }*/
        
//----or solution2: if special2 NOT clicked { can't fill in temperature } ------//
//--------------esle if special2 is clicked { temperature must be -----------//
//-----------------------------a number between 0 and 200 } ----&& ()-----('#special2').not(click())?-----//