"use client";
import { Plus, X } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Textarea } from "./textarea";
import { FileUpload } from "./file-upload";
import { useState } from "react";
import { AccomType, PricingOptions, PropertyType } from "@/types/accomType";
import { Button } from "./button";

export const AddProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState<AccomType>({
    propertyName: "",
    propertyType: PropertyType.Hostel,
    description: "",
    streetName: "",
    city: "",
    state: "",
    zipcode: "",
    pricingOptions: PricingOptions.Month,
    pricing: "",
    facilities: [],
    photos: [],
    contactName: "",
    contactNumber: "",
  });

  const handlePropertyType = (value: any) => {
    if (value === "hostel") {
      setPropertyDetails({
        ...propertyDetails,
        propertyType: PropertyType.Hostel,
      });
    } else {
      setPropertyDetails({ ...propertyDetails, propertyType: PropertyType.Pg });
    }
  };

  const handlePricingOptions = (value: any) => {
    if (value === "pay per month") {
      setPropertyDetails({
        ...propertyDetails,
        pricingOptions: PricingOptions.Month,
      });
    } else {
      setPropertyDetails({
        ...propertyDetails,
        pricingOptions: PricingOptions.Day,
      });
    }
  };

  const addFacility = () => {
    setPropertyDetails({
      ...propertyDetails,
      facilities: [...propertyDetails.facilities, ""],
    });
  };

  const removeFacility = (index: number) => {
    const filteredFacilites = propertyDetails.facilities.filter(
      (_, idx) => idx !== index
    );
    setPropertyDetails({ ...propertyDetails, facilities: filteredFacilites });
  };

  const handleFacilityChange = (index: number, value: string) => {
    const updatedFacilities = [...propertyDetails.facilities];
    updatedFacilities[index] = value;
    setPropertyDetails({ ...propertyDetails, facilities: updatedFacilities });
  };

  console.log(propertyDetails.facilities);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="space-y-1 items-center flex flex-col my-5">
        <div className="text-4xl font-bold">Add New Accommodation</div>
        <div className="text-muted-foreground text-xs text-center md:text-sm">
          Provide details about your property to attract potential tenants. Fill
          in all fields accurately to ensure a smooth listing process.
        </div>
      </div>
      <div className="space-y-5 mx-3">
        {/* basic information card */}
        <Card className="w-full md:min-w-3xl">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Tell us about your property</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 items-center">
              <div className="w-1/2 space-y-2">
                <Label className="font-medium">Property Name</Label>
                <Input
                  onChange={(e) =>
                    setPropertyDetails({
                      ...propertyDetails,
                      propertyName: e.target.value,
                    })
                  }
                  className="w-full"
                  placeholder="e.g., Chotu bhai Hostel"
                  type="text"
                  required
                />
              </div>
              <div className="w-1/2 space-y-2">
                <Label className="font-medium">Property Type</Label>

                <Select onValueChange={handlePropertyType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Your type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>type</SelectLabel>
                      <SelectItem value="hostel">Hostel</SelectItem>
                      <SelectItem value="pg's">PG's</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-5">
              <Label>Description</Label>
              <Textarea
                onChange={(e) =>
                  setPropertyDetails({
                    ...propertyDetails,
                    description: e.target.value,
                  })
                }
                className="my-2"
                required
                placeholder="Describe about your property, like features etc."
              />
            </div>
          </CardContent>
        </Card>

        {/* location card */}
        <Card className="w-full md:min-w-3xl">
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription>Help us find you easily</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-5">
              <div className="flex gap-2 items-center">
                <div className="space-y-2 w-1/2">
                  <Label>Street Name</Label>
                  <Input
                    onChange={(e) =>
                      setPropertyDetails({
                        ...propertyDetails,
                        streetName: e.target.value,
                      })
                    }
                    placeholder="123 Main Street"
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-2 w-1/2">
                  <Label>City</Label>
                  <Input
                    onChange={(e) =>
                      setPropertyDetails({
                        ...propertyDetails,
                        city: e.target.value,
                      })
                    }
                    placeholder="Hyderabad"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="space-y-2 w-1/3">
                  <Label>State</Label>
                  <Input
                    onChange={(e) =>
                      setPropertyDetails({
                        ...propertyDetails,
                        state: e.target.value,
                      })
                    }
                    placeholder="Telangana"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2 w-1/3">
                  <Label>Zip Code</Label>
                  <Input
                    onChange={(e) =>
                      setPropertyDetails({
                        ...propertyDetails,
                        zipcode: e.target.value,
                      })
                    }
                    placeholder="508001"
                    type="text"
                    required
                  />
                </div>{" "}
                <div className="space-y-2 w-1/3">
                  <Label>Country</Label>
                  <Input
                    value="India"
                    disabled
                    placeholder="Telangana"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing and Capacity Card */}
        <Card className="w-full md:min-w-3xl">
          <CardHeader>
            <CardTitle>Pricing & Capacity</CardTitle>
            <CardDescription>
              Set your rates and room capacities
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex gap-2 items-center">
              <div className="space-y-2 w-1/2">
                <Label>Pricing Options</Label>

                <Select onValueChange={handlePricingOptions}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose Pricing Options" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="day">pay per day</SelectItem>
                      <SelectItem value="month">pay per month</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 w-1/2">
                <Label>Pricing</Label>
                <Input
                  onChange={(e) =>
                    setPropertyDetails({
                      ...propertyDetails,
                      pricing: e.target.value,
                    })
                  }
                  placeholder="6000rs"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* facilities card */}
        <Card>
          <CardHeader>
            <CardTitle>Facilities</CardTitle>
            <CardDescription>What Facilities do you offer?</CardDescription>
            <CardAction
              onClick={addFacility}
              className="flex gap-1 items-center bg-white text-black px-4 py-1 rounded-lg text-sm cursor-pointer"
            >
              <Plus size={15} />
              Add Facility
            </CardAction>
          </CardHeader>

          <CardContent className="space-y-3">
            {propertyDetails.facilities.map((facility, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Input
                  onChange={(e) => handleFacilityChange(idx, e.target.value)}
                  placeholder={`Facility ${idx + 1}`}
                />

                <Button onClick={() => removeFacility(idx)}>
                  <X />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upload photos card */}
        <Card>
          <CardHeader>
            <CardTitle>Photos</CardTitle>
            <CardDescription>
              Upload high-quality photos of your property (up to 5 photos)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FileUpload />
          </CardContent>
        </Card>

        {/* Contact Information Card */}
        <Card className="w-full md:min-w-3xl">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>How can customers reach you?</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label>Contact Name</Label>
                <Input
                  onChange={(e) =>
                    setPropertyDetails({
                      ...propertyDetails,
                      contactName: e.target.value,
                    })
                  }
                  placeholder="Yuvan"
                />
              </div>

              <div className="space-y-2">
                <Label>Contact Number</Label>
                <Input
                  onChange={(e) =>
                    setPropertyDetails({
                      ...propertyDetails,
                      contactNumber: e.target.value,
                    })
                  }
                  placeholder="9087654321"
                  required
                  type="text"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
