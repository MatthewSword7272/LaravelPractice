import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function AppLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen w-full px-52">
            <Header></Header>
            <main className="flex-grow px-4 py-12">{children}</main>
            <Footer />
        </div>
    );
}
