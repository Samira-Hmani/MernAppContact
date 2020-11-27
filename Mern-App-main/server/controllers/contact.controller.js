const Contact = require("../Models/Contact");

exports.addContact = async (req, res) => {
  const { name, lastName, phone, email } = req.body;

  try {
    const newContact = new Contact({
      name,
      lastName,
      phone,
      email,
    });

    newContact.save(newContact);
    res.status(201).json({ msg: "Contact Added Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
};

exports.showContacts = async (req, res) => {
  try {
    const getContacts = await Contact.find();

    res.status(201).json(getContacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
};

exports.editContact = async (req, res) => {
  const { name, lastName, phone, email } = req.body;
  const { _id } = req.params;
  console.log(req.params);

  try {
    const updatedContact = await Contact.findOneAndUpdate(
      { _id },
      { $set: req.body }
    );
    res.send(updatedContact);
    res.status(201).json({ msg: "contact updated" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ errors: error });
  }
};

exports.deleteContact = async (req, res) => {
  const { _id } = req.params;

  try {
    const deletedContact = await Contact.findOneAndDelete({ _id });

    res.send(deletedContact);
    res.status(201).json({ msg: "Contact deleted with succes" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
