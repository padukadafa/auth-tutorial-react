import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Card, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./BackButton";
import CardWrapper from "./CardWrapper";
import Header from "./Header";

const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      headerLabel="Oops! Something went wrong!"
    >
      <div className="w-full flex justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
