import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Testing React App Component', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});