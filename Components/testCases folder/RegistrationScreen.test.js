import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegistrationScreen from '../RegistrationScreen';

describe('RegistrationScreen', () => {
    it('renders correctly', () => {
        const { getByText, getByPlaceholderText } = render(<RegistrationScreen />);

        expect(getByText('Create an Account')).toBeTruthy();
        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText('Register')).toBeTruthy();
    });

    it('allows user to input email and password', () => {
        const { getByPlaceholderText } = render(<RegistrationScreen />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'testPassword123');

        expect(emailInput.props.value).toBe('test@example.com');
        expect(passwordInput.props.value).toBe('testPassword123');
    });

    it('calls handleRegistration when Register button is pressed', () => {
        const { getByText, getByPlaceholderText } = render(<RegistrationScreen />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'testPassword123');

        const registerButton = getByText('Register');
        fireEvent.press(registerButton);

    });

});
