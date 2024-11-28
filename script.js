document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enrollForm");
  
    // Form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const studentName = document.getElementById("studentName").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const qualification = document.getElementById("qualification").value.trim();
      const basicCourses = document.getElementById("basicCourses").value;
      const frontendCourses = document.getElementById("frontendCourses").value;
      const backendCourses = document.getElementById("backendCourses").value;
  
      if (
        !studentName ||
        !phone ||
        !email ||
        !qualification ||
        !gender ||
        !address ||
        (!basicCourses && !frontendCourses && !backendCourses)
      ) {
        alert("Please fill in all required fields and select at least one program.");
        return;
      }
  
      if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Enter a valid email address.");
        return;
      }
  
      alert(
        `Enrollment Successful!\n\nStudent Name: ${studentName}\nPhone: ${phone}\nEmail: ${email}\nGender: ${gender}\nAddress: ${address}\n\nSelected Programmes:\n- Basic: ${basicCourses || 'None'}\n- Frontend: ${frontendCourses || 'None'}\n- Backend: ${backendCourses || 'None'}`
      );
  
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Fquajxumpmr2NDqrH"); // Replace with your EmailJS public key
  
    const form = document.getElementById("enrollForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const studentName = document.getElementById("studentName").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const qualification = document.getElementById("qualification").value.trim();
      const basicCourses = document.getElementById("basicCourses").value || "None";
      const frontendCourses = document.getElementById("frontendCourses").value || "None";
      const backendCourses = document.getElementById("backendCourses").value || "None";
  
      if (
        !studentName ||
        !phone ||
        !email ||
        !qualification ||
        (!basicCourses && !frontendCourses && !backendCourses)
      ) {
        alert("Please fill in all required fields and select at least one program.");
        return;
      }
  
      if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Enter a valid email address.");
        return;
      }
  
      const emailData = {
        student_name: studentName,
        phone: phone,
        email: email,
        qualification: qualification,
        basic_courses: basicCourses,
        frontend_courses: frontendCourses,
        backend_courses: backendCourses,
      };
  
      // Sending email using EmailJS
      emailjs
        .send("service_431ennj", "template_j41nkcd", emailData)
        .then(
          function (response) {
            alert(
              `Enrollment Successful!\n\nStudent Name: ${studentName}\nPhone: ${phone}\nEmail: ${email}\n\nSelected Programmes:\n- Basic: ${basicCourses}\n- Frontend: ${frontendCourses}\n- Backend: ${backendCourses}`
            );
            form.reset();
          },
          function (error) {
            alert("Failed to send email. Please try again later.");
            console.error("EmailJS Error: ", error);
          }
        );
    });
  });
    