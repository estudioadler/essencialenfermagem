import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const paralucent = localFont({
  variable: "--font-paralucent",
  src: [
    // Extra Light (200)
    {
      path: "./fonts/Paralucent-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Paralucent-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },

    // Light (300)
    {
      path: "./fonts/Paralucent-thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Paralucent-thinItalic.ttf",
      weight: "300",
      style: "italic",
    },

    // Light (400)
    {
      path: "./fonts/Paralucent-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Paralucent-LightItalic.ttf",
      weight: "400",
      style: "italic",
    },

    // Medium (500)
    {
      path: "./fonts/Paralucent-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Paralucent-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },

    // Demi Bold (600)
    {
      path: "./fonts/Paralucent-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Paralucent-DemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },

    // Bold (700)
    {
      path: "./fonts/Paralucent-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Paralucent-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },

    // Heavy (800)
    {
      path: "./fonts/Paralucent-Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Paralucent-HeavyItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Essencial Enfermagem",
  description: "Conectamos famílias com cuidadores profissionais de confiança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${paralucent.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
