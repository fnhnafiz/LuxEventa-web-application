import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Auth/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <Toaster position="bottom-center" reverseOrder={true} />

        <RouterProvider router={Router}></RouterProvider>
      </StrictMode>
    </QueryClientProvider>
  </AuthProvider>
);
