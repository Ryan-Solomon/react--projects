import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BirthdayReminderPage from './../BirthdayReminderPage';

describe('Birthday Reminder Page', () => {
  test('renders App component', async () => {
    render(<BirthdayReminderPage />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('birthdays today')).toBeInTheDocument();
    });
    screen.debug();
  });
});
