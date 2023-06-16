import React from 'react';
import "./styles.css";
import { Button } from './components/Button/button';

export default function App() {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [records, setRecords] = React.useState([]);

  const handleSubmit = () => {
    setEmail('');
    setName('');
    const newRecords = [...records];
    newRecords.push({
      name, email, id: crypto.randomUUID(),
    });
    setRecords(newRecords);
  }

  const handleAction = (e) => {
    const { id, action } = e.target.dataset;
    if (action === "delete") {
      const newRecords = records.filter(obj => obj.id !== id);
      setRecords(newRecords);
    }
  }

  return (
    <div className="App">
      <h1>Date : June 16, 2023 </h1>
      <div className="formContainer">
          <div className='fieldContainer'>
            <label>Emp name</label>
            <input onChange={(e) => {
              setName(e.target.value)
            }} value={name} type="text" />
          </div>
          <div className='fieldContainer'>
            <label>Emp email</label>
            <input onChange={(e) => {
              setEmail(e.target.value)
            }} value={email} type="email" />
          </div>
          <div>
            <Button type="submit" variant="success" onClick={handleSubmit} >Submit</Button>
          </div>
          <br />
          <h2>Employee List</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                records.map(({ id, name, email }) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>
                        <Button dataAttributes={ { id, action:"delete" }} type="button" variant="danger" onClick={handleAction} >Delete</Button>
                        <Button dataAttributes={ { id, action:"moveUp" }} type="button" variant="normal" onClick={handleAction} >Move Up</Button>
                        <Button dataAttributes={ { id, action:"moveDown" }} type="button" variant="normal" onClick={handleAction} >Move Down</Button>
                      </td>
                    </tr>
                  )
                })
              }
              {
                records.length === 0 ?
                <tr>
                  <td colSpan="4">No Records</td>
                </tr>
                :
                null
              }
            </tbody>
          </table>
      </div>
    </div>
  );
}
