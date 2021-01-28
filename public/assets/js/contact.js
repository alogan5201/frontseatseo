function createContactForm() {
	
	
	var form = document.createElement("form");
	
	form.action = "/ajax/email";
	form.method = "post";
	form.className = "contact-form";
	form.onsubmit = function submitEmailForm(form) {
			var obj = new XMLHttpRequest();
			obj.onreadystatechange = function(){
				if(obj.readyState == 4){
					if(obj.status == 200){
						var res = JSON.parse(obj.responseText);
						alert(res.message);
					}
					else{
						alert("XMLHttp status " + obj.status + ": " + obj.statusText);
						
					}
				}
			};
			obj.open("post", form.action, true);
			obj.setRequestHeader("Content-Type", "application/json"); // NOTICE: "application/json"
			obj.send(JSON.stringify({ name: form.name.value, email: form.email.value, message: form.message.value }));
			return false;
		}
	/*  <svg 
	x="0px" 
	y="0px" 
	width="100%" 
	viewBox="0 0 96 96" 
	class="gh-svg gh-svg-bottom" 
	enable-background="new 0 0 96 96"
	>
    <rect width="32" height="4" x="32" y="46" class="gh-svg-rect gh-svg-rect-bottom"></rect>

          </svg>*/

		
	   
	
	var popup = document.createElement("div");
		popup.className = "popup-header";
		var header = document.createElement("h4");
		header.innerHTML = "Get in Touch!";
		popup.appendChild(header);
		let span = document.createElement("span");
	   span.className = "form-svg";
	   
	   let icon = document.createElement("i");
	   icon.setAttribute("class", "fas fa-times");
	   span.appendChild(icon);
	   popup.appendChild(span);
form.appendChild(popup);

	var div = document.createElement("div");
	var input = document.createElement("input");
	input.type = "text";
	input.name = "name";
	input.placeholder = "NAME";
	input.className = "contact-form-input";
	input.autocomplete = "off";
	input.maxLength = 25;
	input.required = true;
	div.appendChild(input);
	form.appendChild(div);
	
	div = document.createElement("div");
	input = document.createElement("input");
	input.type = input.name = "email";
	input.placeholder = "EMAIL";
	input.className = "contact-form-input";
	input.autocomplete = "off";
	input.required = true;
	div.appendChild(input);
	form.appendChild(div);
	
	div = document.createElement("div");
	input = document.createElement("textarea");
	input.name = "message";
	input.placeholder = "MESSAGE";
	input.className = "contact-form-input";
	input.required = true;
	div.appendChild(input);
	form.appendChild(div);
	
	div = document.createElement("div");
	input = document.createElement("button");
	input.name = input.type = "submit";
	input.innerText = "send";
	div.appendChild(input);
	form.appendChild(div);
	
	var myContactContainer = document.createElement("div");
	myContactContainer.className = "my-contact-container";
	
	   
	  
	myContactContainer.appendChild(form);

	div = document.createElement("div");
	div.id = "id-contact-form";
	div.className = "contact-form-container";
	div.appendChild(myContactContainer);
	
	document.body.appendChild(div);
}

(function () {


	if (window.addEventListener) {
		window.addEventListener("load", createContactForm, false);
	} else if (window.attachEvent) {
		window.attachEvent("onload", createContactForm);
	} else {
		window["onload"] = createContactForm;
		
	}
})();

