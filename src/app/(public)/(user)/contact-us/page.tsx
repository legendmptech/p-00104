import ContactForm from "@/components/ContactForm";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Contact: NextPage = () => {


  return (
    <div className="w-full h-full">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Arunam Sand" />{" "}
        {/* Update description */}
      </Head>

      <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-heading-4 text-center font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600">
            Feel Free to Drop Us A Line To Contact Us
          </p>

          <div className="mt-10 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-heading-5 font-semibold text-gray-900">
                Our Information
              </h3>
              <div className="text-lg mt-4 text-gray-600 space-y-2 flex flex-col gap-1">
                <p>Ayothi Consultancy</p> {/* Update with actual name */}
                <p>
                  253 Thayagam, Tenkasi Main Road, Rajapalayam - 626117
                </p>{" "}
                {/* Update address */}
                <Link href="tel:+918122933099">Phone: +918122933099</Link>{" "}
                {/* Update phone */}
                <Link href={"mailto:info.ayothi@gmail.com"}>
                  Email: info.ayothi@gmail.com
                </Link>{" "}
                {/* Update email */}
              </div>

              {/* Add Map Embed Here (Like in the original example) */}
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3935.8141627812215!2d77.539073!3d9.437691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjYnMTUuNyJOIDc3wrAzMicyMC43IkU!5e0!3m2!1sen!2sin!4v1738499040299!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
