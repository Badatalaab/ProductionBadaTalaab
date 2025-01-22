import { useState } from "react";
import Layout from "../Component/Layout";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a mutual fund?",
      answer:
        "A mutual fund is an investment vehicle that pools money from multiple investors to invest in stocks, bonds, or other securities, managed by professional fund managers.",
      isPointwise: false,
    },
    {
      question: "What are the types of mutual funds?",
      answer:
        "The major types include equity funds, debt funds, hybrid funds, and money market funds. Each caters to different investment goals and risk profiles.",
      isPointwise: false,
    },
    {
      question: "How do mutual funds work?",
      answer:
        "Mutual funds collect money from investors, invest in a diversified portfolio, and distribute returns (dividends or capital appreciation) after deducting management expenses.",
      isPointwise: false,
    },
    {
      question: "Are mutual funds risky?",
      answer:
        "Yes, mutual funds are subject to market risks. However, the level of risk depends on the type of fund. For instance, equity funds are riskier than debt funds.",
      isPointwise: false,
    },
    {
      question: "What is an NAV (Net Asset Value)?",
      answer:
        "NAV represents the per-unit value of a mutual fund. It is calculated by dividing the total value of the fund's assets by the number of units outstanding.",
      isPointwise: false,
    },
    {
      question: "Can I lose money in mutual funds?",
      answer:
        "Yes, mutual fund investments are subject to market risks, and there is no guarantee of returns.",
      isPointwise: false,
    },
    {
      question: "How can I invest in mutual funds?",
      answer:
        "You can invest in mutual funds directly through an AMC's website, mobile apps, or through mutual fund distributors.",
      isPointwise: false,
    },
    {
      question: "What are the tax implications of mutual funds?",
      answer:
        "Taxation depends on the type of fund. For equity funds, short-term capital gains (STCG) are taxed at 15%, and long-term capital gains (LTCG) above ₹1 lakh are taxed at 10%. Debt funds have different tax rates.",
      isPointwise: false,
    },
    {
      question: "What is SIP in mutual funds?",
      answer:
        "Systematic Investment Plan (SIP) allows investors to invest a fixed amount regularly (e.g., monthly) in a mutual fund, promoting disciplined investing.",
      isPointwise: false,
    },
    {
      question: "Can I withdraw my investment at any time?",
      answer:
        "Yes, for open-ended mutual funds, you can redeem your investment anytime. However, there may be exit loads or tax implications for early withdrawals.",
      isPointwise: false,
    },
    {
      question: "Who are mutual fund distributors (MFDs)?",
      answer:
        "MFDs are professionals or entities registered with AMFI who act as intermediaries to help investors choose and invest in mutual funds.",
      isPointwise: false,
    },
    {
      question: "What is the role of a mutual fund distributor?",
      answer:
        "MFDs provide advice, facilitate transactions, and offer support in choosing mutual funds suited to the investor's financial goals and risk tolerance.",
      isPointwise: false,
    },
    {
      question:
        "How are mutual fund distributors different from investment advisors?",
      answer:
        "MFDs earn commissions from AMCs for selling mutual funds, while investment advisors charge fees for unbiased financial advice.",
      isPointwise: false,
    },
    {
      question: "How do MFDs earn money?",
      answer:
        "MFDs earn commissions from Asset Management Companies (AMCs) for the mutual funds they sell, either as an upfront commission or a trail commission.",
      isPointwise: false,
    },
    {
      question: "Is there a cost to use a mutual fund distributor?",
      answer:
        "No direct cost is charged to investors, but MFDs are compensated by the AMC through commissions included in the fund's expense ratio.",
      isPointwise: false,
    },
    {
      question: "Are MFDs regulated?",
      answer:
        "Yes, MFDs are regulated by SEBI and must register with AMFI (Association of Mutual Funds in India) to operate legally.",
      isPointwise: false,
    },
    {
      question: "How can I check if a mutual fund distributor is registered?",
      answer:
        "You can verify the registration of a distributor on the AMFI website using their ARN (AMFI Registration Number).",
      isPointwise: false,
    },
    {
      question: "Do mutual fund distributors provide financial advice?",
      answer:
        "MFDs may provide guidance, but they cannot offer investment advice unless they are also registered as SEBI Registered Investment Advisers (RIAs).",
      isPointwise: false,
    },
    {
      question: "Can mutual fund distributors guarantee returns?",
      answer:
        "No, MFDs cannot guarantee returns or provide misleading information about the performance of mutual funds.",
      isPointwise: false,
    },
    {
      question: "What are the benefits of using a mutual fund distributor?",
      answer:
        "MFDs simplify the investment process, provide access to multiple mutual fund schemes, and assist in selecting funds aligned with your financial goals.",
      isPointwise: false,
    },
  ];
  const healthInsuranceFAQs = [
    {
      question: "What is health insurance, and why is it important?",
      answer:
        "Health insurance is a financial product that covers medical expenses incurred due to illness, injury, or hospitalization. It helps protect individuals and families from high healthcare costs, providing access to quality treatment without depleting savings.",
      isPointwise: false,
    },
    {
      question: "What are the key benefits of health insurance?",
      answer:
        "• Hospitalization Coverage: Covers medical expenses for inpatient treatment, including room rent, surgery, and medication. • Cashless Treatment: Offers cashless services at network hospitals. • Pre- and Post-Hospitalization: Covers medical expenses incurred before and after hospitalization for a specific period. • Preventive Care: Some plans include wellness checkups and preventive health screenings. • Tax Benefits: Premiums paid for health insurance are eligible for tax deductions under Section 80D in India.",
      isPointwise: true,
    },
    {
      question: "What types of health insurance policies are available?",
      answer:
        "• Individual Health Insurance: Covers a single person. • Family Floater Plan: Provides coverage for the entire family under a single policy. • Critical Illness Plan: Offers a lump sum amount upon diagnosis of specified critical illnesses. • Group Health Insurance: Provided by employers for their employees. • Senior Citizen Plan: Tailored for individuals aged 60 years and above.",
      isPointwise: true,
    },
    {
      question:
        "What factors should I consider before buying health insurance?",
      answer:
        "• Coverage Amount: Ensure the sum insured is adequate to cover medical costs in your area. • Inclusions and Exclusions: Read the policy to understand what is covered and excluded. • Waiting Period: Check for waiting periods for pre-existing conditions or maternity benefits. • Network Hospitals: Ensure the insurer has a good network of hospitals for cashless treatment. • Premium vs. Benefits: Balance the cost of premiums with the benefits offered.",
      isPointwise: true,
    },
    {
      question: "What is the waiting period in health insurance?",
      answer:
        "• Initial Waiting Period: Typically, 30 days after the policy start date (except for accidents). • Pre-Existing Conditions: Usually, 2-4 years before pre-existing illnesses are covered. • Specific Treatments: Certain treatments like cataract or hernia may have specific waiting periods.",
      isPointwise: true,
    },
  ];

  const pmsAifFAQs = [
    {
      question: "What is Portfolio Management Services (PMS)?",
      answer:
        "PMS is a professional investment service offered to high-net-worth individuals (HNWIs) where an experienced portfolio manager creates and manages a customized portfolio of stocks, bonds, and other securities tailored to meet specific financial goals and risk preferences of the investor.",
      isPointwise: false,
    },
    {
      question:
        "Who can one invest in PMS, and what is the minimum investment required?",
      answer:
        "PMS is typically designed for high-net-worth individuals and institutions. In most cases, regulatory guidelines (like SEBI in India) mandate a minimum investment amount, which is often set at ₹50 lakhs in India or an equivalent amount in other jurisdictions.",
      isPointwise: false,
    },
    {
      question: "What are the different types of PMS offered?",
      answer:
        "• Discretionary PMS: The portfolio manager makes investment decisions on behalf of the client. • Non-Discretionary PMS: The portfolio manager provides advice, but the client makes the final decisions. • Advisory PMS: The portfolio manager acts as a consultant, advising on investments, but does not execute the transactions.",
      isPointwise: true,
    },
    {
      question: "How is PMS different from mutual funds?",
      answer:
        "• Customization: PMS portfolios are tailor-made for individual clients, while mutual funds pool money from multiple investors and invest collectively. • Transparency: PMS provides detailed reporting on individual securities and transactions, whereas mutual fund investors receive consolidated fund performance reports. • Costs: PMS often has higher fees, including management and performance-linked charges, compared to mutual funds. • Investment Amount: PMS generally requires a higher minimum investment than mutual funds.",
      isPointwise: true,
    },
    {
      question: "What are Alternate Investment Funds (AIFs)?",
      answer:
        "AIFs are privately pooled investment vehicles that collect funds from investors to invest in assets that fall outside traditional investment categories like stocks, bonds, and cash. These include private equity, hedge funds, venture capital, real estate, infrastructure, and other unconventional asset classes.",
      isPointwise: false,
    },
    {
      question: "How are AIFs classified in India?",
      answer:
        "• Category I: Invests in socially or economically beneficial sectors such as startups, SMEs, infrastructure, etc. • Category II: Includes private equity funds, debt funds, and other funds not categorized under I or III. • Category III: Engages in complex strategies, including hedge funds, to deliver short-term returns through high-risk investments.",
      isPointwise: true,
    },
    {
      question:
        "Who can invest in AIFs, and what are the eligibility criteria?",
      answer:
        'AIFs are typically suited for high-net-worth individuals (HNIs) and institutional investors due to their higher risk and minimum investment requirements. In India, the minimum investment amount for an investor is ₹1 crore (except for employees and directors of the AIF). Additionally, investors must meet the "accredited investor" criteria in certain jurisdictions.',
      isPointwise: false,
    },
    {
      question: "What are the advantages of investing in AIFs?",
      answer:
        "• Access to unique and diverse asset classes unavailable in traditional investments. • Professional fund management by experienced investment managers. • Potential for higher returns compared to conventional investments. • Portfolio diversification and risk mitigation through alternative assets.",
      isPointwise: true,
    },
    {
      question: "What are the risks associated with AIFs?",
      answer:
        "• Liquidity Risk: Many AIFs have a lock-in period, making funds less liquid. • Market Risk: Investments are subject to market fluctuations and economic conditions. • Regulatory Risk: Changes in government policies can impact returns. • High Minimum Investment: AIFs require a significant capital commitment, which may not be suitable for all investors.",
      isPointwise: true,
    },
  ];

  const toggleFAQ = (index, section) => {
    setActiveIndex((prev) => ({
      ...prev,
      [section]: prev?.[section] === index ? null : index,
    }));
  };
  return (
    <Layout>
      <div className="w-lg mx-auto py-20 px-12 max-md:pt-28 max-md:px-12">
        <h1 className="text-center text-4xl max-md:text-3xl font-bold mb-6">
          FAQs
        </h1>

        <h2 className="text-2xl font-bold py-8 fontstyle-1 text-blue-800 border-b-gray-800">
          • FAQs About Mutual Funds
        </h2>
        <div className="space-y-6 ml-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index, "mutualFunds")}
              >
                <h3 className="text-lg font-semibold fontstyle-1">
                  {faq.question}
                </h3>
                <span className="text-2xl text-gray-500">
                  {activeIndex?.mutualFunds === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex?.mutualFunds === index && (
                <p className="mt-2 text-gray-600 fontstyle-2 font-normal">
                  {faq.isPointwise ? (
                    <ul className="list-disc pl-6">
                      {faq.answer
                        .split("•")
                        .filter((item) => item.trim() !== "")
                        .map((point, i) => (
                          <li key={i} className="mb-2">
                            {point.trim()}
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold py-8 fontstyle-1 text-blue-800 border-b-gray-800">
          • FAQs on Health Insurance
        </h2>
        <div className="space-y-6 ml-10">
          {healthInsuranceFAQs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index, "healthInsurance")}
              >
                <h3 className="text-lg font-semibold fontstyle-1">
                  {faq.question}
                </h3>
                <span className="text-2xl text-gray-500">
                  {activeIndex?.healthInsurance === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex?.healthInsurance === index && (
                <p className="mt-2 text-gray-600 fontstyle-2 font-normal">
                  {faq.isPointwise ? (
                    <ul className="list-disc pl-6">
                      {faq.answer
                        .split("•")
                        .filter((item) => item.trim() !== "")
                        .map((point, i) => (
                          <li key={i} className="mb-2">
                            {point.trim()}
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold py-8 fontstyle-1 text-blue-800 border-b-gray-800">
          • FAQs on Portfolio Management Services (PMS) and Alternate Investment
          Funds (AIF)
        </h2>
        <div className="space-y-6 ml-10">
          {pmsAifFAQs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index, "pmsAif")}
              >
                <h3 className="text-lg font-semibold fontstyle-1">
                  {faq.question}
                </h3>
                <span className="text-2xl text-gray-500">
                  {activeIndex?.pmsAif === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex?.pmsAif === index && (
                <p className="mt-2 text-gray-600 fontstyle-2 font-normal">
                  {faq.isPointwise ? (
                    <ul className="list-disc pl-6">
                      {faq.answer
                        .split("•")
                        .filter((item) => item.trim() !== "")
                        .map((point, i) => (
                          <li key={i} className="mb-2">
                            {point.trim()}
                          </li>
                        ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
