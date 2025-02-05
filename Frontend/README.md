# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Routes

### Public Routes
- `/` - Start page ([`Start`](src/pages/Start.jsx))
- `/login` - User login page ([`UserLogin`](src/pages/UserLogin.jsx))
- `/signup` - User signup page ([`UserSignup`](src/pages/UserSignup.jsx))
- `/captian-login` - Captain login page ([`CaptianLogin`](src/pages/CaptianLogin.jsx))
- `/captian-signup` - Captain signup page ([`CaptianSignup`](src/pages/CaptianSignup.jsx))

### Protected Routes
- `/home` - User home page ([`Home`](src/pages/Home.jsx)), wrapped with [`UserProtectedWrapper`](src/pages/UserProtectedWrapper.jsx)
- `/user/logout` - User logout page ([`UserLogout`](src/pages/UserLogout.jsx)), wrapped with [`UserProtectedWrapper`](src/pages/UserProtectedWrapper.jsx)
- `/captian-home` - Captain home page ([`CaptianHome`](src/pages/CaptianHome.jsx)), wrapped with [`CaptianProtectedWrapper`](src/pages/CaptianProtectedWrapper.jsx)
- `/captian-logout` - Captain logout page ([`CaptianLogout`](src/pages/CaptianLogout.jsx)), wrapped with [`CaptianProtectedWrapper`](src/pages/CaptianProtectedWrapper.jsx)
- `/riding` - User riding page ([`Riding`](src/pages/Riding.jsx))
- `/captain-riding` - Captain riding page ([`CaptianRiding`](src/pages/CaptianRiding.jsx))

## Contexts
- [`UserContext`](src/contexts/UserContext.jsx) - Provides user data and authentication state.
- [`CaptianContext`](src/contexts/CaptianContext.jsx) - Provides captain data and authentication state.

## Components
- [`CaptianDetails`](src/components/CaptianDetails.jsx) - Displays captain details.
- [`ConfirmRide`](src/components/ConfirmRide.jsx) - Component to confirm a ride.
- [`ConfirmRidePopUp`](src/components/ConfirmRidePopUp.jsx) - Popup to confirm a ride.
- [`FinishRide`](src/components/FinishRide.jsx) - Component to finish a ride.
- [`LocationSearchPanel`](src/components/LocationSearchPanel.jsx) - Panel to search for locations.
- [`LookingForDriver`](src/components/LookingForDriver.jsx) - Component to show when looking for a driver.
- [`RidePopUp`](src/components/RidePopUp.jsx) - Popup to show ride details.
- [`VehiclePanel`](src/components/VehiclePanel.jsx) - Panel to choose a vehicle.
- [`WaitingForDriver`](src/components/WaitingForDriver.jsx) - Component to show when waiting for a driver.

## Configuration
- [`vite.config.js`](vite.config.js) - Vite configuration file.
- [`eslint.config.js`](eslint.config.js) - ESLint configuration file.
- [`.env`](.env) - Environment variables file.

## Scripts
- `dev` - Start the development server.
- `build` - Build the project for production.
- `lint` - Run ESLint.
- `preview` - Preview the production build.

## Dependencies
- `@gsap/react` - GSAP animations for React.
- `@tailwindcss/vite` - Tailwind CSS integration with Vite.
- `axios` - Promise-based HTTP client.
- `gsap` - GreenSock Animation Platform.
- `react` - React library.
- `react-dom` - React DOM library.
- `react-router-dom` - Declarative routing for React.
- `remixicon` - Remix Icon library.
- `tailwindcss` - Utility-first CSS framework.

## Dev Dependencies
- `@eslint/js` - ESLint JavaScript configuration.
- `@types/react` - TypeScript definitions for React.
- `@types/react-dom` - TypeScript definitions for React DOM.
- `@vitejs/plugin-react` - Vite plugin for React.
- `eslint` - Pluggable JavaScript linter.
- `eslint-plugin-react` - React specific linting rules for ESLint.
- `eslint-plugin-react-hooks` - ESLint rules for React Hooks.
- `eslint-plugin-react-refresh` - ESLint plugin for React Refresh.
- `globals` - Global variables for ESLint.
- `vite` - Next generation frontend tooling.