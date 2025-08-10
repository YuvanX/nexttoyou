import { IconCircleCheckFilled, IconPlus } from "@tabler/icons-react";
import { Badge } from "./badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Button } from "./button";

export const DataTable = () => {
  const propertyData = [
    {
      propertyname: "Sunrise PG",
      status: "full",
      price: 8000,
      type: "pg",
    },
    {
      propertyname: "Green Meadows Hostel",
      status: "still occupancy",
      price: 6500,
      type: "hostel",
    },
    {
      propertyname: "City View PG",
      status: "still occupancy",
      price: 7500,
      type: "pg",
    },
    {
      propertyname: "Elite Hostel",
      status: "full",
      price: 9000,
      type: "hostel",
    },
    // Added more properties
    {
      propertyname: "Lakeview PG",
      status: "still occupancy",
      price: 8200,
      type: "pg",
    },
    {
      propertyname: "Urban Stay Hostel",
      status: "full",
      price: 7000,
      type: "hostel",
    },
    {
      propertyname: "Harmony PG",
      status: "still occupancy",
      price: 7800,
      type: "pg",
    },
    {
      propertyname: "Metro Hostel",
      status: "full",
      price: 9500,
      type: "hostel",
    },
  ];
  return (
    <>
      <div className="flex justify-end mx-8 mt-2 mb-4">
        <Button size="sm" variant="outline">
        <IconPlus />
        <span className="hidden lg:inline">Add Property</span>
        </Button>
      </div>
      <div className="mx-8 border rounded-lg relative overflow-hidden">
        <Table>
          <TableHeader className="bg-muted sticky top-0">
            <TableRow>
              <TableHead className="font-medium">Property</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {propertyData.map((property, idx) => (
              <TableRow key={idx} className="h-14">
                <TableCell className="font-medium">
                  {property.propertyname}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="px-1.5 text-muted-foreground text-sm"
                  >
                    <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                    {property.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Badge
                    variant={property.type === "hostel" ? "secondary" : "outline"}
                    className="px-1.5 text-muted-foreground capitalize"
                  >
                    {property.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className="p-1.5 text-muted-foreground"
                    variant="outline"
                  >
                    <span className="mr-1 text-green-600 dark:text-green-400">₹</span>
                    {property.price}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
