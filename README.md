# Umberto Calogero Messina's Personal Portfolio

This is a front-end project that implements my personal portfolio, developed to showcase my skills, projects, and experience in the web development field.

## Project Structure

The project is organized into several folders to keep the code modular and maintainable.

-   **/src**: Contains all the application's source code.
    -   **/assets**: Includes static files like images, icons, and fonts.
    -   **/components**: Contains reusable React components (e.g., Navbar, Footer, Contact).
    -   **/constants**: Definitions of constants used throughout the project.
    -   **/contexts**: Contains React contexts for global state management (e.g., `LanguageContext`).
    -   **/curriculum**: Hosts my CV's PDF file.
    -   **/hooks**: Contains reusable React custom hooks for logic.
    -   **/locales**: JSON translation files for internationalization (i18n).
    -   **/styles**: Global styles, styled-system utilities, and CSS resets.
-   **eslint.config.js**: Configuration file for ESLint, to ensure code consistency.
-   **vite.config.js**: Configuration file for Vite, the project's build tool.
-   **package.json**: Lists the project's dependencies and NPM scripts.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A next-generation build tool for front-end development.
-   **Styled-Components**: A library for writing CSS-in-JS, allowing the creation of components with encapsulated styles.
-   **i18next**: An internationalization framework to manage translations in multiple languages.
-   **ESLint**: A static code analysis tool to identify and fix problems.
-   **Node.js**: Used for the development environment and dependency management.

## Installation and Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Portfolio-Umberto.git
    cd Portfolio-Umberto
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm installed.
    ```bash
    npm install
    ```

3.  **Start the development server:**
    This command will start the application in development mode with hot-reloading.
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the port shown in the terminal) to view the project in your browser.

## Development Guidelines

-   **Code Conventions**: Follow the rules defined in the `eslint.config.js` file.
-   **Component Naming**: React file and component names should use `PascalCase` (e.g., `MyComponent.jsx`).
-   **CSS Classes and Styles**: Components styled with Styled-Components should follow the component name with a `.styles.js` suffix (e.g., `MyComponent.styles.js`).
-   **Commit Standards**: Use clear and descriptive commit messages, preferably following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. Example: `feat: Add contact section` or `fix: Correct display bug on mobile`.

## External Dependencies

The project has no dependencies on external APIs or databases. All information is managed statically or through local files (e.g., translations).

## Additional Notes

-   **Known Issues**: There are currently no significant known issues.
-   **Future Features**:
    -   Add a blog or articles section.
    -   More complex animations for page transitions.
-   **Useful Links**:
    -   [React Documentation](https://reactjs.org/docs/getting-started.html)
    -   [Vite Documentation](https://vitejs.dev/guide/)
    -   [Styled-Components Documentation](https://styled-components.com/docs)
    -   [i18next Documentation](https://www.i18next.com/overview/getting-started)
