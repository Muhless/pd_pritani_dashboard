import SidebarComponent from "@/components/layout/Sidebar";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div className="flex min-h-screen">
            <SidebarComponent />
            <main className="p-4 w-full">{children}</main>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
