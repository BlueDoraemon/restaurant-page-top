import { div,img,dropItIn } from "..";

function _createContactForm() {
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
  
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageTextarea);
    form.appendChild(submitButton);
  
    return form;
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



    return [contactForm, contactInfo, map];
};


function _createContactInfo() {
  const container = div('contactInfo');

  const phoneElement = document.createElement('h2');
  const hoursElement = document.createElement('h2');
  const locationElement = document.createElement('h2');
  
  // Update contact information
  phoneElement.textContent = '123-456-7890';
  hoursElement.textContent = '9:00 AM - 5:00 PM';
  locationElement.textContent = '123 Main St, Narnia';

  dropItIn([phoneElement, hoursElement, locationElement], container)
  
  return container;
  
}

function _createMap(){
  // const mapElement = document.getElementById('map');
}


// Initialize and display the map
function initMap() {
  // Replace with your map API key
  const apiKey = 'YOUR_MAP_API_KEY';

  // Replace with the latitude and longitude of your location
  const latitude = 123.456;
  const longitude = 78.901;

  const map = new google.maps.Map(mapElement, {
    center: { lat: latitude, lng: longitude },
    zoom: 15
  });

  const marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    title: 'Narnia Cafe'
  });
}

// Load the Google Maps API asynchronously
function loadScript() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);
}

loadScript();