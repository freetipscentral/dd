import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
import Navbar from 'react-bootstrap/Navbar';

configure({adapter: new Adapter()});

describe('<Footer />', () => {
    it('should render Navbar', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find(Navbar)).toHaveLength(1);
    });
});