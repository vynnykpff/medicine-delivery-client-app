type ReturnValue = {
  amount: number;
  isValid: boolean;
};

const MAX_AMOUNT_LENGTH = 2;
const MIN_VALID_VALUE = 1;

export const getMaxAvailableAmount = (amount: number): ReturnValue => {
  if (amount < MIN_VALID_VALUE) {
    return {
      amount,
      isValid: false,
    };
  }

  const isValid = amount.toString().length <= MAX_AMOUNT_LENGTH;

  return { amount, isValid };
};
