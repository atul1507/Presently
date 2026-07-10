-- CreateEnum
CREATE TYPE "PresentationStatus" AS ENUM ('UPLOADING', 'PROCESSING', 'READY', 'FAILED');

-- CreateEnum
CREATE TYPE "SessionStatus" AS ENUM ('WAITING', 'CONNECTED', 'PRESENTING', 'ENDED');

-- CreateEnum
CREATE TYPE "DeviceType" AS ENUM ('PRESENTER', 'CONTROLLER');

-- CreateTable
CREATE TABLE "presentations" (
    "id" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "storagePath" TEXT NOT NULL,
    "pdfPath" TEXT,
    "fileSize" INTEGER NOT NULL,
    "totalSlides" INTEGER,
    "status" "PresentationStatus" NOT NULL DEFAULT 'UPLOADING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "presentations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "presentationId" TEXT NOT NULL,
    "sessionCode" TEXT NOT NULL,
    "qrToken" TEXT NOT NULL,
    "status" "SessionStatus" NOT NULL DEFAULT 'WAITING',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "slide_states" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "currentSlide" INTEGER NOT NULL DEFAULT 1,
    "totalSlides" INTEGER NOT NULL DEFAULT 1,
    "isFullscreen" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "slide_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "type" "DeviceType" NOT NULL,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disconnectedAt" TIMESTAMP(3),

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_presentationId_key" ON "sessions"("presentationId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionCode_key" ON "sessions"("sessionCode");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_qrToken_key" ON "sessions"("qrToken");

-- CreateIndex
CREATE UNIQUE INDEX "slide_states_sessionId_key" ON "slide_states"("sessionId");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_presentationId_fkey" FOREIGN KEY ("presentationId") REFERENCES "presentations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "slide_states" ADD CONSTRAINT "slide_states_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
