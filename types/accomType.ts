export type AccomType = {
    propertyName: string;
    propertyType: PropertyType;
    description: string;
    streetName: string;
    city: string;
    state: string;
    zipcode: string;
    pricingOptions: PricingOptions,
    pricing: string;
    facilities: string[],
    photos: string[],
    contactName: string;
    contactNumber: string;
}

export enum PropertyType {
    Hostel,
    Pg
}

export enum PricingOptions {
    Month,
    Day
}