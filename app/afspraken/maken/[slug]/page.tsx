import { notFound } from "next/navigation";

const treatments = [
    { url: "controle", name: "Periodieke controle" },
    { url: "bleken", name: "Tanden bleken" },
    { url: "klacht", name: "Pijn of klacht" },
];

export default async function MakenPagina({
                                              params,
                                          }: {
    params: Promise<{ slug: string}>
                                          }) {
    const { slug } = await params

    const treatment = treatments.find(
        (treatment) => treatment.url === slug
    );

    if (!treatment) {
        notFound();
    }

    return (
    <h1>{treatment.name}</h1>
    );
}