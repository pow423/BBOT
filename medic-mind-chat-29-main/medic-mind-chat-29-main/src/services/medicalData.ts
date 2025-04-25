
export interface MedicalQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface MedicalSymptom {
  id: string;
  name: string;
  possibleCauses: string[];
  recommendations: string[];
}

// Sample medical data - this would be replaced with a more comprehensive database or API
export const medicalDatabase = {
  questions: [
    {
      id: "q1",
      question: "What causes headaches?",
      answer: "Headaches can be caused by various factors including stress, dehydration, lack of sleep, eyestrain, sinus infections, or more serious conditions. Common tension headaches may result from muscle contractions in the head and neck regions due to stress or poor posture."
    },
    {
      id: "q2",
      question: "How can I lower high blood pressure?",
      answer: "High blood pressure can be managed through lifestyle changes such as maintaining a healthy diet low in sodium, regular physical activity, limiting alcohol consumption, quitting smoking, managing stress, and maintaining a healthy weight. In some cases, medication prescribed by a healthcare provider may be necessary."
    },
    {
      id: "q3",
      question: "What are symptoms of diabetes?",
      answer: "Common symptoms of diabetes include increased thirst, frequent urination, unexplained weight loss, extreme hunger, blurred vision, fatigue, and slow-healing sores. Type 1 diabetes symptoms can appear quickly, while Type 2 diabetes symptoms often develop gradually."
    }
  ],
  symptoms: [
    {
      id: "s1",
      name: "Headache",
      possibleCauses: [
        "Tension or stress", 
        "Dehydration", 
        "Migraine", 
        "Sinus infection",
        "High blood pressure"
      ],
      recommendations: [
        "Stay hydrated",
        "Rest in a quiet, dark room",
        "Apply a cold or warm compress",
        "Consider over-the-counter pain relief medication (consult with healthcare provider)",
        "Practice relaxation techniques"
      ]
    },
    {
      id: "s2",
      name: "Fever",
      possibleCauses: [
        "Viral infection",
        "Bacterial infection",
        "Heat exhaustion",
        "Inflammatory conditions",
        "Medication reactions"
      ],
      recommendations: [
        "Rest and stay hydrated",
        "Take temperature regularly to monitor fever",
        "Use fever-reducing medications as advised by healthcare provider",
        "Use lightweight clothing and bedding",
        "Seek medical attention for high fevers (over 103°F/39.4°C) or if fever persists"
      ]
    },
    {
      id: "s3",
      name: "Cough",
      possibleCauses: [
        "Common cold",
        "Flu",
        "Allergies",
        "Asthma",
        "COVID-19",
        "Bronchitis"
      ],
      recommendations: [
        "Stay hydrated and rest",
        "Use honey for soothing (not for children under 1 year)",
        "Use humidifiers to add moisture to the air",
        "Avoid irritants like smoke",
        "Seek medical attention if cough persists over 3 weeks or is accompanied by other serious symptoms"
      ]
    }
  ]
};

export function searchMedicalData(query: string): { answer: string, causes?: string[], recommendations?: string[] } {
  // Convert query to lowercase for case-insensitive matching
  const lowercaseQuery = query.toLowerCase();
  
  // First check for direct question matches
  const questionMatch = medicalDatabase.questions.find(q => 
    q.question.toLowerCase().includes(lowercaseQuery)
  );
  
  if (questionMatch) {
    return { answer: questionMatch.answer };
  }
  
  // Then check for symptom matches
  for (const symptom of medicalDatabase.symptoms) {
    if (lowercaseQuery.includes(symptom.name.toLowerCase())) {
      return { 
        answer: `Information about ${symptom.name}:`,
        causes: symptom.possibleCauses,
        recommendations: symptom.recommendations
      };
    }
  }
  
  // If no direct matches, try to find partial matches in symptoms
  const words = lowercaseQuery.split(' ');
  for (const symptom of medicalDatabase.symptoms) {
    for (const word of words) {
      if (word.length > 3 && symptom.name.toLowerCase().includes(word)) {
        return { 
          answer: `You may be asking about ${symptom.name}:`,
          causes: symptom.possibleCauses,
          recommendations: symptom.recommendations
        };
      }
    }
  }
  
  // If no matches at all
  return { 
    answer: "I don't have specific information about that medical query. Please consult with a healthcare professional for personalized advice."
  };
}
