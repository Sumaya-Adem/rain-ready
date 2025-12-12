import { useState } from "react";
import { Mic, Send, Lightbulb, Droplets, CloudRain, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BottomNav from "@/components/BottomNav";

const quickSuggestions = [
  { id: 1, text: "How to save water?", icon: Droplets },
  { id: 2, text: "When will it rain?", icon: CloudRain },
  { id: 3, text: "My crops are drying, what do I do?", icon: Leaf },
];

const initialMessages = [
  {
    id: 1,
    role: "ai",
    content: "Hello! I'm your agricultural assistant. Ask me anything about farming, drought management, or water conservation. You can type or use the microphone to speak.",
  },
];

const AIChat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: messageText,
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: "ai",
        content: getAIResponse(messageText),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (question: string): string => {
    if (question.toLowerCase().includes("water")) {
      return "To save water during drought: 1) Use drip irrigation instead of flood irrigation. 2) Water plants early morning or late evening. 3) Apply mulch around plants to reduce evaporation. 4) Choose drought-resistant crop varieties.";
    }
    if (question.toLowerCase().includes("rain")) {
      return "Based on current weather patterns, light rainfall is expected in 3-5 days. The monsoon forecast shows normal to below-normal rainfall this season. I recommend preparing water storage now.";
    }
    if (question.toLowerCase().includes("crop") || question.toLowerCase().includes("dry")) {
      return "For drying crops: 1) Check soil moisture - water only if very dry. 2) Provide shade during peak heat. 3) Apply organic mulch. 4) Consider foliar spray in early morning. 5) If severe, prioritize your most valuable crops.";
    }
    return "I understand your concern. Could you provide more details about your specific situation? I can help with water management, crop care, weather predictions, and drought preparation.";
  };

  const handleMicClick = () => {
    setIsListening(!isListening);
    // Simulate voice input
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputValue("When is the next rain expected?");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky to-primary p-6 pt-12">
        <h1 className="text-2xl font-bold text-white">Ask AquaGuard AI</h1>
        <p className="text-white/80 text-sm mt-1">Get instant farming advice via text or voice</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto animate-fade-in">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-card border border-border rounded-bl-sm"
              }`}
            >
              <p className={`text-sm ${message.role === "user" ? "text-primary-foreground" : "text-foreground"}`}>
                {message.content}
              </p>
            </div>
          </div>
        ))}

        {/* AI Tip Card */}
        {messages.length <= 2 && (
          <Card className="bg-sky/10 border-sky/30">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky/20 rounded-full">
                  <Lightbulb className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">Quick Tip</h4>
                  <p className="text-xs text-muted-foreground">
                    You can ask me questions in your local language too! I understand Hindi, Telugu, Tamil, and many more regional languages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quick Suggestions */}
      {messages.length <= 2 && (
        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion) => (
              <Button
                key={suggestion.id}
                variant="outline"
                size="sm"
                className="h-auto py-2 px-3 bg-card hover:bg-muted"
                onClick={() => handleSend(suggestion.text)}
              >
                <suggestion.icon className="w-4 h-4 mr-2 text-primary" />
                <span className="text-xs">{suggestion.text}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-card border-t border-border">
        <div className="flex items-center gap-3">
          {/* Mic Button */}
          <Button
            variant={isListening ? "default" : "outline"}
            size="icon"
            className={`w-14 h-14 rounded-full flex-shrink-0 ${
              isListening ? "bg-severe animate-pulse" : "border-primary text-primary hover:bg-primary/10"
            }`}
            onClick={handleMicClick}
          >
            <Mic className={`w-6 h-6 ${isListening ? "text-white" : ""}`} />
          </Button>

          {/* Text Input */}
          <div className="flex-1 relative">
            <Input
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="h-12 pr-12 bg-muted"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary hover:bg-primary/90"
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {isListening && (
          <p className="text-center text-sm text-severe mt-2 animate-pulse">
            Listening... Speak now
          </p>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default AIChat;
