
import { Card } from "@/components/ui/card";

const TypingIndicator = () => {
  return (
    <div className="flex w-full mb-4 justify-start">
      <div className="flex items-start max-w-[80%] flex-row">
        <div className="flex items-center justify-center h-8 w-8 rounded-full text-white text-sm font-medium bg-accent-600 mr-2">
          M
        </div>
        <Card className="p-3 px-4 rounded-2xl bg-white border border-gray-200">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "600ms" }}></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TypingIndicator;
