const path = require("path");
const nextDir = path.join(
  __dirname,
  "node_modules/.pnpm/next@16.2.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next"
);

process.env.NODE_ENV = "development";
process.env.NEXT_RUNTIME = "nodejs";
process.env.NEXT_PRIVATE_START_TIME = Date.now().toString();

// Set up Turbopack
process.env.__NEXT_DEV_TURBOPACK = "true";

const nextDevPath = path.join(nextDir, "dist/cli/next-dev.js");
const { nextDev } = require(nextDevPath);

nextDev(
  { port: 3000, hostname: "0.0.0.0" },
  "default",
  __dirname
);
