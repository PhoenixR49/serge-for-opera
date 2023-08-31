if (window.sessionStorage.getItem("instance")) {
	document.body.innerHTML = `<iframe src="${window.sessionStorage.getItem("instance")}" frameborder="0"></iframe>`;
} else {
	(() => {
		'use strict';
	  
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll('.needs-validation');
	  
		// Loop over them and prevent submission
		Array.from(forms).forEach(form => {
		  form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
			  event.preventDefault();
			  event.stopPropagation();
			} else {
				const data = new FormData(form);
				
				window.sessionStorage.setItem("instance", data.get("url"));
				document.location.reload();
			}
	
			form.classList.add('was-validated');
		  }, false)
		})
	})()
}