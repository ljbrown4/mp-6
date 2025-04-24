"use client"

import { useSession } from "next-auth/react";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import Header from "@/components/header";
import {Box} from "@mui/material";
import Image from "next/image";

export default function HomePage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <main className="min-h-screen w-full flex-col justify-center bg-blue-100 text-black">
                <Header />
                <div className="min-h-screen w-full flex justify-center items-center bg-blue-100 text-blue-950">
                    <Box className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-[75%] sm:w-[50%] lg:w-[35%]">
                        <p className="text-2xl mb-8 font-bold text-center">Please sign in to see your account</p>
                        <SignIn />
                    </Box>
                </div>

            </main>
        );
    }

    return (
        <main className="min-h-screen w-full flex-col justify-center bg-blue-100 text-blue-950">
            <Header />
            <div className="min-h-screen w-full flex justify-center items-center bg-blue-100 text-black">
                <Box className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-[75%] sm:w-[50%] lg:w-[35%]">
                    <h1 className="text-2xl font-semibold mb-4">Welcome, {session.user?.name}</h1>
                    <Image
                        src={session.user?.image ?? "/default-profile.png"}
                        alt="Profile picture"
                        width={50}
                        height={50}
                    />
                    <p className="text-lg font-boldtext-gray-700 mb-4">{session.user?.email}</p>
                    <SignOut />
                </Box>
            </div>
        </main>
    );
}
