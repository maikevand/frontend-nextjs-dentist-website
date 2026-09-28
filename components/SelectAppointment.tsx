'use client'
import {useState} from "react";
import {AfspraakResultaat, maakAfspraakAction} from "@/app/afspraken/maken/[slug]/actions";
import {useFormState} from "react-dom";

const initialState: AfspraakResultaat = {
    success: false,
    error: ""
};

export default function SelectAppointment({times, slug}: { times: string[], slug: string }) {
    const [state, formAction] = useFormState(maakAfspraakAction, initialState);
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
        <>
            <section className="card-container">
                <article className="card">
                    <h2>Kies een datum</h2>
                    <div className="calendar-grid">
                        <span>Ma</span>
                        <span>Di</span>
                        <span>Wo</span>
                        <span>Do</span>
                        <span>Vr</span>

                        {Array.from({length: 29}, (item, index) => (
                            <span className={date === index + 1 ? "selected" : ""}
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
                                            onClick={() => handleTimeClick(availableTime)}
                                            key={availableTime}>{availableTime}</button>
                                ))}
                            </div>
                        )}
                </article>
            </section>
            <section>
                {date && selectedTime && (
                    <article className="card-container">
                        <form className="appointment-form" action={formAction}>
                            <input type="hidden" name="behandeling" value={slug}/>
                            <input type="hidden" name="datum" value={`2026-09-${date.toString().padStart(2, "0")}`}/>
                            <input type="hidden" name="tijd" value={selectedTime}/>
                            <label htmlFor="naam">Naam</label>
                            <input id="naam" type="text" name="naam"/>
                            <label htmlFor="email">E-mailadres</label>
                            <input id="email" type="email" name="email"/>

                            {state.success === false && state.error && (
                                <p>{state.error}</p>
                            )}
                            <button type="submit">Afspraak bevestigen</button>

                            {state.success === true && (
                                <p>{`U heeft een afspraak gemaakt voor ${state.afspraak.datum.slice(-2)} september om ${state.afspraak.tijd}.`}</p>
                            )}
                        </form>
                    </article>
                )}
            </section>
        </>
    );
}