import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AutomationPlan } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateAutomationPlan = async (userPrompt: string): Promise<AutomationPlan> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure the environment.");
  }

  const modelId = "gemini-2.5-flash";

  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "A catchy title for the automation workflow" },
      summary: { type: Type.STRING, description: "A brief executive summary of the solution" },
      steps: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "Step-by-step implementation guide",
      },
      tools: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of recommended software tools (e.g., Zapier, Make, Python, Airtable)",
      },
      estimatedSavings: { type: Type.STRING, description: "Estimated time or money saved per month (e.g., '10 hours/month')" },
      complexity: { type: Type.STRING, enum: ["Low", "Medium", "High"], description: "Technical difficulty level" },
    },
    required: ["title", "summary", "steps", "tools", "estimatedSavings", "complexity"],
  };

  const systemInstruction = `
    You are a world-class Automation Architect for a high-end consulting agency. 
    Your goal is to analyze a user's manual business process description and propose a sophisticated, efficient automation strategy.
    
    Focus on modern tools (Make.com, Zapier, n8n, OpenAI API, Gemini API, Airtable, etc.).
    Be concise, professional, and convincing.
    
    If the user input is vague, make reasonable assumptions to provide a concrete example.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response generated from Gemini.");
    }

    const plan: AutomationPlan = JSON.parse(text);
    return plan;
  } catch (error) {
    console.error("Error generating automation plan:", error);
    throw error;
  }
};