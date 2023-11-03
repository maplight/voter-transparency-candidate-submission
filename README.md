# Candidate Info Submission Form for CA League of Women Voters
This repository contains the base form that would allow for the League of Women Voters to send out to candidates for them to be able to update their specific candidate profiles.

## Installation Process:
After cloning the repo run
```bash
npm i
```

Then after all of the dependencies are installed, to run the build use
```bash
npm run dev
```

You should be able to see the form on `http://localhost:3000`

## TODO:
1. Authentcation:
- Need to have a way to send this informaiton out to candidates to be able to fill it out for only themselves.
- Proposed solution was to create a unique code in the url that we would be able to "authenticate" the candidate and allow them to only update themselves.
2. File upload:
- The image selecter has not been hooked up just yet.
- We should also indicate what size is appropriate for the candidate headshot.
- Explicitly say what types of image formats are accepted.
- Possibly have somehting on the server that converts the images from their inputted formats to `.webp` formats to display on Voter's Edge in a next gen format.
3. Submission abilities:
- The form currently goes nowhere.
- We were going to be hooking it up to Strapi to save it with the current informaiton that we already have.
4. Componentization:
- Currently it is a quick ans dirty way to set up the form so that we could release a proof of concept (POC) to show progress on the project.

## Technologies used:
- Remix: [Site](https://remix.run) | [Docs - en](https://remix.run/docs/en/main)
- tailwindcss: [Site](https://tailwindcss.com) | [Docs](https://tailwindcss.com/docs/installation)
- Prettier: [Site](https://prettier.io) | [Docs - en](https://prettier.io/docs/en/)
- ESLint: [Site](https://eslint.org) | [Docs](https://eslint.org/docs/latest/)