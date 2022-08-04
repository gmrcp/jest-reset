import Foo from '../src/foo';

describe('', () => {
    describe('First describe block', () => {
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
            expect(Foo.stubbedFunction()).toBe('value from SPY');

            jest.resetAllMocks();

            expect(Foo.stubbedFunction()).toBeUndefined();
        });
    });

    describe('Second describe block', () => {
        it('stubbedFunction continues not stubbed', () => {
            expect(Foo.stubbedFunction()).toBeUndefined();
        });
    })
})

describe('', () => {
    it('stubbedFunction continues not stubbed', () => {
        expect(Foo.stubbedFunction()).toBeUndefined();
    });
})