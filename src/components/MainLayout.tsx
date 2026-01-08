'use client';

import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === '/';

    // If home, no top padding (immersive). If others, add pt-20 to push content below fixed navbar
    return (
        <div className={isHome ? "" : "pt-20"}>
            {children}
        </div>
    );
}
