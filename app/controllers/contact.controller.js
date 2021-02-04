// ****************************************************************************
// Copyright 2021 David L. Whitehurst
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
//
// ****************************************************************************

const Contact = require("../models/contact.model.js");

// Create and Save a new Contact
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  //console.log(req.body);

  // Create a Contact
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email
  });

  // Save Contact in the database
  Contact.create(contact, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Contact."
      });
    else {
      res.status(201); // created (success)
      res.location(`/v1/contacts/:${data.id}`); // Sends location response header upon resource creation
      res.send(''); // empty body
    }
  });
};

// Retrieve all Contacts from the database.
exports.findAll = (req, res) => {
  Contact.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contacts."
      });
    else res.send(data);
  });
};

// Find a single Contact with a contactId
exports.findOne = (req, res) => {
  Contact.findById(req.params.contactId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Contact with id ${req.params.contactId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Contact with id " + req.params.contactId
        });
      }
    } else res.send(data);
  });
};

// Update a Contact identified by the contactId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Contact.updateById(
    req.params.contactId,
    new Contact(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Contact with id ${req.params.contactId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Contact with id " + req.params.contactId
          });
        }
      } else {
        res.status(204); // no content (success)
        res.send(''); // empty body
      }
    }
  );
};

// Delete a Contact with the specified contactId in the request
exports.delete = (req, res) => {
  Contact.remove(req.params.contactId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Contact with id ${req.params.contactId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Contact with id " + req.params.contactId
        });
      }
    } else {
      res.status(204); // no content (success)
      res.send(''); // empty body
    }
  });
};

// Delete all Contacts from the database.
exports.deleteAll = (req, res) => {
  Contact.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all contacts."
      });
    else {
      res.status(204); // no content (success)
      res.send(''); // empty body
    }
  });
};
