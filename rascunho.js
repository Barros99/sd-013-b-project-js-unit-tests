const average = (arrayNumbers) => {
    if (arrayNumbers.length === 0) return undefined;
    for (let i = 0; i < arrayNumbers.length; i += 1) {
      if (typeof arrayNumbers[i] !== 'number') return undefined;
    }
    const total = arrayNumbers.reduce((c, v) => c + v);
    const avarage = total / arrayNumbers.length;
    return Math.ceil(avarage);
  };

console.log(average([0, 0, 0, 0, 0, 0, 1]));