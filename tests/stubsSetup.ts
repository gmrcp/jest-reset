import sinon from 'sinon';
import Foo from '../src/foo';

sinon.stub(Foo, 'stubbedFunction').callsFake(() => 'value from STUB');