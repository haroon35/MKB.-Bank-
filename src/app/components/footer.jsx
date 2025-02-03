import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";

export default function footer() {
  return (
    <div className="bg-black w-full">
      <div className="inline-block text-white w-11/12  gap-8 py-16 text-sm md:flex m-auto ">
        <div className="w-[95%] m-auto md:w-2/5">
          <img src="./mk.webp" alt="" className="h-12 mb-8" />
          <ol className="text-white flex flex-col gap-4">
            <li>Contact us</li>
            <li>Careers at MKT Private Bank</li>
            <li>Office locations</li>
            <li>Cookies preferences</li>
            <li>Press releases</li>
            <li>Private Banking FAQs</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Sitemap</li>
          </ol>
          <hr className="text-white w-full mt-8" />
          <div className="flex items-center gap-10 text-3xl py-6">
            <FaYoutube />
            <ImLinkedin />
            <FaSquareInstagram />
          </div>
          <hr className="text-white w-full" />
          <div className="flex items-center gap-4 mt-8">
            <img
              src="https://africabank.vercel.app/images/ft2.png"
              alt=""
              className="w-15"
            />
            <a href="#" className="font-bold underline">
              FINRA's BrokerCheck - Learn more about MKTGroup Global Markets
              Inc.'s background
            </a>
          </div>
        </div>

        <div className="w-[95%] m-auto flex flex-col gap-8">
          <p>
            MKT Private Bank is dedicated to helping dynamic individuals and
            their families preserve and grow their wealth. Our clients include
            some of the world's leading entrepreneurs, executives, investors and
            their family offices. We provide customized private banking that
            crosses borders, including some sophisticated services usually
            reserved for major global institutions.
          </p>
          <p className="bg-[#1A1A1A] py-4 px-6 text-xs text-center">
            INVESTMENT PRODUCTS: NOT FDIC INSURED · NOT CDIC INSURED · NOT
            GOVERNMENT INSURED · NO BANK GUARANTEE · MAY LOSE VALUE
          </p>
          <p>
            MKT Private Bank is a business of MKTGroup Inc. ("MKTgroup"), which
            provides its clients access to a broad array of products and
            services available throughMKT and non-bank affiliates of MKT. Not
            all products and services are provided by all affiliates or are
            available at all locations. In the U.S., investment products and
            services are provided byMKTgroup Global Markets Inc. "CGMI", member
            FINRA and SIPC, and MKT Private Alternatives, LLC ("CPA"), member of
            FINRA and SIPC andMKT Global Alternatives, LLC (“CGA”). CGMI
            accounts are carried by Pershing LLC, member FINRA, NYSE, SIPC.
            CGMI, CPA, CGA and MKTBank, N.A. are afﬁliated companies under the
            common control of MKTgroup.
          </p>
          <p>
            Outside the U.S., investment products and services are provided by
            other MKTgroup afﬁliates. Investment Management services (including
            portfolio management) are available through CGMI, CGA, MKTBank, N.A.
            and other afﬁliated advisory businesses. Neither MKTnor any of its
            affiliates provides tax or legal advice.
          </p>
          <p className="font-bold underline">
            Notice at Collection | Do Not Sell or Share My Personal Information|
            Tax Compliance & Regulatory Info| CGMI Financial Statement| SDG&E
            ADI| MAS Electronic Payments Guidelines| Accessibility| Important
            disclosures| Terms & Conditions| The Sustainable Finance Disclosure
            Regulation| MAS Banking Service Charges and MKT Deposit Suite|
            MKTBank, N.A. Hong Kong / Singapore Branch Environmental Risk
            Management Disclosure for Discretionary Asset Management
          </p>
          <p className="text-[12px]">
            To learn about CGMI and MKT Private Alternatives and MKT Global
            Alternatives investment business, as well as our relationship with
            you, please review our Form Client Relationship Summary
          </p>
          <p className="font-bold text-xs">© 2016 - 2025 MKTgroup Inc.</p>
        </div>
      </div>
    </div>
  );
}
