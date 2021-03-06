import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const rule = 'What is the result of the expression?';
const valueMin = 1;
const valueMax = 100;

const makeGameData = () => {
  const generateData = (num1, num2) => {
    switch (generateNumber(1, 3)) {
      case 1:
        return cons(`${num1} + ${num2}`, `${num1 + num2}`);
      case 2:
        return cons(`${num1} - ${num2}`, `${num1 - num2}`);
      default:
        return cons(`${num1} * ${num2}`, `${num1 * num2}`);
    }
  };

  const num1 = generateNumber(valueMin, valueMax);
  const num2 = generateNumber(valueMin, valueMax);
  return generateData(num1, num2);
};

export default () => makeGame(makeGameData, rule);
