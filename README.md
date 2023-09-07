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

## SetUp:

- **Clone the repository and install dependencies using**

  #### `npm install`

- **In the project directory, you can run:**

  #### `npm start`

- **Runs the app in the development mode.**
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.The page will reload when you make changes.
