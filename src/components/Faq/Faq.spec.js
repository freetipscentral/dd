import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Faq from './Faq';

configure({adapter: new Adapter()});

describe('<Faq />', () => {
    it('should render section', () => {
        const wrapper = shallow(<Faq />);
        expect(wrapper.find('section')).toHaveLength(1);
    });
});