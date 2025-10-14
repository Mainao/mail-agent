import LoginPage from "@/components/LoginPage";
import { auth0 } from "@lib/auth0";

const Home = async () => {
    const session = await auth0.getSession();
    console.log("Session:", session);
    return <LoginPage />;
};

export default Home;
