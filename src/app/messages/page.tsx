'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function MessagesPage() {
  const [messages, setMessages] = useState<{ id: number; content: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const { data, error } = await supabase
      .from('messages')
      .select('id, content')
      .order('inserted_at', { ascending: false });
    if (!error && data) setMessages(data);
  }

  async function addMessage() {
    if (!newMessage.trim()) return;
    const { error } = await supabase.from('messages').insert({ content: newMessage.trim() });
    if (!error) {
      setNewMessage('');
      fetchMessages();
    }
  }

  async function deleteMessage(id: number) {
    await supabase.from('messages').delete().eq('id', id);
    fetchMessages();
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: 20,
        background: 'radial-gradient(circle at center, #222 0%, #000 80%)',
        color: '#ffd700',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: 30,
          wordWrap: 'break-word',
        }}
      >
        Messages
      </h1>

      {isAdmin && (
        <div
          style={{
            marginBottom: 30,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Enter some advice for others to see"
            style={{
              padding: '10px',
              fontSize: '1.1rem',
              borderRadius: 6,
              border: '2px solid #ffd700',
              backgroundColor: 'black',
              color: '#ffd700',
              width: 'min(90vw, 300px)',
              flexGrow: 1,
            }}
          />
          <button
            onClick={addMessage}
            style={{
              padding: '10px 16px',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: 'black',
              color: '#ffd700',
              border: '2px solid #ffd700',
              borderRadius: 6,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffd700';
              e.currentTarget.style.color = 'black';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = '#ffd700';
            }}
          >
            Add
          </button>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          maxWidth: 1000,
          margin: '0 auto',
          backgroundColor: '#111',
          borderRadius: 12,
          border: '2px solid #ffd700',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            flexBasis: '220px',
            flexShrink: 0,
            backgroundColor: '#000',
            borderRight: '2px solid #ffd700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          <img
            src="/WriggsAdvice.png"
            alt="Wriggs"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 12,
              border: '3px solid #ffd700',
              objectFit: 'cover',
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            padding: '30px 20px',
            maxHeight: '600px',
            overflowY: 'auto',
            boxSizing: 'border-box',
            minWidth: 0,
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: 20,
              borderBottom: '2px solid #ffd700',
              paddingBottom: 10,
              wordBreak: 'break-word',
            }}
          >
            Advice from Wriggs
          </h2>

          {messages.length === 0 ? (
            <p style={{ fontStyle: 'italic' }}>No messages yet.</p>
          ) : (
            messages.map(({ id, content }) => (
              <div
                key={id}
                style={{
                  backgroundColor: '#222',
                  padding: '14px 20px',
                  borderRadius: 8,
                  marginBottom: 12,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid #ffd700',
                  flexWrap: 'wrap',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    textAlign: 'left',
                    flexGrow: 1,
                    wordBreak: 'break-word',
                  }}
                >
                  {content}
                </span>
                {isAdmin && (
                  <button
                    onClick={() => deleteMessage(id)}
                    style={{
                      backgroundColor: '#ff4d4d',
                      border: 'none',
                      color: 'white',
                      padding: '6px 10px',
                      borderRadius: 6,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff6666';
                      e.currentTarget.style.boxShadow = '0 0 10px #ff6666';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff4d4d';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
