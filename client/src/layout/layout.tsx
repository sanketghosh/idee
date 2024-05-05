import Navbar from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-4 py-4">{children}</main>
    </div>
  );
}
