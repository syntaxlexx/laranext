import { About } from "@/components/home/about";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Head } from "@laravext/react";

interface Props {}

const Page = ({}: Props) => {
    return (
        <div className="space-y-4">
            <Head title="Welcome Home" />

            <Hero />

            <About />

            <HowItWorks />

            <Features />

            {/* <Sponsors />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
       */}

            <ScrollToTop />
        </div>
    );
};

export default Page;
