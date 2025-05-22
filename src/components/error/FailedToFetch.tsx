"use client";
import { motion } from "framer-motion";
import { WifiOff, RefreshCw } from "lucide-react";

interface FailedToFetchProps {
    onRetry?: () => void;
    message?: string;
}

const FailedToFetch: React.FC<FailedToFetchProps> = ({
    onRetry,
    message = "Oops! We couldn't fetch the data"
}) => {
    return (
        <div className="min-h-[400px] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mb-8 relative"
                >
                    <div className="w-24 h-24 mx-auto bg-error/10 rounded-full flex items-center justify-center">
                        <WifiOff className="w-12 h-12 text-error" />
                    </div>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2
                        }}
                        className="absolute inset-0 bg-error/5 rounded-full"
                    />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold mb-3"
                >
                    {message}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 mb-8"
                >
                    Don&apos;t worry, it happens to the best of us. Let&apos;s give it another try!
                </motion.p>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onRetry}
                    className="btn btn-primary gap-2"
                >
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                </motion.button>
            </motion.div>
        </div>
    );
};

export default FailedToFetch;