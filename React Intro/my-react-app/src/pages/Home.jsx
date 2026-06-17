import React from "react";

import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <div className='grid w-full max-w-md items-start gap-4'>
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to
          your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
      <div className='flex items-center gap-4'>
        <Skeleton className='h-12 w-12 rounded-full bg-amber-50' />
        <div className='space-y-2'>
          <Skeleton className='h-8 w-[250px] bg-amber-50' />
          <Skeleton className='h-4 w-[200px] bg-amber-50' />
        </div>
      </div>
      <Button variant='text'>Hello world</Button>;
      <Stack spacing={1} className='bg-amber-50'>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant='text' sx={{ fontSize: "1rem" }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='rectangular' width={210} height={60} />
        <Skeleton variant='rounded' width={210} height={60} />
      </Stack>
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation='wave' />
        <Skeleton animation={false} />
      </Box>
    </div>
  );
}
