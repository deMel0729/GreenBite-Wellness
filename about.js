   window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
  
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // toggle 'scrolled' class as soon as scrollY > 0
  header.classList.toggle("scrolled", window.scrollY > 0);
});
 
 
 
 // Form validation and submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(error => {
                error.style.display = 'none';
            });
            
            let isValid = true;
            
            // Validate name
            if (name.length < 2) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            // Validate message
            if (message.length < 10) {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Store in localStorage
                const feedback = {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString(),
                    id: Date.now()
                };
                
                // Get existing feedback or create new array
                let allFeedback = JSON.parse(localStorage.getItem('greenbite_feedback')) || [];
                allFeedback.push(feedback);
                localStorage.setItem('greenbite_feedback', JSON.stringify(allFeedback));
                
                // Show confirmation message
                document.getElementById('confirmationMessage').style.display = 'block';
                
                // Reset form
                document.getElementById('contactForm').reset();
            }
        });

        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isActive = this.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    this.classList.add('active');
                    answer.classList.add('active');
                }
            });
        });

        // Close confirmation message
        function closeConfirmation() {
            document.getElementById('confirmationMessage').style.display = 'none';
        }

        // Close confirmation on outside click
        document.getElementById('confirmationMessage').addEventListener('click', function(e) {
            if (e.target === this) {
                closeConfirmation();
            }
        });



 