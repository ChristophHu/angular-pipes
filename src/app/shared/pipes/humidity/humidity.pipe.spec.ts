import { HumidityPipe } from './humidity.pipe';

describe('HumidityPipe', () => {
  it('create an instance', () => {
    const pipe = new HumidityPipe();
    expect(pipe).toBeTruthy();
  });
});
