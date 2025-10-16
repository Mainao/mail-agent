import { LogOut } from "lucide-react";

export default function Header() {
    return (
        <header className="h-16 flex justify-end p-6 bg-white">
            <a href="/auth/logout">
                <LogOut className="w-5 h-5" />
            </a>
        </header>
    );
}
