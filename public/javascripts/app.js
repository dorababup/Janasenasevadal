
$(function(){

    $("#register").on('click', function(event){
        event.preventDefault();
        var fullname        = $("#fullname").val();
        var mobile          = $("#mobile").val();
        var email           = $("#email").val();
        var constituency    = $("#constituency").val();
        var gender          = $('input[name="gender"]:checked').val(); 
        var calorie         = $('input[name="calorie"]:checked').val(); 
        var salt            = $('input[name="salt"]:checked').val();
        var terms           = $('input[name="terms"]:checked').val();

        if(!fullname){ 
            $("#msgDiv").show().html("Please enter Full Name.");
        }else if(!gender){ 
            $("#msgDiv").show().html("Please select Gender.");
        }else if(!mobile){ 
            $("#msgDiv").show().html("Please enter Mobile.");
        }else if(!constituency){ 
            $("#msgDiv").show().html("Please select constituency.");
        }else if (!terms){
            $("#msgDiv").show().html("Please agree to terms and conditions.");
        }
        else{ 
            $.ajax({
                url: "/register",
                method: "POST",
                data: { name: name, surname: surname, email: email, mobile: mobile, constituency: constituency, cpassword: cpassword, dob: dob, country: country, gender: gender, calorie:calorie ,salt: salt, terms: terms }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });
});