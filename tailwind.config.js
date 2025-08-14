import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        flowbite.content(),
    ],

    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#056840',
                second: '#e80a5d',
                bg: '#ffd6e4',
            },
        },
    },
    safelist: [
        {
            pattern: /^bg-/, // any class that starts with "bg-" (pake cara ini semua bg- akan di pakai/dibuild di final CSS)
        },
    ],
    plugins: [forms, flowbite.content()],
};
