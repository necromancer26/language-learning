import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function schedule() {
    const [value, onChange] = useState(new Date());
  return (
    <div className="h-[100vh] bg-slate-300 flex flex-col justify-center items-center font-[Inter]">
      <h1>Schedule your appointement</h1>
      <div>
      <Calendar/>

      </div>
    </div>
  );
}
