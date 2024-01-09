import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DashboardScreen from '../DashboardScreen';

describe('DashboardScreen', () => {
    it('renders correctly', () => {
        const { getByText } = render(<DashboardScreen />);
        expect(getByText('IPO Dashboard')).toBeTruthy();
    });

    it('displays IPO data by default', () => {
        const { getByText } = render(<DashboardScreen />);
        expect(getByText('Company Name:')).toBeTruthy();
    });

    it('toggles between IPO Data and Currency Exchange', () => {
        const { getByText } = render(<DashboardScreen />);

        fireEvent.press(getByText('Currency Exchange'));
        expect(getByText('Currency Exchange')).toBeTruthy();

        fireEvent.press(getByText('IPO Data'));
        expect(getByText('Company Name:')).toBeTruthy();
    });

});
