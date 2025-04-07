"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-4">
      <Card className="w-full max-w-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-50" />
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 animate-pulse">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold animate-fade-in">
            Something went wrong!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground animate-slide-up">
            We encountered an unexpected error while processing your request.
            {error.digest && (
              <span className="mt-2 block text-xs text-muted-foreground">
                Error ID: {error.digest}
              </span>
            )}
          </p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => reset()}
            className="mx-auto w-full max-w-[200px] transition-all duration-300 hover:scale-105"
          >
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
