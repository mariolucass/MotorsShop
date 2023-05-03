export const animateHiddenUl = {
  clipPath: "inset(10% 50% 90% 50% round 10px)",
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

export const animateShownUl = {
  clipPath: "inset(0% 0% 0% 0% round 10px)",
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

export const animateHiddenLi = {
  opacity: 0,
  scale: 0.3,
  filter: "blur(20px)",
};

export const animateShownLi = {
  opacity: 1,
  scale: 1,
  filter: "blur(0px)",
};

export const animateShownPresence = {
  opacity: 1,
  scale: 1,
  filter: "blur(0px)",
  transition: {
    ease: "easeOut",
  },
};

export const animateExitPresence = {
  opacity: 0,
  scale: 0,
  transition: {
    ease: "easeOut",
  },
};

export const animateInitialPresence = {
  opacity: 0,
  scale: 0.9,
  filter: "blur(5px)",
  transition: {
    ease: "easeOut",
  },
};
