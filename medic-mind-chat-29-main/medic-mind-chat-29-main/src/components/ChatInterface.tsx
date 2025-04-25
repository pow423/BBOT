
import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import { searchMedicalData } from "@/services/medicalData";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  content: string;
  type: "user" | "bot";
  causes?: string[];
  recommendations?: string[];
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm MedicMind. How can I help you with your medical questions today?",
      type: "bot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (message: string) => {
    // Add user message to chat
    const userMessageId = Date.now().toString();
    setMessages((prev) => [
      ...prev,
      {
        id: userMessageId,
        content: message,
        type: "user",
      },
    ]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate response delay
    setTimeout(() => {
      try {
        // Get response from medical data service
        const response = searchMedicalData(message);

        // Add bot message to chat
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            content: response.answer,
            type: "bot",
            causes: response.causes,
            recommendations: response.recommendations,
          },
        ]);
      } catch (error) {
        console.error("Error processing medical query", error);
        toast({
          title: "Error",
          description: "Unable to process your request. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsTyping(false);
      }
    }, 1000); // 1 second delay for simulated typing
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-12rem)]">
      <div className="bg-gray-100 p-4 rounded-t-lg">
        <h2 className="text-lg font-medium text-medical-800">Medical Chat Assistant</h2>
        <p className="text-sm text-gray-600">
          Ask any medical questions for information purposes only
        </p>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-white rounded-b-lg border border-gray-200">
        <div className="space-y-4">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              content={msg.content}
              type={msg.type}
              causes={msg.causes}
              recommendations={msg.recommendations}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-white">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isTyping} />
      </div>
    </div>
  );
};

export default ChatInterface;
