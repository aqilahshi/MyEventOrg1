import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })
  
  const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 4, 1),
        end: new Date(2023, 4, 5),
    },
    {
        title: "Vacation",
        start: new Date(2023, 4, 7),
        end: new Date(2023, 4, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 4, 20),
        end: new Date(2023, 4, 23),
    },
  ];

  function Calendars() {

     const [newEvent, setNewEvent] = useState({title: "", start: "", end:""})
     const [allEvents, setAllEvents] = useState(events)
  
  function handleAddEvent(){
    for (let i=0; i<allEvents.length; i++){
  
      const d1 = new Date (allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
  
       if (
        ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
          (d4 <= d3) )
        )
      {   
          alert("CLASH"); 
          break;
       }
  
  }
    setAllEvents([...allEvents, newEvent])
  }
  
    return (
      <div className="App">
        <h1>Calendar</h1>
        <h2>Add New Event</h2>
        <div>
        <input type="text" placeholder="Add Title" style={{ width: "20%", marginLeft: "40%" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
            <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
            <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
            <button style={{ marginTop: "10px", marginLeft: "45%" }} onClick={handleAddEvent}>
            Add Event
            </button>
        </div>
        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }}/> 
      </div>
    );
  }
  


// const Calendars = () => {
//     return (
//         <div class="container2">
//             <div class="content">
//             <h1>Calendar page</h1>
//             </div>
//         </div>
//     );
// };

export default Calendars;