function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    nam: document.getElementById("nationality").value,
    email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };

  const serviceID = "service_8tofc5l";
  const templateID = "template_j4le769";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("nationality").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        console.log(res);
        alert("تم ارسال الرساله سيتم الر عليك في اقرب وقت")

    })
    .catch(err=>console.log(err));

}