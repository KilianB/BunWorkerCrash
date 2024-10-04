import { PrismaClient } from "@prisma/client";

// prevents TS errors
declare var self: Worker;

/**
 *
 * take a look at raw ais data and normalize them into the processed state.
 * If we encounter a port call insert the info in the route or trip info table.
 */

const prisma = new PrismaClient();

self.onmessage = () => {
  throw new Error("Error");
};
