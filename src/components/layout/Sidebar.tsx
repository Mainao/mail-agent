"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/workspace" },
        { name: "Chat", href: "/workspace/chat" },
    ];

    return (
        <aside className="w-60 bg-gray-50 border-r-gray-800 h-screen flex flex-col p-4">
            <h1 className="text-xl font-semibold mb-6">MailAgent</h1>
            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100",
                            pathname === item.href
                                ? "bg-gray-100 text-black"
                                : "text-gray-600"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
