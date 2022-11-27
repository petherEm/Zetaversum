"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Zetaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:tetx-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Zetaversus </span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eum
        omnis illum? Animi in impedit sed tenetur tempore atque sint, facilis
        fuga excepturi magni. Numquam incidunt error non vel sint odio quam iste
        explicabo eligendi a? Adipisci labore maxime,
        <span className="font-extrabold text-white">
          quaerat, perferendis
        </span>{" "}
        neque enim qui hic reprehenderit, fuga porro quae. Expedita? Lorem
        ipsum, dolor sit amet consectetur adipisicing elit.
        <span className="font-extrabold text-white">Asperiores</span> veniam
        voluptatem commodi quibusdam cupiditate fugiat in maxime harum omnis
        tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
        esse.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
