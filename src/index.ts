import { serve } from "bun";
import index from "./index.html";

const routes = {
  // Serve index.html for all unmatched routes.
  "/*": index,

  "/api/hello": {
    async GET() {
      return Response.json({
        message: "Hello, world!",
        method: "GET",
      });
    },
    async PUT() {
      return Response.json({
        message: "Hello, world!",
        method: "PUT",
      });
    },
  },

  "/api/hello/:name": async req => {
    const name = req.params.name;
    return Response.json({
      message: `Hello, ${name}!`,
    });
  },
};

const development = process.env.NODE_ENV !== "production" && {
  // Enable browser hot reloading in development.
  hmr: true,

  // Echo console logs from the browser to the server.
  console: true,
};

const requestedPort = Number(process.env.PORT || 3000);
const fallbackPorts = [requestedPort, 3000, 3001, 3002, 3003, 3004, 3005].filter(
  (port, index, ports) => Number.isInteger(port) && port > 0 && ports.indexOf(port) === index,
);

let server;
let lastError;

for (const port of fallbackPorts) {
  try {
    server = serve({
      port,
      routes,
      development,
    });
    break;
  } catch (error) {
    lastError = error;

    if ((error as { code?: string }).code !== "EADDRINUSE") {
      throw error;
    }
  }
}

if (!server) {
  throw lastError;
}

console.log(`Server running at ${server.url}`);
