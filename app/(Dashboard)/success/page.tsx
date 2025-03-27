import React from 'react';
import SucessContainer from '@/app/Components/SucessContainer';

// Option 1: Explicitly define searchParams as an object
interface Props {
  searchParams: {
    session_id?: string | null; // Optional with ? since it might not exist
  };
}

// Option 2: Use Next.js built-in types (recommended)
// import { type NextPage } from 'next';
// interface Props {
//   searchParams: Record<string, string | string[] | undefined>;
// }

const page = ({ searchParams }: Props) => {
  const id = searchParams?.session_id ?? null; // Use nullish coalescing for safety

  return (
    <div>
      <SucessContainer id={id} />
    </div>
  );
};

export default page;