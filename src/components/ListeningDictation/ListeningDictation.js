import React, { useState } from 'react';

/**
 * So sánh chuỗi người dùng nhập với đáp án (100% chính xác).
 */
function isExactMatch(userText, correctText) {
  const trimmedUser = userText.trim();
  const trimmedCorrect = correctText.trim();
  return trimmedUser === trimmedCorrect;
}

/**
 * ListeningDictation:
 * - youtubeUrl: link dạng "https://www.youtube.com/embed/VIDEO_ID"
 * - correctAnswer: đáp án chính tả đúng 100%
 * - question: Câu hỏi/tiêu đề
 */
export default function ListeningDictation({ youtubeUrl, correctAnswer, question }) {
  const [userInput, setUserInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Khi bấm "Kiểm tra"
  const handleCheck = () => {
    const match = isExactMatch(userInput, correctAnswer);
    setIsCorrect(match);
    setSubmitted(true);
  };

  // Khi bấm "Làm lại"
  const handleReset = () => {
    setUserInput('');
    setSubmitted(false);
    setIsCorrect(false);
    // Không reset được video YouTube nếu chưa tích hợp YouTube Player API
  };

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        margin: '16px 0',
        maxWidth: '700px',
      }}
    >
      {question && (
        <h4 style={{ marginBottom: '12px', fontWeight: 'normal', lineHeight: '1.5' }}>
          {question}
        </h4>
      )}

      {/* Khung nhúng YouTube bo góc */}
      <div
        style={{
          marginBottom: '12px',
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 ratio
          height: 0,
          overflow: 'hidden',
          borderRadius: '8px', // Bo góc cho container
        }}
      >
        <iframe
          src={youtubeUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px', // Bo góc cho iframe
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Listening Video"
        />
      </div>

      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
        Nhập chính tả:
      </label>
      <textarea
        rows={3}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          resize: 'vertical',
          fontSize: '16px',
          fontFamily: 'inherit',
          borderColor: submitted
            ? (isCorrect ? '#28a745' : '#dc3545')
            : '#ccc',
        }}
      />

      <div style={{ marginTop: '12px' }}>
        <button
          onClick={handleCheck}
          style={{
            marginRight: '8px',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          Kiểm tra
        </button>
        <button
          onClick={handleReset}
          style={{
            cursor: 'pointer',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          Làm lại
        </button>
      </div>

      {submitted && (
        <div style={{ marginTop: '16px' }}>
          {isCorrect ? (
            <p style={{ color: '#28a745', fontWeight: 'bold', fontSize: '16px' }}>
              Chính xác!
            </p>
          ) : (
            <div>
              <p style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '16px' }}>
                Chưa đúng!
              </p>
              <p style={{ margin: '4px 0', fontWeight: 'bold' }}>Đáp án chuẩn:</p>
              <p style={{ fontStyle: 'italic', color: '#555', margin: 0 }}>
                {correctAnswer}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
