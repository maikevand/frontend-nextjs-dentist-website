'use client'
import {useState} from "react";

export default function SelectAppointment( {times}: {times: string[]}  ) {

    const [date, setDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    function handleDateClick(day: number) {
        setDate(day);
    }

    function handleTimeClick(time: string) {
        setSelectedTime(time);
    }

 return (
     <section className="card-container">
         <article className="card">
             <h2>Kies een datum</h2>
             <div className="calendar-grid">
                 <span>Ma</span>
                 <span>Di</span>
                 <span>Wo</span>
                 <span>Do</span>
                 <span>Vr</span>

                 {Array.from({length: 29}, (item, index) => ( <span className={date === index+1 ? "selected" : ""} onClick={() => handleDateClick(index+1)} key={index}>{index + 1}</span> ))}
             </div>
         </article>
         <article className="card calendar">
             <h2>Kies een tijd</h2>
             {date && selectedTime && (
                 <h2>U heeft gekozen voor {date} september om {selectedTime}.</h2>
             )}
             <div className="time-list">
                 {times.map((time) => (
                     <button className={time === selectedTime ? "selected" : ""} onClick={() => handleTimeClick(time)} key={time}>{time}</button>
                 ))}
             </div>
         </article>
     </section>
 );
}