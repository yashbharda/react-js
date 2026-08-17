import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("contacts");
    return saveContacts ? JSON.parse(saveContacts) : [];
  });
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const nameInputRef = useRef(null);

  const addContact = () => {
    if (!name || !phone) {
      setError("Please enter name and phone");
      return;
    }

    if (phone.length !== 10) {
      setError("Phone mumber must be 10 digits");
    }
    const newContacts = {
      id: Date.now(),
      name: name,
      phone: phone,
    };
    setError("");
    setContacts([...contacts, newContacts]);
    setName("");
    setPhone("");
    nameInputRef.current.focus();
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const searchContacts = useCallback(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [contacts, search]);

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Contact Manager
          </h1>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none border border-gray-600"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="space-y-3 mb-8">
            <input
              type="text"
              placeholder="Enter name..."
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none border border-gray-600"
              ref={nameInputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter phone number..."
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none border border-gray-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
              onClick={addContact}
            >
              Add Contact
            </button>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Contacts</h2>
              <span className="text-gray-400">Total : {contacts.length}</span>
            </div>
            {searchContacts().map((contact) => (
              <div
                key={contact.id}
                className="bg-gray-700 p-4 rounded-lg flex items-center justify-between mb-3"
              >
                <div>
                  <p className="text-white text-start font-semibold text-lg">
                    {contact.name}
                  </p>
                  <p className="text-gray-400 text-start">{contact.phone}</p>
                </div>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            ))}
            {searchContacts().length === 0 && (
              <p className="text-gray-400 text-center py-6">
                No contacts found
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
