import {getAfspraken} from "@/app/lib/afspraken";

export default async function AfsprakenPagina({
                                                  searchParams
                                              }: {
                                                  searchParams: Promise<{ sleutel?: string }>
                                              }
) {
    const afspraken = getAfspraken();
    const {sleutel} = await searchParams;
    const juisteSleutel = process.env.ADMIN_SLEUTEL;

    if (sleutel === juisteSleutel) {
        return (
            <table>
                <thead>
                <tr>
                    <th>Naam</th>
                    <th>E-mailadres</th>
                    <th>Behandeling</th>
                    <th>Datum</th>
                    <th>Tijd</th>
                </tr>
                </thead>
                <tbody>
                {afspraken.map ((afspraak) => (
                    <tr key={afspraak.id}>
                        <td>{afspraak.naam}</td>
                        <td>{afspraak.email}</td>
                        <td>{afspraak.behandeling}</td>
                        <td>{afspraak.datum}</td>
                        <td>{afspraak.tijd}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    } else {
        return (
            <p>Geen toegang</p>
        );
    }
}
