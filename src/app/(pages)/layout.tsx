"use client";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import Provider from "../Provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Provider>
                <NextTopLoader
                    color="#2299DD"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={500}
                    zIndex={1600}
                    showAtBottom={false}
                />
                <Navbar />
                <main>{children}</main>
                <Toaster />
                <Footer />
            </Provider>
        </main>
    );
};

export default ProtectedLayout;