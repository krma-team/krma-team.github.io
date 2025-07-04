import * as React from "react";
import { cn } from "@/lib/utils";

import bg_card from "@/assets/image/bg_card.webp";
import test from "@/assets/image/test.png";
import Image from "next/image";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col rounded-2xl card-border-linear-gradient gap-8",
        className,
      )}
      {...props}
    >
      {/* <Image
        src={bg_card}
        alt="Background Card"
        className="w-full h-full rounded-full object-cover inset-0 -z-10"
      /> */}
    </div>
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "flex flex-col gap-8 px-6 py-6 relative z-10 bg-background rounded-2xl",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-xl uppercase self-center font-bold font-syne",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-[16px] font-medium px-1 text-clip", className)}
      {...props}
    />
  );
}

// function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-header"
//       className={cn(
//         "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
//         className,
//       )}
//       {...props}
//     />
//   );
// }
//

// function CardAction({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-action"
//       className={cn(
//         "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

// function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-footer"
//       className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
//       {...props}
//     />
//   );
// }

export {
  Card,
  // CardHeader,
  // CardFooter,
  CardTitle,
  // CardAction,
  CardDescription,
  CardContent,
};
