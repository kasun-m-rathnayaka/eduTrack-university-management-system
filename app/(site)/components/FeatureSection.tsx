import { featureSectionData } from "@/data";
import { Check } from "lucide-react";
import React from "react";

const FeatureSection = () => {
  return (
    <section className={`bg-white pb-6`}>
      <div className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`}>
        <div className={`container mx-auto px-6 p-6 bg-white`}>
          <div className={`mb-16 text-center`}>
            <h4
              className={`text-base text-indigo-600 font-semibold tracking-wide uppercase`}
            >
              Expected Benefits
            </h4>
            <p
              className={`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 capitalize`}
            >
              How we can change{" "}
              <span className="text-primary-text">the game</span>
            </p>
          </div>
          <div className={`flex flex-wrap my-12`}>
            {featureSectionData.map(({ title, description }, index) => (
              <div
                key={index}
                className={`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`}
              >
                <div className={`flex items-center mb-6`}>
                  <Check
                    width={20}
                    height={20}
                    fill="currentColor"
                    className={`h-6 w-6 text-indigo-500`}
                  />
                  <div className={`ml-4 text-xl`}>{title}</div>
                </div>
                <p className={`leading-loose text-gray-500 `}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
