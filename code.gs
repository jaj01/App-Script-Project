function sendEmailOnFormSubmit(e) {
  // Check if the event object is defined
  if (!e) {
    Logger.log('Event object is undefined');
    return;
  }
  
  // Get the submitted form data
  var responses = e.values;
  Logger.log('Responses: ' + responses);

  // Adjust these indexes based on your form's structure
  var emailAddressIndex = 1; // Adjust based on your form's structure
  var nameIndex = 2; // Adjust based on your form's structure

  // Extract email address and name from the responses
  var emailAddress = responses[emailAddressIndex];
  var name = responses[nameIndex];

  Logger.log('Email: ' + emailAddress + ', Name: ' + name); // Log the extracted email and name

  // Email subject and body
  var subject = "Thank you for your response!";
  var whatsappLink = "https://chat.whatsapp.com/JLkaWrBiLQDFEaBPkkPlWE";
  var body = "Dear " + name + ",\n\nThank you for filling out our form. We have received your response.\n\n You will be notified about the time and venue for the Seminar via the WhatsApp Group.\n\nJoin the WhatsApp group:"+whatsappLink+" \n\nBest regards,\nIAESTE";

  // Send the email
  MailApp.sendEmail(emailAddress, subject, body);
  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    body: body,
    replyTo: 'joshika04.work@gmail.com' // Replace with your reply-to email
  });
}

function setupTrigger() {
  // Replace 'YOUR_FORM_ID' with your actual Form ID
  var formId = '1p8PO2IQBWlixyBTnRKFGmz5HZsLzVjt47u4E9H7DfkM';
  var form = FormApp.openById(formId);

  // Check if the form object is retrieved correctly
  if (!form) {
    Logger.log('Failed to open form with ID: ' + formId);
    return;
  }

  // Create a trigger for when the form is submitted
  ScriptApp.newTrigger('sendEmailOnFormSubmit')
    .forForm(form)
    .onFormSubmit()
    .create();
}
