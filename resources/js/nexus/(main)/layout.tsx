import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
    return (
        <div className="h-full w-full">
            <header className="w-full py-2 bg-primary text-primary-foreground shadow-lg">
                <div className="container text-lg font-semibold">
                    Page Layout from Main
                </div>
            </header>

            <main className="container mt-4">{children}</main>
        </div>
    );
};

export default Layout;
