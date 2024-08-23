import { Head, Link } from "@laravext/react";

interface Props {}

const Page = ({}: Props) => {
    return (
        <div>
            <Head title="About us" />
            About us Page
            <Link href="/">Go home</Link>
        </div>
    );
};

export default Page;
