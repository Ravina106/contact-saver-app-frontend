function ContactList({contacts}){
  if(contacts.length === 0){
    return <p className="text-gray-500">No Contacts Found</p>;
  }

  return (
    <ul className="space-y-2">
      {contacts.map((c, index) => (
        <li
          key={index}
          className="p-3 bg-gray-100 rounded shadow-sm border"
        >
          <div><strong>Name:</strong> {c.name}</div>
          <div><strong>Email:</strong> {c.email}</div>
          <div><strong>Phone:</strong> {c.phone}</div>
        </li>
      ))}
    </ul>
  );
}


export default ContactList;