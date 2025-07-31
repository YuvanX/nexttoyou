-- CreateEnum
CREATE TYPE "public"."UserType" AS ENUM ('NormalUser', 'Owner');

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "userType" "public"."UserType" NOT NULL DEFAULT 'NormalUser';
