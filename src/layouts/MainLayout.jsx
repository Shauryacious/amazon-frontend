// src/layouts/MainLayout.jsx
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout({ theme, setTheme }) {
  return (
    <div
      className={`${theme === "dark" ? "dark" : ""} min-h-screen flex flex-col`}
    >
      <Header theme={theme} setTheme={setTheme} />
      <main className="flex-1 bg-slate-100 dark:bg-slate-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
