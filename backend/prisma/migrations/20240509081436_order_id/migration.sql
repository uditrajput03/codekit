/*
  Warnings:

  - Added the required column `cfOrderId` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentSessionId` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'PAID', 'EXPIRED', 'TERMINATED', 'TERMINATION_REQUESTED');

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "cfOrderId" INTEGER NOT NULL,
ADD COLUMN     "orderStatus" "Status" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "paymentSessionId" INTEGER NOT NULL;
