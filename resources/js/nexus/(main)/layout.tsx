import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
    return (
        <ThemeProvider>
            <div className="h-full w-full">
                <Navbar />

                <main className="container mt-4">{children}</main>

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Layout;
