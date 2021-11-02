$("#submit-form").submit(function(e) {
	e.preventDefault();
	var name = $("#name").val();
	var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
	
	if(name == "" || email == "" || subject == "" || message == "") {
		$("#error_message").show().html("All Fields are Required");
        setTimeout(function() {
            $("#error_message").fadeOut("slow");
        }, 1000 );
	} else {
		$("#error_message").html("").hide();
		$.ajax({
			url: "https://script.google.com/macros/s/AKfycby2_9icwXKNXkZl4upPJ97zVzhVKvD9vCHhebIN-aUA4lW954mm5Ke9CpE-AqkFElpa/exec",
			data:$("#submit-form").serialize(),
            method:"post",
			success: function(response){
				$('#success_message').fadeIn().html("Message Send successfully");
				setTimeout(function() {
					$('#success_message').fadeOut("slow");
				}, 2000 );
                $("#submit-form")[0].reset();
			}
		});
	}
})