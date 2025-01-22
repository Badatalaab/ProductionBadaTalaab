import Layout from "../Component/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-14 max-md:pt-28 bg-gray-100 text-gray-800 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl fontstyle-1 font-bold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-lg mb-4 fontstyle-2">
            Welcome to our Privacy Policy page. This document explains how we
            collect, use, and protect your personal information when you use our
            services. By accessing or using our platform, you consent to the
            practices described below.
          </p>

          <h2 className="text-2xl fontstyle-1 font-semibold mt-6 mb-3 text-gray-900">
            Information We Collect
          </h2>
          <p className="mb-4 fontstyle-2">
            We only collect personal data that you voluntarily provide when you
            submit the "Let's Talk" form on our platform. The information
            collected may include your name, email address, phone number, and
            any additional details you choose to share with us. This data is
            solely used for communication purposes and to address your inquiries
            or requests.
          </p>

          <h2 className="text-2xl fontstyle-1 font-semibold mt-6 mb-3 text-gray-900">
            How We Protect Your Data
          </h2>
          <p className="mb-4 fontstyle-2">
            The security and confidentiality of your personal information are
            paramount to us. We have implemented the following measures to
            ensure your data is safeguarded:
          </p>
          <ul className="list-disc ml-6 fontstyle-1 mb-4">
            <li className="mb-2 fontstyle-2">
              <strong>MongoDB Data Storage:</strong> MongoDB, a reliable NoSQL
              database, is used to store your data. It offers advanced security
              features, including access control and data encryption, to protect
              sensitive information.
            </li>
            <li className="mb-2 fontstyle-2">
              <strong>Hostinger Hosting:</strong> Our platform is hosted on
              Hostinger, which provides secure hosting solutions, including SSL
              certificates, DDoS protection, and regular backups, ensuring your
              data remains protected from unauthorized access.
            </li>
            <li className="mb-2 fontstyle-2">
              <strong>Password Security:</strong> Passwords are hashed before
              being stored in our database. This ensures that even in the
              unlikely event of a database breach, the actual passwords remain
              secure and cannot be easily retrieved.
            </li>
          </ul>

          <h2 className="text-2xl fontstyle-1 font-semibold mt-6 mb-3 text-gray-900">
            How We Use Your Data
          </h2>
          <p className="mb-4 fontstyle-2">
            The personal information you provide through the "Let's Talk" form
            is used exclusively to:
          </p>
          <ul className="list-disc ml-6 mb-4  fontstyle-2">
            <li className="mb-2">
              Respond to your inquiries and provide relevant information.
            </li>
            <li className="mb-2">
              Improve our services based on your feedback and requirements.
            </li>
            <li className="mb-2">
              Communicate important updates about our platform.
            </li>
          </ul>

          <h2 className="text-2xl fontstyle-1 font-semibold mt-6 mb-3 text-gray-900">
            Third-Party Sharing
          </h2>
          <p className="mb-4 fontstyle-2">
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your data with trusted service
            providers who assist us in operating our platform, provided they
            agree to keep your information confidential.
          </p>

          <h2 className="text-2xl fontstyle-1 font-semibold mt-6 mb-3 text-gray-900">
            Your Consent
          </h2>
          <p className="mb-4 fontstyle-2">
            By using our services and submitting the "Let's Talk" form, you
            consent to our data practices as outlined in this Privacy Policy.
          </p>

          <h2 className="text-2xl fontstyle-1 font-semibold mt-6 mb-3 text-gray-900">
            Changes to This Policy
          </h2>
          <p className="mb-4  fontstyle-2">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the "Last Updated" date will be
            revised accordingly.
          </p>

          <h2 className="text-2xl  fontstyle-1 font-semibold mt-6 mb-3 text-gray-900">
            Contact Us
          </h2>
          <p className="mb-4 fontstyle-2">
            If you have any questions or concerns about this Privacy Policy,
            please feel free to contact us at{" "}
            <strong>info@badatalaabinvestments.com</strong>.
          </p>

          <div className="mt-8"></div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
