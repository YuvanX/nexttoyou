import { AccomodationType, PaymentType } from "@/db/src/generated/prisma";

export type AccomType = {
    propertyName: string;
    propertyType: AccomodationType;
    description: string;
    streetName: string;
    city: string;
    state: string;
    zipcode: string;
    pricingOptions: PaymentType,
    pricing: string;
    facilities: string[],
    photos: File[],
    capacities: string[],
    contactName: string;
    contactNumber: string;
}



