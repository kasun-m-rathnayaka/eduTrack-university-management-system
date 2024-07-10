import { articles } from "@/data";
import { ArrowBigRight } from "lucide-react";

const CasesSection = () => {
  return (
    <section>
      <div className={`w-full min-h-screen bg-gray-900 relative mt-20`}>
        <div
          className={`absolute left-0 top-0 h-screen w-full overflow-hidden`}
        >
          {/* <ParticleBg /> */}
        </div>
        <div className={`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-32`}>
          <h1
            className={`text-white text-4xl lg:text-7xl font-bold text-center`}
          >
            What will you build?
          </h1>
          <p className={`text-white text-center text-xl mt-12`}>
            Don’t just take our word for it — see what leaders in digital are
            saying
          </p>
          <div className={`mx-auto pt-24`}>
            <div className={`w-full flex flex-wrap justify-around`}>
              {articles.map((article) => (
                <div
                  key={article.title}
                  className={`xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`}
                >
                  <div className={`h-64 z-20`}>
                    <img
                      src={article.src}
                      alt={article.alt}
                      className={`h-full w-full object-cover overflow-hidden rounded`}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div
                    className={`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`}
                  >
                    <p
                      className={`uppercase text-sm text-gray-700 text-center pb-1`}
                    >
                      {article.heading}
                    </p>
                    <p className={`text-gray-500 text-center pb-1 text-sm line-clamp-3`}>
                      {article.title}
                    </p>
                  </div>
                </div>
              ))}
              <span
                className={`-mt-8 pb-12 lg:mt-4 flex items-center text-lg
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`}
              >
                See all Courses
                <ArrowBigRight className={`h-6 w-6 fill-current ml-2`} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
