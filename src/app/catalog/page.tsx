import React from "react";

export default function CatalogPage() {
    return (
        <main className="h-screen w-full overflow-hidden bg-white flex flex-col">
            {/* Optional Header if needed, or just full screen */}
            <div className="flex-1 relative">
                <iframe
                    src="/catalog.pdf" // Ensure this file exists in public/ or use an external URL
                    className="absolute inset-0 w-full h-full border-0"
                    title="GENTOGEN Catalog"
                    style={{ overflow: "hidden" }}
                />

                {/* Fallback for missing PDF or loading */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center text-gray-400">
                    <p>Loading Catalog...</p>
                </div>
            </div>
        </main>
    );
}
