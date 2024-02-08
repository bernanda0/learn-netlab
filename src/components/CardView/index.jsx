import Link from "@docusaurus/Link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import clsx from "clsx";

export default function CardView({
  card_bg,
  icon,
  title,
  description,
  navigate,
}) {
  return (
    <div className={clsx("col col--6")}>
      <Card className="max-w-[32rem] mb-12 overflow-hidden dark:bg-blue-gray-900/75 bg-gray-50 hover:bg-gray-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        <CardHeader
          floated={true}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <div className="relative flex justify-center items-center">
            <img
              src={card_bg}
              className="w-full h-full object-cover"
              alt="Main Background"
            />
            <img
              src={icon}
              className="overlay w-auto h-auto max-w-48 max-h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 ease-in-out transition-transform duration-200"
              alt="Overlay Image"
            />
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" className="dark:text-white text-black">
            {title}
          </Typography>
          <Typography
            variant="lead"
            className="mt-3 text-base font-mono text-gray-700 dark:text-white"
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={navigate} className="inline-block">
            <Button
              size="md"
              variant="text"
              className="flex items-center gap-2 bg-transparent dark:hover:bg-blue-gray-800 dark:text-white border-0 hover:cursor-pointer"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="h-4 w-4 dark:stroke-white stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
