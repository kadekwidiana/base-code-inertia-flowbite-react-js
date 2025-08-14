# Base Code Inertia + Flowbite React JS

A starter template for web application development using Laravel 12, InertiaJS, ReactJS, and Flowbite React. It comes with a basic component structure, sidebar, routing, and Tailwind CSS-based UI integration to facilitate the development of modern, responsive interfaces.

---

## Required Environment

-   **PHP**: 8.2.x
-   **Node.js**: 20.x
-   **NPM**: 10.x

---

## How to Clone and Run the Project

Follow these steps to run this project locally:

1. **Open your terminal**.
2. Clone the repository:
    ```bash
    git clone https://github.com/kadekwidiana/base-code-inertia-flowbite-react-js.git
    ```
3. Navigate to the project folder:
    ```bash
    cd base-code-inertia-flowbite-react-js
    ```
4. Install Laravel dependencies:
    ```bash
    composer install
    ```
5. Install JavaScript dependencies:
    ```bash
    npm install
    ```
6. Copy the configuration file:
    ```bash
    cp .env.example .env
    ```
7. Generate the application key:
    ```bash
    php artisan key:generate
    ```
8. Run the database migrations:
    ```bash
    php artisan migrate
    ```
9. Seed the database with initial data:
    ```bash
    php artisan db:seed
    ```
10. Build and run the application:
    ```bash
    npm run dev
    ```
    Or for production build:
    ```bash
    npm run build
    ```
11. Start the Laravel local server:
    ```bash
    php artisan serve
    ```
12. Open the application in your browser:
    ```
    http://127.0.0.1:8000/
    ```

---

## Login Credentials

### CUSTOMER

-   **Email**: customer@example.com
-   **Password**: password123

### ADMIN

-   **Email**: admin1@example.com
-   **Password**: password123

---

## License

This project is licensed under the [MIT License](LICENSE).
