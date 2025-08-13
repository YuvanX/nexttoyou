import { auth } from "@/auth";
import prisma from "@/db/src";
import { AccomodationType, PaymentType } from "@/db/src/generated/prisma";
import { uploadImage } from "@/lib/uploadImage";
import { AccomType } from "@/types/accomType";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { message: "Unauthorized user" },
        { status: 401 }
      );
    }

    const formData = await req.formData();

    const propertyName = formData.get("propertyName") as string;
    const propertyType = formData.get("propertyType") as AccomodationType;
    const description = formData.get("description") as string;
    const streetName = formData.get("streetName") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const zipcode = formData.get("zipcode") as string;
    const pricingOptions = formData.get("pricingOptions") as PaymentType;
    const pricing = formData.get("pricing") as string;
    const contactName = formData.get("contactName") as string;
    const contactNumber = formData.get("contactNumber") as string;

    const facilities = JSON.parse(formData.get("facilities") as string);
    const capacities = JSON.parse(formData.get("capacities") as string);

    const photos = formData.getAll("photos") as File[];

    const newAccommodation = await prisma.$transaction(async (tx) => {
      const location = await tx.location.create({
        data: {
          streetName: streetName,
          city: city,
          state: state,
          zipcode: Number(zipcode),
          country: "India",
        },
      });

      const accommodation = await tx.accommodation.create({
        data: {
          name: propertyName,
          description: description,
          price: Number(pricing),
          accomodationType: propertyType,
          paymentType: pricingOptions,
          userId: session.user?.id!,
          locationId: location.id,
        },
      });

      await Promise.all(
        facilities.map(async (label: string) => {
          const facility = await tx.facility.create({
            data: { label },
          });

          return tx.accommodationFacility.create({
            data: {
              facilityId: facility.id,
              accommodationId: accommodation.id,
            },
          });
        })
      );

      await Promise.all(
        capacities.map(async (c: string) => {
          const capacity = await tx.capacity.create({ data: { label: c } });

          return tx.accommodationCapacity.create({
            data: {
              capacityId: capacity.id,
              accommodationId: accommodation.id,
            },
          });
        })
      );

      await Promise.all(
        photos.map(async (file: File) => {
          const imageUrl = await uploadImage(file);

          if (!imageUrl) throw new Error("Cannot upload file");

          const image = await tx.image.create({ data: { imageUrl } });

          return tx.accommodationImage.create({
            data: {
              accommodationId: accommodation.id,
              imageId: image.id,
            },
          });
        })
      );

      return accommodation;
    });

    return NextResponse.json({
      message: "Created new Accommodation successfully!",
      accommodation: newAccommodation,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again later ",
      },
      { status: 500 }
    );
  }
}
