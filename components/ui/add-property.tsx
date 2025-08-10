"use client";
import { Plus } from "lucide-react";
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

export const AddProperty = () => {
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
                  className="w-full"
                  placeholder="e.g., Chotu bhai Hostel"
                  type="text"
                  required
                />
              </div>
              <div className="w-1/2 space-y-2">
                <Label className="font-medium">Property Type</Label>
                <Select>
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
                  <Input placeholder="123 Main Street" type="text" required />
                </div>

                <div className="space-y-2 w-1/2">
                  <Label>City</Label>
                  <Input placeholder="Hyderabad" type="text" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="space-y-2 w-1/3">
                  <Label>State</Label>
                  <Input placeholder="Telangana" type="text" required />
                </div>
                <div className="space-y-2 w-1/3">
                  <Label>Zip Code</Label>
                  <Input placeholder="508001" type="text" required />
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
                <Select>
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
                <Input placeholder="6000rs" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* facilities card */}
        <Card>
          <CardHeader>
            <CardTitle>Facilities</CardTitle>
            <CardDescription>What Facilities do you offer?</CardDescription>
            <CardAction className="flex gap-1 items-center bg-white text-black px-4 py-1 rounded-lg text-sm">
              <Plus size={15} />
              Add Facility
            </CardAction>
          </CardHeader>

          <CardContent className="space-y-3">
            <Input placeholder="Free wifi" />
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
                <Input placeholder="Yuvan" />
              </div>

              <div className="space-y-2">
                <Label>Contact Number</Label>
                <Input placeholder="9087654321" required type="text" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
