import { div,img,dropItIn } from "..";

function _createContactForm() {
    const formName = document.createElement('h2');
    formName.textContent = 'Message Us';

    const form = document.createElement('form');
    form.id = 'contact-form';
  
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
  
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
  
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.name = 'message';
    messageTextarea.required = true;
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send';
    
    
    const _name = dropItIn([nameLabel,nameInput], div('name'));
    const _email = dropItIn([emailLabel,emailInput], div('email'));
    const _message = dropItIn([messageLabel,messageTextarea], div('message'));
    dropItIn([_name,_email,_message,submitButton],form);
  
    return dropItIn([formName,form], div('form'));
  }


export function renderContact(){

    const contactForm = _createContactForm();
    const contactInfo = _createContactInfo();
    const map = ''; //tag

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
    
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
    
      // Perform form validation and submission logic here // tag
      // For simplicity, let's just log the form data to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    
      // Reset the form fields
      contactForm.reset();
    });



    return [contactInfo, contactForm];
};


function _createContactInfo() {
  const container = div('contactInfo');

  const phoneTitle = document.createElement('h2');
  const hoursTitle = document.createElement('h2');
  const locationTitle = document.createElement('h2');

  phoneTitle.textContent = 'Phone Number:';
  hoursTitle.textContent = 'Hours:';
  locationTitle.textContent = 'Location:';

  const phoneElement = document.createElement('h3');
  const hoursElement = document.createElement('h3');
  const locationElement = document.createElement('h3');

    // Update contact information
  phoneElement.textContent = '123-456-7890';
  hoursElement.textContent = 'Mon - Fri 9:00 AM - 5:00 PM';
  locationElement.textContent = '123 Main St, Narnia';

  
  const phone = dropItIn([phoneTitle,phoneElement], div('info'));
  const hours = dropItIn([hoursTitle,hoursElement], div('info'));
  const location = dropItIn([locationTitle,locationElement], div('info'));
  


  dropItIn([phone, hours, location], container);
  
  return container;
  
}
