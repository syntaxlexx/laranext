import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
    return (
        <div className="h-full w-full">
            <header className="w-full py-2 bg-primary text-primary-foreground shadow-lg">
                <div className="container text-lg font-semibold">
                    Page Layout for Different Page. Layouts do not cascade.
                </div>
            </header>

            <main className="container grid md:grid-cols-6 gap-4 mt-4">
                <div className="md:col-span-5">{children}</div>

                <aside className="relative">
                    <div className="sticky top-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sidebar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Sidebar content goes here</p>

                                <Skeleton className="h-24 w-full"></Skeleton>
                            </CardContent>
                        </Card>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default Layout;
