
import Image from 'next/image';
import React from 'react'

const ListSection = () => {
    const listItems = [
        {
          title: `Efficient Management`,
          description: `Streamline and automate university operations to reduce administrative workload.`,
        },
        {
          title: `Improved Communication`,
          description: ` Facilitate better communication between students, faculty, and administrative staff.`,
        },
        {
          title: `Easy Access to Information`,
          description: `Provide students, faculty, and staff with easy access to vital information and services.`,
        },
      ];
      
  return (
    <div><section className={`lg:py-28 pt-28 overflow-hidden`}>
    <div className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`}>
      <div className={`mb-16 text-center`}>
        <h2
          className={`text-base text-indigo-600 font-semibold tracking-wide uppercase`}
        >
          Objectives
        </h2>
        <p
          className={`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`}
        >
          Transform into Digital Education
        </p>
      </div>
      <div className={`flex flex-col md:flex-row -mx-8 items-center justify-center`}>
        <div className={`w-full md:w-1/2 px-8`}>
          <ul className={`space-y-12`}>
            {listItems.map((item, index) => (
              <li className={`flex -mx-4`} key={item.title}>
                <div className={`px-4`}>
                  <span
                    className={`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={`px-4`}>
                  <h3 className={`my-4 text-xl font-semibold`}>{item.title}</h3>
                  <p className={`text-gray-500 leading-loose`}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`w-full md:w-1/2`}>
          <div
            className={`lg:mb-12 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`}
          >
            <Image src={'/site/uni.avif'} width={500} height={500} alt='uni' className=' rounded-md'/>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default ListSection
