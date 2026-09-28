import Image, {ImageProps} from "next/image";

type HeaderProps = {
    icon: ImageProps["src"];
    title: string;
};

export default function Header({icon, title}: HeaderProps) {
    return (
        <header className="header">
            <Image
                className="header-icon"
                src={icon}
                alt="header-icon"
                width={60}
                height={60}
            />

            <h1>{title}</h1>
        </header>
    );
}