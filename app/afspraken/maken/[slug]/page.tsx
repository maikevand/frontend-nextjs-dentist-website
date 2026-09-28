import {notFound} from "next/navigation";
import SelectAppointment from "@/components/SelectAppointment";

const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];

async function getTreatment() {
    const res = await fetch("http://localhost:3000/api/behandelingen/")
    return await res.json();
}

export default async function MakenPagina({
                                              params,
                                          }: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params

    const data = await getTreatment();

    const treatment = data.treatments.find(
        (treatment) => treatment.url === slug
    );

    if (!treatment) {
        notFound();
    }

    return (
        <main className="page-container">
            <h1>Afspraak maken</h1>
            <section className="intro">
                <h2>Behandeling: {treatment.name}</h2>
                <p> U wilt een afspraak maken voor de behandeling <strong> {treatment.name} </strong>.</p>
            </section>
            <SelectAppointment times={times} slug={slug}/>
        </main>
    );
}