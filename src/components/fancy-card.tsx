import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { clsx } from "clsx";

export interface FancyCardProps {
  children?: React.ReactNode;
  float?: "left" | "right";
  header: string;
  description?: string;
  footer?: string;
}

function FancyCard({
  float,
  header,
  description,
  footer,
  children,
}: FancyCardProps) {
  return (
    <div className="w-full relative">
      <Card
        style={{ float: float || "right" }}
        className={clsx("w-80")}
      >
        <CardHeader>
          <CardTitle className="uppercase">{header}</CardTitle>

          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        <CardContent>{children}</CardContent>

        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </div>
  );
}

export default FancyCard;
