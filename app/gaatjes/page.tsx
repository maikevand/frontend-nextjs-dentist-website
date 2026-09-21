import Header from "@/components/Header";
import Link from "next/link";

export default function Gaatjes() {
    return (
        <main className="page-container">
            <Header icon="/logo.svg" title="Gaatjes" />

            <section className="intro">
                <h2>Heeft u last van een gaatje?</h2>
                <p>
                    Een gaatje ontstaat wanneer bacteriën in tandplak zuren produceren
                    die het tandglazuur aantasten. Gelukkig kan een gaatje meestal goed
                    worden behandeld wanneer het op tijd wordt ontdekt.
                </p>
                <Link href="/afspraken" className="link-button">Maak direct uw afspraak</Link>
            </section>

            <section className="card-container">
                <article className="card">
                    <h3>Hoe herken ik een gaatje?</h3>
                    <p>
                        Een gaatje kan gevoeligheid veroorzaken bij het eten of drinken
                        van iets kouds, warms of zoets. Soms is er helemaal geen pijn en
                        wordt een gaatje tijdens een controle ontdekt.
                    </p>
                    <p>
                        Daarom is het belangrijk om regelmatig naar de tandarts te gaan,
                        ook wanneer u geen klachten heeft.
                    </p>
                </article>

                <article className="card">
                    <h3>Hoe wordt het behandeld?</h3>
                    <p>
                        De tandarts verwijdert het aangetaste gedeelte van de tand en
                        vult de ontstane ruimte met een vulling. De behandeling voorkomt
                        dat het gaatje verder groter wordt.
                    </p>
                    <p>
                        Hoe eerder een gaatje wordt ontdekt, hoe eenvoudiger de
                        behandeling meestal is.
                    </p>
                </article>
            </section>

            <section className="card">
                <h3>Voorkomen is beter dan genezen</h3>
                <p>
                    Poets minimaal twee keer per dag met fluoridehoudende tandpasta en
                    maak dagelijks de ruimtes tussen uw tanden schoon.
                </p>
            </section>
        </main>
    );
}