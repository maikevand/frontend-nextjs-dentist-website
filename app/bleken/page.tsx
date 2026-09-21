import Header from "@/components/Header";

export default function Bleken() {
    return (
        <main className="page-container">
            <Header icon="/logo.svg" title="Bleken"/>

            <section className="intro">
                <h2>Een stralend witte glimlach</h2>
                <p>
                    Wilt u uw tanden een paar tinten lichter maken? Met professioneel
                    tanden bleken kunt u op een veilige manier een stralendere glimlach
                    krijgen. Op deze pagina leest u hoe het proces in zijn werk gaat.
                </p>
            </section>

            <section className="card-container">
                <article className="card">
                    <h3>1. Intake</h3>
                    <p>
                        Tijdens een eerste afspraak bekijken we uw gebit en bespreken we
                        uw wensen. We bepalen samen of tanden bleken geschikt voor u is.
                    </p>
                </article>

                <article className="card">
                    <h3>2. Behandeling</h3>
                    <p>
                        Onze tandarts geeft uitleg over de behandeling en zorgt ervoor
                        dat het bleken op een professionele en verantwoorde manier
                        gebeurt.
                    </p>
                </article>

                <article className="card">
                    <h3>3. Resultaat</h3>
                    <p>
                        Na de behandeling zijn uw tanden zichtbaar lichter. Hoeveel het
                        resultaat verschilt, hangt onder andere af van de oorspronkelijke
                        kleur van uw tanden.
                    </p>
                </article>
            </section>

            <section className="box warning-box">
                <h3>Goed om te weten</h3>
                <p>
                    Niet iedereen kan zijn tanden laten bleken. Laat uw gebit daarom
                    altijd eerst controleren door één van onze tandartsen.
                </p>
            </section>
        </main>
    );
}
