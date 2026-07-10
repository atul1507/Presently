import { randomUUID } from "crypto";

import { prisma } from "@/lib/prisma";

export async function createSession(presentationId: string) {
  return prisma.session.create({
    data: {
      presentationId,
      sessionCode: randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase(),
      qrToken: randomUUID(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60),

      slideState: {
        create: {},
      },
    },
    include: {
      slideState: true,
    },
  });
}