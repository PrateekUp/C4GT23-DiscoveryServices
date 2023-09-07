# Karmayogi: Dicovery of Training Institutes

## Code4GovtTech 2023

### Deployed Portal (MVP): [https://c4-gt-23-discovery-services.vercel.app/](https://c4-gt-23-discovery-services.vercel.app/)

### Introduction:

C4GT23-DiscoveryServices is an MVP (Minimum Viable Product) crafted to enhance the functionalities of the iGOT KarmaYogi Platform. Drawing from the DSEP specification, which is tailored for decentralized education, this project introduces a Common Discovery Protocol. The core aim is to provide a standardized method for discovering Training Products, Mentors, and Training Institutes within the iGOT KarmaYogi Platform.

### Use Case:

Employee training and development often face challenges in venue booking. Organizations frequently opt for external venues, neglecting resources like existing infrastructure layed by training institutes. This project augments the iGOT platform, enabling users to discover and book rooms in training institutes and related assets seamlessly. Users can now reserve venues with the desired amenities, for specific time slots, and in preferred locations, all integrated with the [DSEP](https://github.com/beckn/DSEP-Specification) network.

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

## App Flow

C4GT23-DiscoveryServices, being an MVP, has a streamlined flow to ensure ease of use while demonstrating its core functionalities:

1. **Login/Signup:** The current version doesn't have a comprehensive login/signup flow (frontend). Instead, we've implemented a hardcoded method to simulate user account creation and login.

2. **Search with Filters:** Users can apply their desired filters to search for available rooms. This search criteria is sent to our backend API as a POST request payload, and in response, a list of matching rooms is returned. You can go to each room by clicking on it.

3. **Room Booking:**
   - Rooms available for booking are displayed based on the search criteria.
   - Timeslots for each room are color-coded:
     - **Gray & Un-clickable:** Represents timeslots that are already booked.
     - **Green & Clickable:** Indicates available timeslots that can be booked.
4. **Booking Confirmation:**
   - Clicking on an available timeslot opens a dialog box prompting the user to fill in additional information.
   - After filling out the form and clicking "Book", a confirmation toast will appear if the booking is successful. If there's an issue, an error message will be displayed.

By following this flow, users can effortlessly discover and book rooms as per their requirements.

## Contribution

We warmly welcome contributions to the C4GT23-DiscoveryServices project. If you're interested in contributing, please follow the guidelines below:

1. **Create an Issue:** Before starting any work, please create an issue in the repository detailing the feature, enhancement, or bug fix you wish to contribute. This helps in discussing the potential changes and avoids any overlapping efforts.

2. **Detailed Pull Request (PR):** Once you've made your changes, submit a detailed PR. Ensure that your PR description clearly describes the changes made, the issue it addresses, and any other relevant information to assist in the review process.

By adhering to these guidelines, we can maintain a smooth and efficient contribution process. Thank you for your interest and efforts!
