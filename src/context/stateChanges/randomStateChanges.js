export function increment(currentState) {
  let { randomStuffThatIDoNotNeedYet } = currentState;
  randomStuffThatIDoNotNeedYet.value += 1;

  return { randomStuffThatIDoNotNeedYet };
}