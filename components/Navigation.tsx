import Link from "next/link";

export default function Navigation() {
    const paths = ["Gaatjes", "Bleken", "Afspraken"]
    return (
        <nav>
            <div className="navigation-container">
                <div className="navigation-company-name">
                    De Tandenborstel
                </div>
                <div className="navigation-">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        {paths.map((path) => {
                            return <li key={path}><Link href={`/${path.toLowerCase()}`}>{path}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}