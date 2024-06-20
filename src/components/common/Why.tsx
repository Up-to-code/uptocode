import React from "react";
import Card from "./Card";

export default function Why() {
  return (
    <div>
      <h1 className="text-3xl  font-bold text-center">Why are we?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">

        <Card
          title="Easy to use"
          description="Get started in minutes. No coding required."
        />

        <Card
          title="Fast"
          description="Get started in minutes. No coding required." 
        />

        <Card
          title="Secure"  
          description="Get started in minutes. No coding required."
        />
   <Card
          title="Reliable"  
          description="Get started in minutes. No coding required."
        />
        <Card
          title="Reliable"  
          description="Get started in minutes. No coding required."
        />
        <Card
          title="Reliable"  
          description="Get started in minutes. No coding required."
        />

      </div>
    </div>
  );
}
