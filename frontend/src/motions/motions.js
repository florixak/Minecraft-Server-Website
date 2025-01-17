export const ShowIn = (delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
    },
  },
  exit: {
    opacity: 0.5,
    transition: { duration: 0.8, delay: delay },
  },
});

export const ScaleIn = (delay) => ({
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: delay,
    },
  },
});

export const SlideToRight = (delay) => ({
  hidden: { opacity: 0, x: "-5%" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
  exit: {
    opacity: 0,
    x: "5%",
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
});

export const SlideToLeft = (delay) => ({
  hidden: {
    opacity: 0,
    x: "5%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
  exit: {
    opacity: 0,
    x: "-5%",
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
});

export const SlideUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: "5%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
  exit: {
    opacity: 0,
    y: "5%",
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
});
