import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");

  if (!date) return NextResponse.json([]);

  const selectedDate = new Date(date);

  const start = new Date(selectedDate.setHours(0, 0, 0, 0));
  const end = new Date(selectedDate.setHours(23, 59, 59, 999));

  const appointments = await prisma.appointment.findMany({
    where: {
      date: {
        gte: start,
        lte: end,
      },
    },
  });

  return NextResponse.json(appointments);
}

export async function POST(req) {
  const body = await req.json();
  const { name, phone, date, time } = body;

  try {
    const appointment = await prisma.appointment.create({
      data: {
        name,
        phone,
        date: new Date(date),
        time,
      },
    });

    return NextResponse.json({ success: true, appointment });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Slot already booked." },
      { status: 400 }
    );
  }
}
