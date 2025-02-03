



document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = navLink.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });


document.getElementById('contactForm').addEventListener('submit', function(event) {
    
    event.preventDefault(); // Prevent default form submission

    // Get form data
    function deleteInput(){
        var name = document.getElementById('userName').value = "";
        var email = document.getElementById('userEmail').value = "";
        var message = document.getElementById('message-text').value = "";
    
     
     
      }
    
    

   
    var name = document.getElementById('userName').value;
    var email = document.getElementById('userEmail').value;
    var message = document.getElementById('message-text').value;
    

    // Compose message to be sent to Telegram
    var message = "New Contact Form Submission:\n\nName: " + name + "\nEmail: " + email  +  "\nMessage: " + message;
  
    // Send message to Telegram bot
    var botToken = '7066891021:AAHFaTMJrm69OP-sVKxxsqQtqhzbdltXyzU';
    var chatId = '7090988466';
    var telegramApiUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage";
    var data = {
        chat_id: chatId,
        text: message
    };
  
    fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send message to Telegram bot.');
        }
        console.log('Message sent successfully to Telegram bot.');
        // Optionally, you can redirect the user to a thank you page or display a success message
        document.getElementById('center').style.opacity = '1';
        setTimeout(function() {
            document.getElementById('center').style.opacity = '0';
        }, 5000);
        deleteInput()
      
    })
    .catch(error => {
        console.error('Error:', error);
    });
  });


