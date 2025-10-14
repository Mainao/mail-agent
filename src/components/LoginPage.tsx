import { Button } from "./ui/button";

const LoginPage = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-holographic)] opacity-30" />

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                    Your AI Email Assistant
                </h1>

                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light italic">
                    Get smart summaries and answers, instantly.
                </p>

                <div className="pt-4 relative">
                    <Button
                        variant="hero"
                        size="lg"
                        className="text-lg px-12 py-6 h-auto"
                        asChild
                    >
                        <a href="/auth/login">Get started</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
