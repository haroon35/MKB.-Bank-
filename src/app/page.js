import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/footer";

export default function () {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-full min-h-[90vh] bg-gray-100">
        <div className="py-6 w-[90%] m-auto">
          <div className="bg-white shadow-[3px_3px_10px_rgba(0,0,0,0.1)] max-w-[600px] m-auto pl-4 pr-8 py-4 min-h-[100%] rounded-lg ">
            <h1 className="text-lg md:text-xl font-bold">
              Requirements To Open an Account
            </h1>
            <p className="text-gray-600 text-sm md:text-base ">
              Dear Customer, <br /> Please have the below documents ready in
              JPEG, PDF, PNG or GIF formats before you start. The images should
              each not exceed <span className="font-semibold">5 MB.</span>
            </p>
            <ul className="font-semibold list-disc list-inside text-sm md:text-base">
              Identification Documents
              <li className="text-sm text-gray-600 font-normal">
                Passport Size Photo
              </li>
              <li className="text-sm text-gray-600 font-normal">
                Signature Image
              </li>
              <li className="text-sm text-gray-600 font-normal">
                National ID / Valid Passport
              </li>
              <li className="text-sm text-gray-600 font-normal">
                Tin Certificate
              </li>
            </ul>
            <ul className="font-semibold list-disc list-inside text-sm md:text-base">
              Introduction to CBA
              <li className="text-sm text-gray-600 font-normal">
                Letter of introduction from Employer OR
              </li>
              <li className="text-sm text-gray-600 font-normal">
                A referral from an existing CBA account Holder
              </li>
            </ul>
            <ul className="font-semibold list-disc list-inside text-sm md:text-base">
              Proof of Residence (Employed)
              <li className="text-sm text-gray-600 font-normal">
                Utility Bill (not more than 3 months old) OR
              </li>
              <li className="text-sm text-gray-600 font-normal">
                Employment Contract OR
              </li>
              <li className="text-sm text-gray-600 font-normal">
                Letter from employer showing residence
              </li>
            </ul>
            <ul className="font-semibold list-disc list-inside text-sm md:text-base">
              Proof of Residence (Self-Employed)
              <li className="text-sm text-gray-600 font-normal">
                Utility Bill (not more than 3 months old) OR
              </li>
              <li className="text-sm text-gray-600 font-normal">
                Tenancy Agreement
              </li>
            </ul>
            <ul className="font-semibold list-disc list-inside text-sm md:text-base">
              Proof of Income (Employed)
              <li className="text-sm text-gray-600 font-normal">
                Letter of introduction from Employer OR
              </li>
              <li className="text-sm text-gray-600 font-normal">
                3 months bank statements where income is credited OR
              </li>
              <li className="text-sm text-gray-600 font-normal">
                Copy of current work contract
              </li>
            </ul>
            <div className="flex justify-end mt-10 ">
              <Button btnName="Continue" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
