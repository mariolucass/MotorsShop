import { AnimatePresence, motion } from "framer-motion";
import { iChildren } from "../../interfaces";
import {
  animateExitPresence,
  animateInitialPresence,
  animateShownPresence,
} from "../../libs/framer";

export const TransitionAnimation = ({ children }: iChildren) => (
  <AnimatePresence>
    <motion.div
      exit={animateExitPresence}
      animate={animateShownPresence}
      initial={animateInitialPresence}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
