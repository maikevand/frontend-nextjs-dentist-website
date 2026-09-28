import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
    return (
        <main className="page-container">
            <div>
                <Header icon="/logo.svg" title="Tandartspraktijk de Tandenborstel"/>

                <section className="hero">
                    <div className="hero-content">
                        <h2>Een gezonde glimlach begint hier</h2>
                        <p>
                            Welkom bij Tandartspraktijk de Tandenborstel. Wij zorgen ervoor
                            dat uw gebit gezond, sterk en stralend blijft.
                        </p>
                        <Link href="/afspraken" className="link-button">Maak een afspraak</Link>
                    </div>
                </section>

                <section className="card-container">
                    <article className="card">
                        <h3>Onze praktijk</h3>
                        <p>
                            In onze moderne tandartspraktijk staat persoonlijke aandacht
                            centraal. Ons team neemt de tijd om naar uw wensen te luisteren
                            en samen te bepalen welke behandeling het beste bij u past.
                        </p>
                    </article>

                    <article className="card">
                        <h3>Onze behandelingen</h3>
                        <p>
                            Van periodieke controles en het vullen van gaatjes tot
                            professionele gebitsreiniging en het bleken van tanden.
                            Wij helpen u graag met een gezond en verzorgd gebit.
                        </p>
                    </article>
                </section>

                <section className="box info-box">
                    <h3>Wist u dat?</h3>
                    <p>
                        Regelmatig controleren en goed poetsen helpt om problemen met uw
                        gebit vroegtijdig te ontdekken en te voorkomen.
                    </p>
                </section>
            </div>
        </main>
    );
}