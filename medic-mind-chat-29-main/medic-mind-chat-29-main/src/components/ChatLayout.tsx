
import React, { ReactNode } from "react";
import { HeartPulse } from "lucide-react";

interface ChatLayoutProps {
  children: ReactNode;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-medical-600 text-white py-4 px-4 sm:px-6 shadow-md">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
            <HeartPulse className="h-8 w-8" />
            <h1 className="text-xl font-bold">MedicMind Chat</h1>
          </div>
          <div className="text-xs bg-white text-red-600 px-2 py-1 rounded-full font-medium">
            Not for diagnosis
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p className="font-medium">Medical Disclaimer</p>
          <p className="text-xs mt-1">
            This chatbot provides general information only and is not a substitute for professional
            medical advice, diagnosis, or treatment. Always seek the advice of your physician or other
            qualified health provider with any questions you may have.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChatLayout;
