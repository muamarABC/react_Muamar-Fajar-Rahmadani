import { render, screen, fireEvent } from '@testing-library/react';
import Main from './main';

describe('Main', () => {
    it('should save and display the selected values', () => {
        render(<Main />);
        const nameInput = screen.getByLabelText(/name/i);
        const descriptionInput = screen.getByLabelText(/deskripsi/i);
        fireEvent.change(nameInput, { target: { value: 'Produk Baru' } });
        fireEvent.change(descriptionInput, { target: { value: 'Deskripsi Produk Baru' } });
        const submitButton = screen.getByRole('button', { name: /tambahkan produk/i });
        fireEvent.click(submitButton);
        expect(screen.getByText(/produk baru/i)).toBeInTheDocument();
        expect(screen.getByText(/deskripsi produk baru/i)).toBeInTheDocument();
    });
});
