
import { useState, useRef, useEffect } from 'react';
import type { PetType, GameState } from '../types/game';
import { sendMessageToPet } from '../services/chatService';
import './ChatArea.css';

interface ChatAreaProps {
    petName: string;
    petType: PetType;
    stats: GameState['stats'];
}

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export function ChatArea({ petName, petType, stats }: ChatAreaProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const content = input; // Capture input before clearing
        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Prepare history for API (excluding IDs)
            const history = messages.map(m => ({ role: m.role, content: m.content }));

            const response = await sendMessageToPet(content, petName, petType, stats, history);

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: response
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error(error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: "*confused noises* (Something went wrong...)"
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="nes-container with-title is-dark chat-container">

            <p className="title">Chat with {petName}</p>

            <div className="messages-list">
                {messages.length === 0 && (
                    <div className="empty-state">
                        Say hello to {petName}!
                    </div>
                )}
                {messages.map(msg => (
                    <div key={msg.id} className={`message ${msg.role}`}>
                        <div className={`nes-balloon from-${msg.role === 'user' ? 'right' : 'left'} ${msg.role === 'user' ? 'is-dark' : ''}`}>
                            <p>{msg.content}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="message assistant">
                        <div className="nes-balloon from-left">
                            <p>...</p>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
                <input
                    type="text"
                    className="nes-input is-dark"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Say something..."
                    disabled={isLoading}
                />
                <button
                    className={`nes-btn is-warning action-btn ${isLoading ? 'is-disabled' : 'is-primary'}`}
                    onClick={handleSend}
                    disabled={isLoading}
                >
                    SEND
                </button>
            </div>
        </div >
    );
}
