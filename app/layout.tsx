import "./globals.css";

export const metadata = {
  title: "شغلي",
  description: "منصة الوظائف والخدمات العربية"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
