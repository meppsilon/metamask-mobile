import React from 'react';
import { shallow } from 'enzyme';
import AddCustomCollectible from './';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const initialState = {
	engine: {
		backgroundState: {
			PreferencesController: {
				selectedAddress: '0x1'
			}
		}
	}
};
const store = mockStore(initialState);

describe('AddCustomCollectible', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Provider store={store}>
				<AddCustomCollectible route={{ params: {} }} />
			</Provider>
		);
		expect(wrapper.dive()).toMatchSnapshot();
	});
});
