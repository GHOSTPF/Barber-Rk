// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../context/CartContext'; // Importe o CartProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BarberShop RK',
  description: 'Plataforma de exames laboratoriais e produtos para saúde',
};

// Crie um componente ClientLayout que usa 'use client'
import { ReactNode } from 'react';

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </CartProvider>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Renderize o ClientLayout no lado do cliente
    <ClientLayout>{children}</ClientLayout>
  );
}