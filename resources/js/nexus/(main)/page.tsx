import { Button } from "@/components/ui/button";
import { Head, Link } from "@laravext/react";

interface Props {}

const Page = ({}: Props) => {
    return (
        <div className="space-y-4">
            <Head title="Welcome Home" />

            <h1>Welcome Home</h1>

            <div className="flex flex-wrap items-center gap-2">
                <Link href="/about">
                    <Button>About us</Button>
                </Link>

                <Link href="/different-page">
                    <Button variant={"secondary"}>Different Layout Page</Button>
                </Link>
            </div>
        </div>
    );
};

export default Page;
