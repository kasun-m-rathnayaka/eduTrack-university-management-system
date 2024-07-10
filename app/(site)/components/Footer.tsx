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
        className={`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap justify-center items-center  pb-20`}
      >
        <div className={`flex items-center w-1/2`}>
          <img
            className={`h-12 w-12`}
            src="/icon.png"
            alt="logo"
            width={48}
            height={48}
          />
          <p className={`text-4xl text-primary-text font-bold`}>EduTrack</p>
        </div>
        <div className={`w-full lg:w-1/2 mt-12 lg:mt-0`}>
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
