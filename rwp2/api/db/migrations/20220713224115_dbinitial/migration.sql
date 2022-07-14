/*
  Warnings:

  - Changed the type of `city` on the `UserProfile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "City" AS ENUM ('SAINTELUCE', 'RIVIERESALEE', 'FORTDEFRANCE');

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "city",
ADD COLUMN     "city" "City" NOT NULL;
