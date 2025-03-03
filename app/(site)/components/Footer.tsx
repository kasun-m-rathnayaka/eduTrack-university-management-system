import { Button } from "@/components/ui/button";

const productLinks = [
  `Features`,
  `Customers`,
  `Platform`,
  `Pricing`,
  `Enterprise`,
  `What's new?`,
];
const aboutLinks = [
  `About Us`,
  `Careers`,
  `Leadership`,
  `Blog`,
  `Events`,
  `Press`,
];
const resourceLinks = [
  `Get started`,
  `Guides`,
  `Tools`,
  `Case studies`,
  `Solutions`,
  `FAQs`,
  `Help Center`,
  `Training`,
  `Other resources`,
];

const Footer = () => {
  return (
    <footer className={`bg-white border-t border-gray-400 pt-14`}>
      <div
        className={`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap justify-items-start items-center  pb-20`}
      >
        <div className={`flex flex-col items-start w-1/2`}>
        <div className="flex ">
          <img
            className={`h-12 w-12`}
            src="/icon.png"
            alt="logo"
            width={48}
            height={48}
          />
          <p className={`text-4xl text-primary-text font-bold`}>EduTrack</p>
        </div>
          <p className="text-sm m-2 max-w-[500px]">The EduTrack University Management System will transform the operational efficiency of Veritas Heights University by leveraging modern technology to integrate and streamline key university functions. This proposal outlines a detailed plan for the development and implementation of EduTrack, ensuring a successful transition to a more efficient and connected academic environment.</p>
        </div>
        <div className={`w-full lg:w-1/2 lg:mt-0`}>
          <div className={`border border-gray-400 rounded-xl py-5 px-4`}>
            <h4 className={`font-mono text-sm uppercase mb-3`}>
              Subscribe our newsletter
            </h4>
            <div className={`flex w-full`}>
              <input
                aria-label="email address"
                type="text"
                className={`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`}
                placeholder="Enter your email"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-700 pb-5">
        @2024 All Rights Recived
      </div>
    </footer>
  );
};

export default Footer;
