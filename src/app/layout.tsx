import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tailwind CSS Template</title>
            </head>
            <body className={inter.className}>
                <header className="bg-gray-900 text-white py-4">
                    <div className="container mx-auto px-4">
                        <nav className="flex justify-between items-center">
                            <a href="#" className="text-xl font-bold">
                                Logo
                            </a>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="#" className="hover:text-gray-400">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href="/register" className="hover:text-gray-400">
                                        Registro
                                    </a>
                                </li>
                                <li>
                                    <a href="/login" className="hover:text-gray-400">
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main className="container mx-auto px-4 py-8">{children}</main>
                <footer className="bg-gray-900 text-white py-4">
                    <div className="container mx-auto px-4">
                        <p className="text-center">
                            © 2023 Mi Empresa. Todos los derechos reservados.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
