import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clsx } from "clsx";

export interface FancyCardProps {
  children?: React.ReactNode;
  float?: "left" | "right";
  header: string;
  description?: string;
  footer?: string;
  images?: string[];
}

function FancyCard({
  float,
  header,
  description,
  footer,
  images,
  children,
}: FancyCardProps) {
  return (
    <div className="w-full relative">
      <Card
        style={{ float: float || "right" }}
        className={clsx("max-w-[1000px]")}
      >
        <CardHeader>
          <CardTitle className="uppercase">{header}</CardTitle>

          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        <CardContent className="flex gap-2">
          <div
            className=""
            id="content"
          >
            {children}
          </div>

          {images && (
            <div className="w-full ml-10">
              <Carousel className="h-full w-full">
                <CarouselContent>
                  {images.map((img, i) => {
                    return (
                      <CarouselItem key={img}>
                        <img
                          src={img}
                          alt={`image-${i}`}
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>

                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
              </Carousel>
            </div>
          )}
        </CardContent>

        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </div>
  );
}

export default FancyCard;
