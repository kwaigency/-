function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    Phone: document.getElementById("Phone").value,
    email: document.getElementById("email").value,
      Nationality: document.getElementById("Nationality").value,
    };

  const serviceID = "service_8tofc5l";
  const templateID = "template_j4le769";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("Phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Nationality").value = "";
        console.log(res);
        alert("تم ارسال الرساله سيتم الر عليك في اقرب وقت")

    })
    .catch(err=>console.log(err));

}