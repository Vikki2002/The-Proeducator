"use client"
import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatComponent() {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you?" }]);
    const [inputMessage, setInputMessage] = useState("");

    const sendMessage = async () => {
        if (!inputMessage.trim()) return;

        const newMessages = [...messages, { sender: "user", text: inputMessage }];
        setMessages(newMessages);
        setInputMessage("");

        try {
            const response = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: inputMessage }),
            });
            const data = await response.json();
            setMessages([...newMessages, { sender: "bot", text: data.reply }]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        }
    };

    return (
        <div className="fixed bottom-[85px] right-10 z-50">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary rounded-[1rem] gap-2 shadow-2xs hover:shadow-xl transition-all"
                onClick={() => setChatOpen(!chatOpen)}
            >
                <MessageCircle className="w-5 h-5" />
                Chat with AI Assistant
            </motion.button>

            <AnimatePresence>
                {chatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="card bg-base-100 shadow-2xl w-96 absolute bottom-16 right-0"
                    >
                        <div className="card-title p-4 border-b flex justify-between items-center bg-base-200 rounded-t-2xl">
                            <div className="flex items-center gap-2">
                                <Bot className="w-5 h-5 text-primary" />
                                <h2 className="text-lg font-semibold">AI Assistant</h2>
                            </div>
                            <button
                                className="btn btn-ghost btn-sm btn-circle"
                                onClick={() => setChatOpen(false)}
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-4 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-base-300">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`chat ${msg.sender === "bot" ? "chat-start" : "chat-end"} mb-4`}
                                >
                                    <div className={`chat-bubble ${msg.sender === "bot"
                                            ? "chat-bubble-primary bg-opacity-10 text-base-content"
                                            : "chat-bubble-secondary text-base-100"
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="card-actions p-4 border-t bg-base-200 rounded-b-2xl">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendMessage();
                                }}
                                className="join w-full"
                            >
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="input input-bordered join-item w-full focus:outline-none"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary join-item"
                                    disabled={!inputMessage.trim()}
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
