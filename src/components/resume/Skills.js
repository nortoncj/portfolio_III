import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Data & Design Skills
          </h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <table className="overflow-x-hidden ">
            <tr className="w-full h-2 bgOpacity rounded-md  mt-4">
              <td className="text-sm uppercase font-medium my-8">Excel</td>
              <td className="text-sm uppercase font-medium">
                Google analytics
              </td>
              <td>Photoshop</td>
            </tr>
            <tr className="w-full h-2 bgOpacity rounded-md mt-4">
              <td className="text-sm uppercase font-medium">MYSQL</td>
              <td className="text-sm uppercase font-medium">Mongo Db</td>
              <td>Pivot Tables</td>
            </tr>
            <tr className="mt-4">
              <td className="text-sm uppercase font-medium">Power BI</td>
              <td className="text-sm uppercase font-medium">Tableu</td>
              <td>MatLab</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>Pandas</td>
              <td>MatplotLib</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          <table className="overflow-x-hidden ">
            <tr className="w-full h-2 bgOpacity rounded-md  mt-4">
              <td className="text-sm uppercase font-medium my-8">Html</td>
              <td className="text-sm uppercase font-medium">css</td>
              <td className="text-sm uppercase font-medium">node</td>
            </tr>
            <tr className="mt-4">
              <td className="text-sm uppercase font-medium">javascript</td>
              <td className="text-sm uppercase font-medium">react</td>
              <td className="text-sm uppercase font-medium">Typescript</td>
            </tr>
            <tr className="mt-4">
              <td className="text-sm uppercase font-medium">php</td>
              <td className="text-sm uppercase font-medium">Wordpress</td>
              <td className="text-sm uppercase font-medium">laravel</td>
            </tr>
            <tr>
            <td className="text-sm uppercase font-medium">java</td>
            <td className="text-sm uppercase font-medium">c#</td>
            <td className="text-sm uppercase font-medium">Shopify</td>
            </tr>
            <tr>
              <td className="text-sm uppercase font-medium">html emails</td>
            <td className="text-sm uppercase font-medium">AWS</td>
            <td className="text-sm uppercase font-medium">Azure</td>
            </tr>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
