import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';

describe('LoginScreen', () => {
    it('renders correctly', () => {
        const { getByText, getByPlaceholderText } = render(<LoginScreen />);

        expect(getByText('Welcome Back!')).toBeTruthy();
        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
    });

    it('allows user to input email and password', () => {
        const { getByPlaceholderText } = render(<LoginScreen />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'testPassword123');

        expect(emailInput.props.value).toBe('test@example.com');
        expect(passwordInput.props.value).toBe('testPassword123');
    });

    it('calls handleLogin when Login button is pressed', () => {
        const { getByText, getByPlaceholderText } = render(<LoginScreen />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'testPassword123');

        const loginButton = getByText('Login');
        fireEvent.press(loginButton);

    });

    it('displays error message for invalid credentials', () => {
        const { getByText, getByPlaceholderText } = render(<LoginScreen />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'invalid@example.com');
        fireEvent.changeText(passwordInput, 'invalidPassword');

        const loginButton = getByText('Login');
        fireEvent.press(loginButton);

        expect(getByText('Invalid credentials. Please try again.')).toBeTruthy();
    });

});
