import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <div className="navigation-container">
                <div className="navigation-company-name">
                    De Tandenborstel
                </div>
                <div className="navigation-">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/gaatjes">Gaatjes</Link></li>
                        <li><Link href="/bleken">Bleken</Link></li>
                        <li><Link href="/afspraken" className="navigation-button">Afspraken</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}