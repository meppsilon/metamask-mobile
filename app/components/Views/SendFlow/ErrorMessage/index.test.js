import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from './';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ErrorMessage', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Provider store={store}>
				<ErrorMessage errorMessage={'error'} />
			</Provider>
		);
		expect(wrapper.dive()).toMatchSnapshot();
	});
});
