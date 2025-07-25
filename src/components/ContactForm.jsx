import { useState } from "react";
import axios from "axios";


function ContactForm({onAdd}){
  const [form,setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${BACKEND_URL}/add-contact`, form);
      onAdd(response.data);
      setForm({name: '', email: '', phone: ''});
    }catch(error){
      console.error('Error adding contact:', error);
    }
  };


  return(
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Contact
      </button>
    </form>
  );
}


export default ContactForm;