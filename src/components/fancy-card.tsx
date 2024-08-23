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
import { SparklesCore } from "@/components/ui/sparkles";
import { memo } from "react";
import { ImageIcon, CircleSlash2Icon } from "lucide-react";

const dividerStyles = {
  primaryLeft:
    "[mask-image:radial-gradient(130px_at_left,white,transparent)] left-0 bg-gradient-to-r",
  primaryRight:
    "[mask-image:radial-gradient(130px_at_right,white,transparent)] right-0 bg-gradient-to-l",
  secondaryLeft:
    "[mask-image:radial-gradient(65px_at_left,white,transparent)] left-0 bg-gradient-to-r ",
  secondaryRight:
    "[mask-image:radial-gradient(65px_at_right,white,transparent)] right-0 bg-gradient-to-l",
  sparklesParentLeft:
    "-right-10 [mask-image:radial-gradient(100px_at_right,white,transparent)]",
  sparklesParentRight:
    "-left-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]",
  sparklesLeft:
    "-right-10 [mask-image:radial-gradient(200px_at_left,white,transparent)]",
  sparklesRight:
    "-left-10 [mask-image:radial-gradient(200px_at_right,white,transparent)]",
};

export interface FancyCardProps {
  children?: React.ReactNode;
  float?: "left" | "right";
  header: string;
  description?: React.ReactNode;
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
    <div className="w-full relative py-10">
      <Sparkles float={float} />
      <Card
        style={{ float: float || "right" }}
        className={clsx(
          "max-w-[900px] bg-background",
          float === "left" ? "ml-10" : "mr-10"
        )}
      >
        <CardHeader>
          <CardTitle className="uppercase">{header}</CardTitle>

          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        <CardContent className="flex gap-8 flex-col md:flex-row text-sm sm:text-lg">
          <div
            className="w-full md:w-3/5"
            id="content"
          >
            {children}
          </div>

          {images && (
            <div className="w-full">
              <Carousel className="h-full w-full">
                {images.length > 0 ? (
                  <CarouselContent>
                    {images.map((img, i) => {
                      return (
                        <CarouselItem key={img}>
                          <img
                            src={img}
                            alt={`image-${i}`}
                            loading="lazy"
                            className="object-contain"
                          />
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                ) : (
                  <CarouselContent>
                    <CarouselItem className="flex justify-center items-center h-full">
                      <div className="w-full min-h-[150px] text-center">
                        <CircleSlash2Icon
                          size={100}
                          strokeWidth={1}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300"
                        />
                        <ImageIcon
                          size={60}
                          strokeWidth={1}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300"
                        />
                        <p className="text-gray-300">No images available</p>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                )}

                <CarouselPrevious className="left-0" />
                <CarouselNext style={{ right: "0px" }} />
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

const MemoizedSparklesCore = memo(SparklesCore);

function Sparkles({ float }: { float?: "left" | "right" }) {
  return (
    <div
      className={clsx(
        "absolute h-full w-px -z-30 top-0 bg-gradient-to-b from-transparent from [5%] to-[98%] via-indigo-300 to-transparent",
        float === "left" ? "left-0" : "right-0"
      )}
    >
      <div
        className={clsx(
          "w-28 h-full absolute top-1/2 -translate-y-1/2 from-indigo-400 via-transparent to-transparent -z-10 opacity-30",
          float === "left"
            ? dividerStyles.primaryLeft
            : dividerStyles.primaryRight
        )}
      />
      <div
        className={clsx(
          "w-10 h-1/2 absolute top-1/2 -translate-y-1/2 from-cyan-400 via-transparent to-transparent -z-20 opacity-50",
          float === "left"
            ? dividerStyles.secondaryLeft
            : dividerStyles.secondaryRight
        )}
      />
      <div
        className={clsx(
          "w-10 h-full top-1/2 -translate-y-1/2 absolute",
          float === "left"
            ? dividerStyles.sparklesParentLeft
            : dividerStyles.sparklesParentRight
        )}
      >
        <MemoizedSparklesCore
          background="transparent"
          minSize={0.1}
          maxSize={1}
          particleDensity={1200}
          className={clsx("h-full")}
        />
      </div>
    </div>
  );
}
