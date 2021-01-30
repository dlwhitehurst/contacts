module.exports = app => {
  const contacts = require("../controllers/contact.controller.js");

  // Create a new Contact
  app.post("/v1/contacts", contacts.create);

  // Retrieve all Contacts
  app.get("/v1/contacts", contacts.findAll);

  // Retrieve a single Contact with contactId
  app.get("/v1/contacts/:contactId", contacts.findOne);

  // Update a Contact with contactId
  app.put("/v1/contacts/:contactId", contacts.update);

  // Delete a Contact with contactId
  app.delete("/v1/contacts/:contactId", contacts.delete);

  // Delete all contacts
  app.delete("/v1/contacts", contacts.deleteAll);
};
