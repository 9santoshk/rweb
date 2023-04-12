// import logo from './logo.svg';
import {useEffect, useState} from "react";
import axios from "axios";
import {format} from "date-fns";

import './App.css';
import { da } from "date-fns/locale";


const baseUrl="http://localhost:5000" 

function App() {
  const [description, setDescription] =useState("");
  const [editDescription, setEditDescription] =useState("");
  const [eventsList, setEventsList] =useState([]);
  const [eventId, setEventId] = useState(null);

  const fetchEvents = async () => {
    const data = await axios.get(baseUrl+'/events')
    const { events } = data.data
    setEventsList(events);
    console.log("Data: ", data)
  }


  const handlleChange  = (e,field) => {
    if (field =='edit') {
      setEditDescription(e.target.value);
    } else {
      setDescription(e.target.value);

    }
  } 
  
  const handleSubmit  = async e => {
    e.preventDefault();
    // console.log(description);
    try {
      if (editDescription) {
        const data=await axios.put(`${baseUrl}/events/${eventId}`, {description: editDescription});
        const updatedEvent =data.data.event
        const updatedList= eventsList.map(event=>{
          if (event.id ==eventId) {
            return event = updatedEvent
          }
          return event
        })
        setEventsList(updatedList)
      } else {
        const data = await axios.post(baseUrl+'/event',{description})
        setEventsList([...eventsList, data.data]);
      }
      setDescription('');
      setEditDescription('');
      setEventId(null)

    } catch (err) {
      console.error(err.message); 
    }
  } 

  const handleDelete  = async (id) => {
    // e.preventDefault();
    console.log(`${baseUrl}/events/${id}`);
    try {
      await axios.delete(`${baseUrl}/events/${id}`)
      // print('${baseUrl}\events\${id}')
      const updatedList = eventsList.filter(event => event.id !== id)
      setEventsList(updatedList);
    } catch (err) {
      console.error(err.message); 
    }
  } 

  const toggleEdit  = async (event) => {
    // e.preventDefault();
    setEventId(event.id);
    setEditDescription(event.description);

  } 



  useEffect(() => {
    fetchEvents();
  },[])
  
  return (
    <div className="App">
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="description"> Description </label>
          <input
            onChange={(e)=> handlleChange(e,'description')}           
            type="text"
            name="description"
            id="description"
            placeholder="descriobe the event"
            value={description}
          />
          <button type="submit"> Submit </button>
        </form>
      </section>
      <section>
        <ul>
          {eventsList.map(event => {
            if(eventId==event.id){
              return (
                <form onSubmit={e => handleSubmit(e,'edit')} key={event.id}>
                <input
                  onChange={e=> handlleChange(e,'edit')}           
                  type="text"
                  name="editdescription" 
                  id="editdescription"
                  value={editDescription}
                />
                <button type="submit">Submit</button>
              </form>

              )

            } else {
              return( 
                <li style={{display: "flex"}} key={event.id} event-id={event.id} description={event.description}>
                  {format(new Date(event.created_at), "MM/dd, p")} :{" "}
                  {event.description}
                  <button onClick={() => toggleEdit(event)}>Edit</button>
                  <button onClick = {() => handleDelete(event.id)} > x </button>
                </li>
              )
  
            }
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;