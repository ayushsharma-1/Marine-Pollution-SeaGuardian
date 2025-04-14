import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey || !clerkPubKey.startsWith("pk_")) {
    console.error("❌ ERROR: Missing or invalid Clerk Publishable Key.");
    throw new Error("Please check your VITE_CLERK_PUBLISHABLE_KEY in the .env file.");
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <ClerkProvider publishableKey={clerkPubKey}>
        <HashRouter>  {/* ✅ Updated to HashRouter */}
            <App />
        </HashRouter>
    </ClerkProvider>
);