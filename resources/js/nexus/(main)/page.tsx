import { About } from "./_home/about";
import { Features } from "./_home/features";
import { Hero } from "./_home/hero";
import { HowItWorks } from "./_home/how-it-works";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Head } from "@laravext/react";
import { Testimonials } from "./_home/testimonials";
import { Cta } from "./_home/cta";
import { Newsletter } from "./_home/newsletter";
import { FAQ } from "./_home/faq";

interface Props {}

const Page = ({}: Props) => {
    return (
        <div className="space-y-4">
            <Head title="Welcome Home" />

            <Hero />

            <About />

            <HowItWorks />

            <Features />

            <Cta />

            <Testimonials />

            <Newsletter />

            <FAQ />

            {/* 
            <Sponsors />
      <Services />
      <Team />
      <Pricing />
       */}

            <ScrollToTop />
        </div>
    );
};

export default Page;
