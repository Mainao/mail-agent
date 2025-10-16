"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useChat } from "@ai-sdk/react";

const Chat = () => {
    const [input, setInput] = useState<string>("");
    const { messages, sendMessage, status } = useChat();
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (scrollAreaRef.current) {
            const viewport = scrollAreaRef.current.querySelector(
                "[data-radix-scroll-area-viewport]"
            ) as HTMLDivElement | null;
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        sendMessage({ text: input })
            .then(() => {
                setInput("");
            })
            .catch((error) => {
                console.error("Error sending message:", error);
            });
    };

    return (
        <div className="flex h-[calc(100vh-120px)] bg-background">
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Messages */}
                <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={
                                    message.role === "user"
                                        ? "flex justify-end gap-4"
                                        : "flex justify-start gap-4"
                                }
                            >
                                <div className="flex space-y-2">
                                    <div
                                        className={
                                            message.role === "user"
                                                ? "bg-gray-200 px-6 py-2 rounded-[25px] w-fit text-right"
                                                : "px-6 py-2 rounded-[25px] w-fit text-left"
                                        }
                                    >
                                        <ReactMarkdown>
                                            {message.parts
                                                .map((part) =>
                                                    part.type === "text"
                                                        ? part.text
                                                        : ""
                                                )
                                                .join("")}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="px-4 pt-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Enter" &&
                                        !e.shiftKey &&
                                        !!input.trim()
                                    ) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                placeholder="Type a question about your emails..."
                                className="pr-12 py-3 min-h-[48px]"
                            />
                            <Button
                                size="icon"
                                className="absolute right-1 top-1 transition-colors duration-300 ease-in hover:bg-gray-100 cursor-pointer"
                                disabled={!input.trim()}
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
