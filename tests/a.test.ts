import Foo from '../src/foo';

describe('', () => {
    it('first test', () => {
        expect(Foo.stubbedFunction()).toBe('value from STUB');
    });

    it('reset before spy doesnt change anything', () => {
        jest.resetAllMocks();

        expect(Foo.stubbedFunction()).toBe('value from STUB');
    });

    it('third test', () => {
        jest.spyOn(Foo, 'stubbedFunction').mockImplementation(() => 'value from SPY');

        expect(Foo.stubbedFunction()).toBe('value from SPY');
    });

    it('no longer stubbed after reset', () => {
        jest.resetAllMocks();

        expect(Foo.stubbedFunction()).toBeUndefined();
    });
});
