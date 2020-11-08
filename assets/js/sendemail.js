function sendMail(contactForm) {
  emailjs.send("gmail", "Rosie", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "project_request": contactForm.projectsummary.value,
    
  })
  .then(
    function(response) {
      console.log("SUCCESS", response)
      document.getElementById("form-reset").reset();
      //location.reload();
    },
    function(error) {
      console.log("FAILED", error);
    },
  );
  return false;
}
 





