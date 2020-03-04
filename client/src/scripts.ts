import confetti from "canvas-confetti";

const randomConfetti = () => {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2
    }
  });
};

const leftRightConfetti = () => {
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  confetti({
    particleCount: 100,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });
};

const streakConfetti = () => {
  const amount = Math.floor(Math.random() * 6 + 1);
  for (let i = 0; i < amount; i++) {
    setTimeout(
      () =>
        confetti({
          particleCount: 100,
          startVelocity: 30,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          }
        }),
      i * 100
    );
  }
};

export function party(number = Math.floor(Math.random() * 10)) {
  switch (number) {
    case 1:
      randomConfetti();
      break;
    case 2:
      leftRightConfetti();
      break;
    case 3:
      streakConfetti();
      break;
    default:
      confetti();
  }
  return number;
}
