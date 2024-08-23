import { Head, Link } from "@laravext/react";

interface Props {}

const Page = ({}: Props) => {
    return (
        <div>
            <Head title="Welcome Home" />
            Welcome Home
            <Link href="/about">About us</Link>
        </div>
    );
};

export default Page;
