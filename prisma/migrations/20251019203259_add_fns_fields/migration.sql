/*
  Warnings:

  - You are about to drop the column `address` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `founded` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[inn]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `inn` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "address",
DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "description",
DROP COLUMN "email",
DROP COLUMN "founded",
DROP COLUMN "phone",
ADD COLUMN     "director" TEXT,
ADD COLUMN     "inn" TEXT NOT NULL,
ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "legalAddress" TEXT,
ADD COLUMN     "ogrn" TEXT,
ADD COLUMN     "okved" TEXT,
ADD COLUMN     "registrationDate" TIMESTAMP(3),
ADD COLUMN     "status" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Company_inn_key" ON "Company"("inn");
