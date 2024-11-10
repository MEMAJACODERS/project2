import { describe, it, expect, vi } from 'vitest';

globalThis.alert = vi.fn();

const headphones = [
    {
        name: 'Noise Cancelling Headphones',
        price: '$299',
        description: 'Experience immersive sound with active noise cancellation.',
        image: 'shop/noise cancelling headphones.jpg'
    },
    {
        name: 'Wireless Bluetooth Headphones',
        price: '$199',
        description: 'Wireless freedom with high-quality audio and long battery life.',
        image: 'shop/wireless bluetooth headphones.jpg'
    },
    {
        name: 'Over-Ear Headphones',
        price: '$149',
        description: 'Perfect for studio monitoring and professional use.',
        image: 'shop/over ear headphones.jpg'
    },
    {
        name: 'In-Ear Sports Headphones',
        price: '$79',
        description: 'Designed for active lifestyles, with sweat resistance.',
        image: 'shop/in ear headphones.jpg'
    }
];

let name = '';
let email = '';
let phone = '';
let product = '';
let quantity = 1;

function getSelectedHeadphone() {
    return headphones.find(headphone => headphone.name === product);
}

function validateAndSubmit() {
    if (!name || !email || !phone || !product || quantity < 1) {
        alert("Please fill in all required fields and ensure quantity is valid.");
        return;
    }
    alert("Form submitted successfully!");
}

describe('Form Tests', () => {
    it('should return the correct headphone based on product selection', () => {
        product = 'Wireless Bluetooth Headphones';
        const selectedHeadphone = getSelectedHeadphone();
        expect(selectedHeadphone).toEqual({
            name: 'Wireless Bluetooth Headphones',
            price: '$199',
            description: 'Wireless freedom with high-quality audio and long battery life.',
            image: 'shop/wireless bluetooth headphones.jpg'
        });
    });

    it('should return undefined if no product is selected', () => {
        product = '';
        const selectedHeadphone = getSelectedHeadphone();
        expect(selectedHeadphone).toBeUndefined();
    });

    it('should call alert with error message if required fields are missing', () => {
        name = '';
        email = 'test@example.com';
        phone = '0992-748-2650';
        product = 'Over-Ear Headphones';
        quantity = 1;

        validateAndSubmit();
        expect(globalThis.alert).toHaveBeenCalledWith("Please fill in all required fields and ensure quantity is valid.");
    });

    it('should call alert with success message if all fields are valid', () => {
        name = 'Katarina Karson';
        email = 'test@example.com';
        phone = '0927-890-9237';
        product = 'Noise Cancelling Headphones';
        quantity = 1;

        validateAndSubmit();
        expect(globalThis.alert).toHaveBeenCalledWith("Form submitted successfully!");
    });
});
