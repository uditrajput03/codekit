/*
  Warnings:

  - You are about to drop the column `purchased` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "purchased",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "paid" DROP NOT NULL,
ALTER COLUMN "cfOrderId" DROP NOT NULL,
ALTER COLUMN "paymentSessionId" DROP NOT NULL,
ALTER COLUMN "paymentSessionId" SET DATA TYPE TEXT;
