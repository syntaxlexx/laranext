import { Button } from "@/components/ui/button";
import { Head, Link } from "@laravext/react";

interface Props {}

const Page = ({}: Props) => {
    return (
        <div className="space-y-4">
            <Head title="Different Layout Page" />

            <h1>Different Layout Page</h1>
            <p>
                The layout file in this group completely{" "}
                <strong>overrides</strong> the layout file in the parent group.
            </p>

            <div className="flex flex-wrap items-center gap-2">
                <Link href="/demo">
                    <Button>Go back</Button>
                </Link>

                <Link href="/">
                    <Button variant={"outline"}>Go home</Button>
                </Link>

                <Link href="/demo/about">
                    <Button variant={"secondary"}>About Us</Button>
                </Link>
            </div>
        </div>
    );
};

export default Page;
