'use client'
import {useState} from "react";

export default function SelectAppointment({times, slug}: { times: string[], slug: string }) {

    const [date, setDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleDateClick(day: number) {
        setIsLoading(true)
        setDate(day);
        const dayAsString = day.toString().padStart(2, "0");
        const selectedDate = `2026-09-${dayAsString}`;
        const res = await fetch(`/api/tijden?behandeling=${slug}&datum=${selectedDate}`);
        const data = await res.json();
        setAvailableTimes(data.tijden);
        setIsLoading(false);
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

                    {Array.from({length: 29}, (item, index) => (<span className={date === index + 1 ? "selected" : ""}
                                                                      onClick={() => handleDateClick(index + 1)}
                                                                      key={index}>{index + 1}</span>))}
                </div>
            </article>
            <article className="card calendar">
                <h2>Kies een tijd</h2>
                {date && selectedTime && (
                    <h2>U heeft gekozen voor {date} september om {selectedTime}.</h2>
                )}
                {isLoading
                ? "Tijdstippen worden geladen"
                : (
                <div className="time-list">
                    {availableTimes.map((availableTime) => (
                        <button className={availableTime === selectedTime ? "selected" : ""}
                                onClick={() => handleTimeClick(availableTime)} key={availableTime}>{availableTime}</button>
                    ))}
                </div>
                    )}
            </article>
        </section>
    );
}