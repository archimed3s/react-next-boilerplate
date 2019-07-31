/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';

import Header from './index';

describe('Header', () => {
	it('renders header with correct text', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper.text()).toEqual('norman');
	});
});
