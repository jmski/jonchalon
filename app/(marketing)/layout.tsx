import { Navbar, SiteFooter } from '@/components/navigation';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="main-content" id="main-content">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
