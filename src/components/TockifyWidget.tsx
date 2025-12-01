"use client";

import React, { useEffect } from "react";

interface TockifyWidgetProps {
    widgetId: string;
}

export default function TockifyWidget({ widgetId }: TockifyWidgetProps) {
    useEffect(() => {
        // Load Tockify script
        const script = document.createElement("script");
        script.src = "https://public.tockify.com/browser/embed.js";
        script.async = true;
        script.setAttribute("data-cfasync", "false");
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="w-full">
            <div
                data-tockify-component="calendar"
                data-tockify-calendar={widgetId}
                className="tockify-calendar"
            ></div>
        </div>
    );
}
