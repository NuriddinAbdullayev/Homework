import { Skeleton } from "@mui/material";

export default function BookCardSkeleton() {
  return (
    <div className='bg-gray-400 p-6 rounded-2xl shadow-lg'>
      <Skeleton variant='text' width='70%' height={40} />
      <Skeleton variant='text' width='60%' height={30} />
      <Skeleton variant='text' width='50%' height={30} />
      <Skeleton variant='text' width='55%' height={30} />
      <Skeleton variant='rounded' width={100} height={40} />
    </div>
  );
}
