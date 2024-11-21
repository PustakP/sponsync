import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOutgoing: boolean;
}

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  messages: Message[];
  type: 'college' | 'sponsor';
  avatar: string;
}

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [conversations, setConversations] = useState<Conversation[]>([
    // For Corporate Sponsors view
    {
      id: 1,
      name: "IIT Bombay",
      lastMessage: "We are looking for sponsors for our annual tech fest...",
      time: "5m ago",
      unread: true,
      type: 'college',
      avatar: "https://ui-avatars.com/api/?name=IIT+Bombay&background=8b5cf6&color=fff",
      messages: [
        {
          id: 1,
          sender: "IIT Bombay",
          content: "Hello! We are organizing TechFest 2024 and looking for corporate sponsors.",
          timestamp: "10:00 AM",
          isOutgoing: false
        },
        {
          id: 2,
          sender: "You",
          content: "Hi! We'd be interested. Could you share more details about the sponsorship packages?",
          timestamp: "10:05 AM",
          isOutgoing: true
        }
      ]
    },
    {
      id: 2,
      name: "Hindu College",
      lastMessage: "The sponsorship proposal has been updated...",
      time: "2h ago",
      unread: false,
      type: 'college',
      avatar: "https://ui-avatars.com/api/?name=Hindu+College&background=8b5cf6&color=fff",
      messages: [
        {
          id: 1,
          sender: "Hindu College",
          content: "We've updated our sponsorship proposal for the Cultural Festival.",
          timestamp: "2:00 PM",
          isOutgoing: false
        }
      ]
    },
    // For Event Organizers view
    {
      id: 3,
      name: "Tech Corp",
      lastMessage: "We're interested in sponsoring your event...",
      time: "1h ago",
      unread: true,
      type: 'sponsor',
      avatar: "https://ui-avatars.com/api/?name=Tech+Corp&background=3b82f6&color=fff",
      messages: [
        {
          id: 1,
          sender: "Tech Corp",
          content: "We're interested in sponsoring your upcoming tech event.",
          timestamp: "1:00 PM",
          isOutgoing: false
        }
      ]
    },
    {
      id: 4,
      name: "Innovation Labs",
      lastMessage: "Could you provide more details about...",
      time: "3h ago",
      unread: false,
      type: 'sponsor',
      avatar: "https://ui-avatars.com/api/?name=Innovation+Labs&background=3b82f6&color=fff",
      messages: [
        {
          id: 1,
          sender: "Innovation Labs",
          content: "Could you provide more details about the sponsorship tiers?",
          timestamp: "11:00 AM",
          isOutgoing: false
        }
      ]
    }
  ]);

  // Filter conversations based on user role (get from auth context in real app)
  const isOrganizer = window.location.pathname.startsWith('/dashboard');
  const filteredConversations = conversations.filter(conv => 
    isOrganizer ? conv.type === 'sponsor' : conv.type === 'college'
  );

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const newMessageObj: Message = {
      id: Date.now(),
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOutgoing: true
    };

    setConversations(prevConversations =>
      prevConversations.map(conv =>
        conv.id === selectedConversation.id
          ? {
              ...conv,
              messages: [...conv.messages, newMessageObj],
              lastMessage: newMessage
            }
          : conv
      )
    );

    setNewMessage('');
  };

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-4rem)] flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-gray-200 bg-white overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredConversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`w-full p-4 hover:bg-violet-50 transition-colors text-left flex items-start space-x-4
                  ${selectedConversation?.id === conversation.id ? 'bg-violet-50' : ''}`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {conversation.name}
                    </p>
                    <p className="text-xs text-gray-500">{conversation.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                </div>
                {conversation.unread && (
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        {selectedConversation ? (
          <div className="flex-1 flex flex-col bg-white">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedConversation.avatar}
                  alt={selectedConversation.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{selectedConversation.name}</h3>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOutgoing ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.isOutgoing
                        ? 'bg-violet-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-75">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-colors flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}