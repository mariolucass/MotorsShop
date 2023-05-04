import { motion } from "framer-motion";
import { iChildren } from "../../interfaces";
import {
  animateTransitionPresence,
  animateInitialPresence,
  animateShownPresence,
} from "../../libs/framer";

export const TransitionAnimation = ({ children }: iChildren) => (
  <motion.div
    animate={animateShownPresence}
    initial={animateInitialPresence}
    transition={animateTransitionPresence}
  >
    {children}
  </motion.div>
);
