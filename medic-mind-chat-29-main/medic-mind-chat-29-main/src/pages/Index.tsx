
import React from "react";
import ChatLayout from "@/components/ChatLayout";
import ChatInterface from "@/components/ChatInterface";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <ChatLayout>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="shadow-lg border-gray-200 overflow-hidden h-[calc(100vh-12rem)]">
            <CardContent className="p-0 h-full">
              <ChatInterface />
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-1 space-y-4">
          <Card className="shadow-sm border-gray-200">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium text-medical-800 mb-2">About MedicMind</h3>
              <p className="text-sm text-gray-600">
                MedicMind provides general information about medical conditions, symptoms, and basic health recommendations. Our AI-powered chat uses a curated database of medical knowledge to answer your health-related questions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-red-50 border-red-100">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium text-red-700 mb-2">Important Notice</h3>
              <p className="text-sm text-gray-700">
                This is a demonstration application with limited data. In a real medical application, always consult with qualified healthcare professionals for medical advice, diagnosis, or treatment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-accent-50 border-accent-100">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium text-accent-700 mb-2">Sample Questions</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4">
                <li>What causes headaches?</li>
                <li>How can I lower high blood pressure?</li>
                <li>What are symptoms of diabetes?</li>
                <li>I have a fever, what should I do?</li>
                <li>Why am I coughing?</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </ChatLayout>
  );
};

export default Index;
