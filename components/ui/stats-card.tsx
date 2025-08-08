import { IconTrendingUp } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Badge } from "./badge";

export const StatCard = () => {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 py-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 md:grid-cols-2 lg:py-6 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardDescription className="text-base">Total Views</CardDescription>
          <CardTitle  className="text-4xl">$1,250</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="flex gap-1">
                Trending this month
                <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
                Visitors for the last 6 months
            </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription className="text-base">Total Views</CardDescription>
          <CardTitle  className="text-4xl">$1,250</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="flex gap-1 items-center">
                Trending this month
                <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
                Visitors for the last 6 months
            </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription className="text-base">Total Views</CardDescription>
          <CardTitle  className="text-4xl">$1,250</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="flex gap-1 items-center">
                Trending this month
                <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
                Visitors for the last 6 months
            </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription className="text-base">Total Views</CardDescription>
          <CardTitle  className="text-4xl">$1,250</CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="flex gap-1 items-center">
                Trending this month
                <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
                Visitors for the last 6 months
            </div>
        </CardFooter>
      </Card>
    </div>
  );
};
