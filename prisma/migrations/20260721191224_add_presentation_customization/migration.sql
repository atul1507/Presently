-- CreateEnum
CREATE TYPE "PresentationTemplate" AS ENUM ('ORIGINAL', 'BLUE', 'BLACK', 'GREEN', 'CUSTOM');

-- CreateEnum
CREATE TYPE "LogoShape" AS ENUM ('SQUARE', 'ROUNDED', 'CIRCLE');

-- AlterTable
ALTER TABLE "presentations" ADD COLUMN     "brandingTagline" TEXT,
ADD COLUMN     "brandingTitle" TEXT,
ADD COLUMN     "customColor" TEXT,
ADD COLUMN     "logoShape" "LogoShape" NOT NULL DEFAULT 'SQUARE',
ADD COLUMN     "logoUrl" TEXT,
ADD COLUMN     "template" "PresentationTemplate" NOT NULL DEFAULT 'ORIGINAL';
