function emailSend() {

  Email.send({ 
    Host: "smtp.elasticemail.com",
    Username: "almedinolluri0@gmail.com",
    Password: "55D4DF805617132F6B7376DB3C2B892A8F65",
    To: 'almediinolluri@gmail.com',
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "messeagebody"
  }).then(
    message => alert(message)
  );
}

const sidebar = document.querySelector('.sidebar');

function hideSidebar() {
  sidebar.style.display = 'none'
}

function showSidebar() {
  sidebar.style.display = 'flex'
}
