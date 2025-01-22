import Layout from "../Component/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Disclaimer
          </h1>
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-4">
            <li>
              <strong>Bada Talaab Investments Private Limited</strong> acts
              solely as a distributor of mutual funds and does not provide
              investment advice. All investment decisions are made at your sole
              discretion.
            </li>
            <li>
              <strong>Bada Talaab Investments Private Limited</strong> does not
              guarantee the performance of any mutual fund scheme.
            </li>
            <li>
              We are not responsible for any losses or damages resulting from
              your investments.
            </li>
            <li>
              The information provided on our platform is for informational
              purposes only and should not be construed as financial advice.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
