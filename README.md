# Ngodingo Landing Page
The Ngodingo Landing Page project is a way to introduce Ngodingo, a programming community in Indonesia, to the general public. The landing page will provide information about Ngodingo, such as its mission, goals, and activities. 

[Visit the Page >](https://ngodingo.vercel.app/)


## Folder Structure

```md
.
├── common/             # contains shared codes:
│   ├── components/     # -- reusable React components.
│   ├── layouts/        # -- layout components that are used to define the overall structure of pages.
│   ├── hooks/          # -- custom React hooks that are used to simplify code.
│   └── utils/          # -- utility functions that are used to simplify code.
├── pages/              # contains the pages that make up the website.
├── services/           # contains the business logic of the website.
└── public/             # contains static files:
    ├── assets/         # -- static assets such as images and icons.
    └── static-db/      # -- static data such as blog post and project data.
```

Note: This project is created using Next.js, a React framework for building web applications. To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Architecture

This website is designed using a layered architecture schema, which has three main layers
- **View layer** at `pages/` directory: This layer is responsible for rendering the UI of the website. It contains the React components that are used to display the content of the website.
- **Logic layer** at `services/` directory: This layer is responsible for handling the business logic of the website. It contains the code that is used to interact with the database, fetch data from third-party APIs, and perform other tasks.
- **Data layer** at `public/static-db/` directory: This layer stores the static data of the website, such as blog posts and projects.


## Getting Started

To get started running the project locally, please follow the steps below.
1. First, clone the repository
```bash
git clone https://github.com/ngodingo/landing-page.git
```
2. Install dependencies and fetch data to your local machine
```bash
npm install
```
3. Then, Running your app
```bash
npm run dev
```