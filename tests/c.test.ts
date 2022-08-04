import Foo from '../src/foo';

describe('restoreMock restores implementation declared in stubsSetup', () => {
    it('first test', () => {
        expect(Foo.stubbedFunction()).toBe('value from STUB');
    });

    it('restore before spy doesnt affect stub', () => {
        jest.restoreAllMocks();

        expect(Foo.stubbedFunction()).toBe('value from STUB');
    });

    it('spy', () => {
        jest.spyOn(Foo, 'stubbedFunction').mockImplementation(() => 'value from SPY');

        expect(Foo.stubbedFunction()).toBe('value from SPY');
    });

    it('restore after spy restore initial implementation', () => {
        expect(Foo.stubbedFunction()).toBe('value from SPY');

        jest.restoreAllMocks();

        expect(Foo.stubbedFunction()).toBe('value from STUB');
    });
});
