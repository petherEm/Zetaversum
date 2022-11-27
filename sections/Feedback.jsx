"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto lg:flex-row gap-6 flex flex-col`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Violetta
          </h4>
          <p className="mt-[8px] font-normal text-[14px] sm:text-[8px] sm:leading-[22px] leading-[16px] text-white ">
            Founder | Zetaversus.
          </p>
          <p className="mt-[24px] font-normal text-[18px] sm:text-[24px] sm:leading-[45px] leading-[39px] text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut
            qui sunt neque porro necessitatibus culpa quod ex, rem eum dolores,
            a mollitia. Recusandae dolores architecto tenetur laboriosam dicta
            quis vel deleniti, illo ipsam odit nulla nostrum repellendus
            doloribus illum?
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px]" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
