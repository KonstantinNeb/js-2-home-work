// Калькулятор, который умеет выполнять сложение, вычитание, деление, умножение, целочисленное деление, нахождение остатка от деления
// Класс Calc с методами sum, sub, mult, div, mod

var calc = new Calc;

describe('Checking sum', function () {
  it('first arg is 1, second arg is 2, result is 3', function () {
    expect(calc.sum(1, 2)).toBe(3);
  });

  it('first arg is "1", second arg is 2, result is 3', function () {
    expect(calc.sum('1', 2)).toBe(3);
  });

  it('first arg is "1", second arg is "2", result is 3', function () {
    expect(calc.sum('1', '2')).toBe(3);
  });

  it('first arg is "abc", second arg is 2, result is null', function () {
    expect(calc.sum('abc', 2)).toBeNull(3);
  });

  it('first arg is "123abc",no second arg, result is null', function () {
    expect(calc.sum('123abc')).toBeNull();
  });

  it('No args, result is null', function () {
    expect(calc.sum()).toBeNull();
  })
});

describe('Checking sub', function () {
  it('first arg is 2, second arg is 1, result is 1', function () {
    expect(calc.sub(2, 1)).toBe(1);
  });

  it('first arg is "2", second arg is 1, result is 1', function () {
    expect(calc.sub('2', 1)).toBe(1);
  });

  it('first arg is "2", second arg is "1", result is 1', function () {
    expect(calc.sub('2', '1')).toBe(1);
  });

  it('first arg is "abc", second arg is 1, result is null', function () {
    expect(calc.sub('abc', 1)).toBeNull(1);
  });

  it('first arg is "123abc",no second arg, result is null', function () {
    expect(calc.sub('123abc')).toBeNull();
  });

  it('No args, result is null', function () {
    expect(calc.sub()).toBeNull();
  })
});

describe('Checking mult', function () {
  it('first arg is 2, second arg is 2, result is 4', function () {
    expect(calc.mult(2, 2)).toBe(4);
  });

  it('first arg is "2", second arg is 2, result is 4', function () {
    expect(calc.mult('2', 2)).toBe(4);
  });

  it('first arg is "2", second arg is "2", result is 4', function () {
    expect(calc.mult('2', '2')).toBe(4);
  });

  it('first arg is "abc", second arg is 1, result is null', function () {
    expect(calc.mult('abc', 2)).toBeNull(4);
  });

  it('first arg is "123abc",no second arg, result is null', function () {
    expect(calc.mult('123abc')).toBeNull();
  });

  it('No args, result is null', function () {
    expect(calc.mult()).toBeNull();
  })
});

describe('Checking div', function () {
  it('first arg is 2, second arg is 2, result is 1', function () {
    expect(calc.div(2, 2)).toBe(1);
  });

  it('first arg is "2", second arg is 2, result is 1', function () {
    expect(calc.div('2', 2)).toBe(1);
  });

  it('first arg is "2", second arg is "2", result is 2', function () {
    expect(calc.div('2', '2')).toBe(1);
  });

  it('first arg is "abc", second arg is 1, result is null', function () {
    expect(calc.div('abc', 2)).toBeNull(1);
  });

  it('first arg is "123abc",no second arg, result is null', function () {
    expect(calc.div('123abc')).toBeNull();
  });

  it('No args, result is null', function () {
    expect(calc.div()).toBeNull();
  })
});

describe('Checking mod', function () {
  it('first arg is 5, second arg is 2, result is 1', function () {
    expect(calc.mod(5, 2)).toBe(1);
  });

  it('first arg is "5", second arg is 2, result is 1', function () {
    expect(calc.mod('5', 2)).toBe(1);
  });

  it('first arg is "5", second arg is "2", result is 1', function () {
    expect(calc.mod('5', '2')).toBe(1);
  });

  it('first arg is "abc", second arg is 1, result is null', function () {
    expect(calc.mod('abc', 2)).toBeNull(1);
  });

  it('first arg is "123abc",no second arg, result is null', function () {
    expect(calc.mod('123abc')).toBeNull();
  });

  it('No args, result is null', function () {
    expect(calc.mod()).toBeNull();
  })
});