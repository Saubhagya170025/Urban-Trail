"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import { vehicleCardData } from "./vehicles/page"
import { workerCardData } from "./attendance/page"
import { alertsCardData } from "./alerts/page"

const cards = [vehicleCardData, workerCardData, alertsCardData]

export default function Home() {
  console.log("Cards data:", cards);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 p-20 pt-15 font-[family-name:var(--font-geist-sans)] w-[1100px]">
      {cards.map((card, i) => (
        <Link href={card.href ?? "#"} key={i}>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow h-[200px] flex flex-col" >
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{card.content}</p>
          </CardContent>
        </Card>
        </Link>
      ))}
    </div>
  );
}
