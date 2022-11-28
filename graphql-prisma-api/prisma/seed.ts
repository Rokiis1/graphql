import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  await prisma.user.create({
    data: {
      name: "Rokas",
      messages: {
        create: [
          {
            body: "A Note for Rokas",
          },
          {
            body: "Another note for Rokas",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Petras",
      messages: {
        create: [
          {
            body: "A Note for Petras",
          },
          {
            body: "Another note for Petras",
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Jonas",
      messages: {
        create: [
          {
            body: "A Note for Jonas",
          },
          {
            body: "Another note for Jonas",
          },
        ],
      },
    },
  });
};

main();
