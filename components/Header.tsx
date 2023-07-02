import { Logo } from "@/public/Logo";

export default function Header(){
    return (
        <header className="flex flex-col items-center gap-6 space-x-2 px-10 py-2">
            <Logo />
        </header>
    );
}