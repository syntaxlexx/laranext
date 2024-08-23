import { Button } from "@/components/ui/button";
import { Head, Link } from "@laravext/react";

interface Props {}

const Page = ({}: Props) => {
    return (
        <div className="space-y-4">
            <Head title="About us" />

            <h1>About us Page</h1>
            <p>Takes the layout from the parent "group"</p>

            <div className="flex flex-wrap items-center gap-2">
                <Link href="/demo">
                    <Button>Go back</Button>
                </Link>

                <Link href="/">
                    <Button variant={"outline"}>Go home</Button>
                </Link>

                <Link href="/demo/different-page">
                    <Button variant={"secondary"}>Different Layout Page</Button>
                </Link>
            </div>
        </div>
    );
};

export default Page;
