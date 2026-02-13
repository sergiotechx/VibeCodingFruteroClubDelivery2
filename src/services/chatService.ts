
import { PetType } from '../types/game';

interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

const API_KEY = import.meta.env.VITE_OPENAI_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

export const sendMessageToPet = async (
    message: string,
    petName: string,
    petType: PetType,
    stats: { hunger: number; happiness: number; energy: number },
    history: ChatMessage[]
): Promise<string> => {
    if (!API_KEY) {
        return "I can't talk right now... (Missing API Key)";
    }

    const systemPrompt = `You are a virtual pet named ${petName}. You are a ${petType}.
  Your current stats are:
  - Hunger: ${stats.hunger}/100 (Lower is hungrier)
  - Happiness: ${stats.happiness}/100 (Higher is happier)
  - Energy: ${stats.energy}/100 (Higher is more energetic)
  
  Respond to the user's message as if you are this pet. 
  Keep your responses short, cute, and reflective of your current stats.
  If you are hungry, mention food. If you are tired, yawn. If you are happy, be excited.
  Use emojis appropriately.
  Do not break character.`;

    const messages: ChatMessage[] = [
        { role: 'system', content: systemPrompt },
        ...history,
        { role: 'user', content: message }
    ];

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: messages,
                max_tokens: 150,
                temperature: 0.8,
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('OpenAI API Error:', response.status, errorData);
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        console.error('Error sending message:', error);
        return "*tilts head* (I couldn't understand that...)";
    }
};
