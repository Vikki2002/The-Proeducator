"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return <AnimatePresence mode="wait">
        {children && (
            <motion.div
                key={pathname}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        )}
    </AnimatePresence>

}
