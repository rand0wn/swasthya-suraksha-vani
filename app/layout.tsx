import type {Metadata} from "next";
import "./globals.css";
import {BackgroundWave} from "@/components/background-wave";
import Link from "next/link";
import {RasadharaLogo} from "@/components/logos";

    title: "Swasthya Suraksha Vani - IFA Adherence",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={"h-full w-full"}>
        <body className={`antialiased w-full h-full lex flex-col`}>
        <div className="flex flex-col flex-grow w-full items-center justify-center sm:px-4">
            <nav
                className={
                    "sm:fixed w-full top-0 left-0 grid grid-cols-2 py-4 px-8"
                }
            >
                <div className={"flex"}>
                    <Link href={"/"} prefetch={true}>
                        <RasadharaLogo className={"h-[22px] w-auto hover:text-gray-500"} />
                    </Link>
                </div>

                <div className={"flex gap-4 justify-end"}>
                    <Link
                        href="https://rasadharaailabs.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"py-0.5 text-sm font-semibold hover:text-gray-500"}
                        aria-label="Visit rasadharaailabs.tech"
                    >
                        rasadharaailabs.tech
                    </Link>
                </div>
            </nav>
            {children}
            <BackgroundWave/>
        </div>
        </body>
        </html>
    );
}
