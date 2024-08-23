import { Button } from "@/components/ui/button";
import { Head, Link } from "@laravext/react";

interface Props {}

const Page = ({}: Props) => {
    return (
        <div className="space-y-4">
            <Head title="Welcome to Demo" />

            <h1>Welcome to Home Demo</h1>

            <div className="flex flex-wrap items-center gap-2">
                <Link href="/">
                    <Button variant={"outline"}>Go home</Button>
                </Link>

                <Link href="/demo/about">
                    <Button>About us</Button>
                </Link>

                <Link href="/demo/different-page">
                    <Button variant={"secondary"}>Different Layout Page</Button>
                </Link>
            </div>
        </div>
    );
};

export default Page;
