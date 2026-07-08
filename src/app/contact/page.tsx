import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Demo | CREDITspective",
  description: "Request a personalized CREDITspective demo.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Request Demo"
        description="Connect with our team for a personalized walkthrough of CREDITspective."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
