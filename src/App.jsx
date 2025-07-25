import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App(){
  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    axios.get(`${BACKEND_URL}/contacts`)
    .then(response => {
      setContacts(response.data);
    })
    .catch(error => {
      console.error('Error fetching contacts:', error);
    });
  }, []);


  const handleAdd = (contact) => {
    setContacts(prev => [...prev, contact]);
  };


  return(
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Saver</h1>
      <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
        <ContactForm onAdd={handleAdd} />
        <hr className="my-4" />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
