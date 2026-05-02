import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './landing/Header';
import Footer from './landing/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}