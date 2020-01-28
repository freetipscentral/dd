import React from 'react';
import Auxillury from '../../hoc/Auxillury'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuizOption from './QuizOption';

configure({adapter: new Adapter()});

describe('<QuizOption />', () => {
    it('should render Auxillury', () => {
        const wrapper = shallow(<QuizOption />);
        expect(wrapper.find(Auxillury)).toHaveLength(1);
    });
});