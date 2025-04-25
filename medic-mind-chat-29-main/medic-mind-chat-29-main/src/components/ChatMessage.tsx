
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type MessageType = "user" | "bot";

interface ChatMessageProps {
  content: string;
  type: MessageType;
  causes?: string[];
  recommendations?: string[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, type, causes, recommendations }) => {
  const isUser = type === "user";

  return (
    <div className={cn("flex w-full mb-4", isUser ? "justify-end" : "justify-start")}>
      <div className={cn("flex items-start max-w-[80%]", isUser ? "flex-row-reverse" : "flex-row")}>
        <div
          className={cn(
            "flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-medium mr-2",
            isUser ? "bg-medical-600 ml-2" : "bg-accent-600 mr-2"
          )}
        >
          {isUser ? "U" : "M"}
        </div>
        <div className="flex flex-col">
          <Card
            className={cn(
              "p-3 rounded-2xl",
              isUser
                ? "bg-medical-600 text-white"
                : "bg-white border border-gray-200"
            )}
          >
            <div className="text-sm">{content}</div>
          </Card>

          {(causes || recommendations) && (
            <div className="mt-2 space-y-2">
              {causes && causes.length > 0 && (
                <Card className="p-3 bg-red-50 border border-red-100">
                  <div className="text-xs font-semibold mb-1 text-red-700">Possible causes:</div>
                  <ul className="list-disc pl-4 text-xs text-gray-700 space-y-1">
                    {causes.map((cause, index) => (
                      <li key={index}>{cause}</li>
                    ))}
                  </ul>
                </Card>
              )}

              {recommendations && recommendations.length > 0 && (
                <Card className="p-3 bg-green-50 border border-green-100">
                  <div className="text-xs font-semibold mb-1 text-green-700">Recommendations:</div>
                  <ul className="list-disc pl-4 text-xs text-gray-700 space-y-1">
                    {recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
