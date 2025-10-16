import LoginPage from "@/components/LoginPage";
import { auth0 } from "@lib/auth0";
import { redirect } from "next/navigation";

const Home = async () => {
    const session = await auth0.getSession();
    if (session) {
        redirect("/workspace");
    }
    return <LoginPage />;
};

export default Home;
