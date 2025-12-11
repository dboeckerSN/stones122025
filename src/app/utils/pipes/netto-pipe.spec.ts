import { BruttoNetto, NettoPipe } from './netto-pipe';

describe('NettoPipe', () => {
  const pipe = new NettoPipe();
  it('calculates netto correctly', () => {
    const price = 119;
    const tax = 19;
    expect(pipe.transform(price, tax)).toBe(100);
  });

  it('calculates netto with 7% correctly', () => {
    const price = 214;
    const tax = 7;
    expect(pipe.transform(price, tax)).toBe(200);
  });

  it('calculates brutto correctly if type brutto is passed', () => {
    const price = 200;
    const tax = 10;
    expect(pipe.transform(price, tax, 'brutto')).toBeCloseTo(220);
  });

  it.each([
    [214, 7, undefined, 200],
    [119, 19, undefined, 100],
    [200, 10, 'brutto' as BruttoNetto, 220],
    [119, undefined, undefined, 100],
  ])(
    'should calculate correctly for price: %s, tax: %s, type: %s, erwartetes Ergebnis: %s',
    (
      price: number,
      tax: number | undefined,
      type: BruttoNetto | undefined,
      expectedValue: number
    ) => {
      expect(pipe.transform(price, tax, type)).toBeCloseTo(expectedValue);
    }
  );

  it('calculates netto with tax 19 if no tax and no type is passed', () => {
    const price = 119;
    expect(pipe.transform(price)).toBe(100);
  });
});
