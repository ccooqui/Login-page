import React from 'react';
import  { createRenderer } from 'react-test-renderer/shallow';
import { shallow, configure, mount } from 'enzyme';
import LoginForm from './LoginForm';

const setup = () => {
    const props = {
      };

    const renderer = createRenderer();
    renderer.render(<LoginForm {...props} />);
    const output = renderer.getRenderOutput();
  
    return {
      props: props,
      output: output,
      renderer: renderer
    }
  };

describe('Render Input Fields', () => {
    it('should render properly', () => {
        const { output } = setup();
        expect(output.type).toBe('form');

        const emailInput = output.props.children[1];
        const passwordInput = output.props.children[3];

        expect(emailInput.type).toBe('input');
        expect(emailInput.props.placeholder).toBe('Email Address');
        expect(passwordInput.type).toBe('input');
        expect(passwordInput.props.placeholder).toBe('Password');
    })    
})