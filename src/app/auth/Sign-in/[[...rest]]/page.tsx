"use client"
import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SigmIn = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <SignIn
            signUpUrl='/auth/Sigin-up'
            />
        </div>
    );
}

export default SigmIn;
