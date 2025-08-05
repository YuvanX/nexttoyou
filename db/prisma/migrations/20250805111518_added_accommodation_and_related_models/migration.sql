-- CreateEnum
CREATE TYPE "public"."AccomodationType" AS ENUM ('Hostel', 'PG');

-- CreateEnum
CREATE TYPE "public"."PaymentType" AS ENUM ('Monthly', 'Day');

-- CreateTable
CREATE TABLE "public"."Accommodation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "accomodationType" "public"."AccomodationType" NOT NULL,
    "paymentType" "public"."PaymentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,

    CONSTRAINT "Accommodation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Location" (
    "id" TEXT NOT NULL,
    "streetName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Capacity" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Capacity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Facility" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AccommodationFacility" (
    "id" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,

    CONSTRAINT "AccommodationFacility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AccommodationImage" (
    "id" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,

    CONSTRAINT "AccommodationImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AccommodationCapacity" (
    "id" TEXT NOT NULL,
    "capacityId" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,

    CONSTRAINT "AccommodationCapacity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccommodationFacility_accommodationId_facilityId_key" ON "public"."AccommodationFacility"("accommodationId", "facilityId");

-- CreateIndex
CREATE UNIQUE INDEX "AccommodationImage_accommodationId_imageId_key" ON "public"."AccommodationImage"("accommodationId", "imageId");

-- CreateIndex
CREATE UNIQUE INDEX "AccommodationCapacity_accommodationId_capacityId_key" ON "public"."AccommodationCapacity"("accommodationId", "capacityId");

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "public"."Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccommodationFacility" ADD CONSTRAINT "AccommodationFacility_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccommodationFacility" ADD CONSTRAINT "AccommodationFacility_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "public"."Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccommodationImage" ADD CONSTRAINT "AccommodationImage_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccommodationImage" ADD CONSTRAINT "AccommodationImage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "public"."Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccommodationCapacity" ADD CONSTRAINT "AccommodationCapacity_capacityId_fkey" FOREIGN KEY ("capacityId") REFERENCES "public"."Capacity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AccommodationCapacity" ADD CONSTRAINT "AccommodationCapacity_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
