
import { GoogleGenAI, Type } from "@google/genai";
import { Movie } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getRecommendedMovies(category: string): Promise<Movie[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 6 unique Arabic movie recommendations for the category: "${category}". 
      Return them as a JSON array of objects with fields: id, title, description, year, rating, duration, genres.
      Make the titles and descriptions high quality and cinematic in Arabic.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              year: { type: Type.NUMBER },
              rating: { type: Type.STRING },
              duration: { type: Type.STRING },
              genres: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["id", "title", "description", "year", "rating", "duration", "genres"]
          }
        }
      }
    });

    const movies = JSON.parse(response.text);
    return movies.map((m: any, index: number) => ({
      ...m,
      image: `https://picsum.photos/seed/${m.id + category}/300/450`,
      backdrop: `https://picsum.photos/seed/${m.id + category}/1200/600`
    }));
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
}

export async function getEnhancedDescription(movieTitle: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide an expanded, exciting cinematic description in Arabic for a movie titled "${movieTitle}". Keep it around 3 sentences.`,
    });
    return response.text.trim();
  } catch (error) {
    return "لا يتوفر وصف إضافي حالياً.";
  }
}
