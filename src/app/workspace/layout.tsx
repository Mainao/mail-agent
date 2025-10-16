import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import PageContainer from "@/components/layout/PageContainer";

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <PageContainer>{children}</PageContainer>
            </div>
        </div>
    );
}
