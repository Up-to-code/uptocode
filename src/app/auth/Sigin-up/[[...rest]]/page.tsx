"use client";

import { SignUp } from "@clerk/nextjs";

const Create = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp signInUrl="/auth/Sign-in" />
    </div>
  );
};

export default Create;
