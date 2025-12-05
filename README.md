Movie Explorer Backend

A lightweight, TypeScript-based backend service built with Express for fetching and serving movie data. This backend is designed to be the API layer for a Movie Explorer application, acting as a gateway between the frontend UI and external movie APIs (such as TMDB or others you may integrate).

.

📌 Features

⚙️ Express server with TypeScript support

🌐 CORS-enabled API for seamless frontend communication

🔑 Environment variable management using dotenv

🔁 Auto-reload during development using ts-node-dev

🎬 Movie data fetching using axios

📦 Clear build pipeline outputting JS to build/

movie-explorer-backend/
├── src/
│   ├── index.ts        # Main server entry point
│   ├── routes/         # Express route handlers (recommended structure)
│   ├── controllers/    # API controller logic
│   ├── services/       # External API calls (Axios)
│   └── utils/          # Helpers / shared logic
│
├── .env                # Environment configuration (not committed)
├── tsconfig.json       # TypeScript compiler settings
├── package.json
└── README.md
