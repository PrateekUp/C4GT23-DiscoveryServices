# Karmayogi: Dicovery of Training Institutes

## Code4GovtTech 2023

### Deployed Portal (MVP): [https://c4-gt-23-discovery-services.vercel.app/](https://c4-gt-23-discovery-services.vercel.app/)

### Introduction:

C4GT23-DiscoveryServices is an MVP (Minimum Viable Product) crafted to enhance the functionalities of the iGOT KarmaYogi Platform. Drawing from the DSEP specification, which is tailored for decentralized education, this project introduces a Common Discovery Protocol. The core aim is to provide a standardized method for discovering Training Products, Mentors, and Training Institutes within the iGOT KarmaYogi Platform.

### Use Case:

Employee training and development often face challenges in venue booking. Organizations frequently opt for external venues, neglecting resources like existing infrastructure layed by training institutes. This project augments the iGOT platform, enabling users to discover and book rooms in training institutes and related assets seamlessly. Users can now reserve venues with the desired amenities, for specific time slots, and in preferred locations, all integrated with the DSEP network.

## Technical details:

### Frontend:

- **[ReactJs](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Components Library - Material UI](https://mui.com/material-ui/)**

### Backend:

- **APIs Used:**
  - **Search API:** [https://dev.elevate-apis.shikshalokam.org/karmayogi-bap/dsep/search](https://dev.elevate-apis.shikshalokam.org/karmayogi-bap/dsep/search)
  - **Confirm API:** [https://dev.elevate-apis.shikshalokam.org/karmayogi-bap/dsep/confirm](https://dev.elevate-apis.shikshalokam.org/karmayogi-bap/dsep/confirm)

The backend leverages two primary APIs, the search API and the confirm API, to facilitate the discovery and confirmation processes.

- **Collaboration with Shikshalokam:** Special thanks to the Shikshalokam team for allowing the adaptation of their current BPP implementation for mentor discovery. The implementation was modified to align with our specific use case for the discovery of training rooms/institutes. A heartfelt acknowledgment to Aakash, Kiran, Joffin, and Vishnu for their invaluable assistance with the BPP and BAP implementation.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
