import { IconCircleCheckFilled } from "@tabler/icons-react";
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
  ];
  return (
    <div className="mx-8 border rounded-lg relative overflow-hidden">
      <Table>
        <TableHeader className="bg-muted sticky top-0">
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {propertyData.map((property, idx) => (
            <TableRow key={idx} className="h-14">
              <TableCell>{property.propertyname}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className="px-1.5 text-muted-foreground text-sm"
                >
                  <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                  {property.status}
                </Badge>
              </TableCell>
             
              <TableCell>{property.type}</TableCell>
              <TableCell>
                <Badge
                  className="p-1.5 text-muted-foreground"
                  variant="outline"
                >
                  {property.price}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
