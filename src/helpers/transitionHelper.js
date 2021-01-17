
// export const SwipeInOut = {
//   initial: { y: "100%" },
//   enter: { 
//     y: "100%",
//     transition: { duration: 2, ease: [0.455, 0.030, 0.515, 0.955] }
//   },
//   exit: {
//     y: "-100%", 
//     transition: { duration: 2, ease: [0.455, 0.030, 0.515, 0.955] }
//   }
// }

export const fade = {
  initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.7, ease: [0.455, 0.030, 0.515, 0.955] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: [0.455, 0.030, 0.515, 0.955]}
  }
}

export const fadeBump = {
  initial: { opacity: 0, y: 30 },
  enter: { 
    y: "0",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.455, 0.030, 0.515, 0.955] }
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.7, ease: [0.455, 0.030, 0.515, 0.955]}
  }
}

export const fadeBumpDelay = {
  initial: { opacity: 0, y: 25 },
  enter: { 
    y: "0",
    opacity: 1,
    transition: { duration: 0.7, delay: 0.2, ease: [0.455, 0.030, 0.515, 0.955] }
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.7, ease: [0.455, 0.030, 0.515, 0.955]}
  }
}

export const fadeBumpDelayLong = {
  initial: { opacity: 0, y: 25 },
  enter: { 
    y: "0",
    opacity: 1,
    transition: { duration: 0.7, delay: 0.4, ease: [0.455, 0.030, 0.515, 0.955] }
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.7, ease: [0.455, 0.030, 0.515, 0.955]}
  }
}


export const revealInOut = {
  initial: { y: "130%" },
  enter: { 
    y: "0%",
    transition: { duration: 0.85, ease: [0.445, 0.050, 0.550, 0.950] }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: [0.455, 0.030, 0.515, 0.955] }
  }
}