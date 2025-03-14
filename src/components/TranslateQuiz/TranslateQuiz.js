import React, { useState } from 'react';

/**
 * Hàm tính Levenshtein distance (khoảng cách chỉnh sửa) giữa 2 chuỗi.
 */
function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,      // xóa 1 ký tự
        dp[i][j - 1] + 1,      // thêm 1 ký tự
        dp[i - 1][j - 1] + cost // thay thế ký tự
      );
    }
  }

  return dp[m][n];
}

/**
 * Tính độ tương đồng (similarity) giữa 2 chuỗi theo công thức:
 * similarity = 1 - (levenshteinDistance / độ dài lớn hơn)
 */
function similarity(str1, str2) {
  const s1 = str1.trim().toLowerCase();
  const s2 = str2.trim().toLowerCase();

  if (!s1.length && !s2.length) return 1; // cả hai đều rỗng

  const dist = levenshteinDistance(s1, s2);
  const maxLen = Math.max(s1.length, s2.length);
  return 1 - dist / maxLen;
}

export default function TranslateQuiz({ question, correctAnswer }) {
  // Lưu câu trả lời người dùng nhập
  const [userInput, setUserInput] = useState('');
  // Trạng thái đã kiểm tra chưa
  const [submitted, setSubmitted] = useState(false);
  // Kết quả đúng hay sai (dựa trên ngưỡng 80%)
  const [isCorrect, setIsCorrect] = useState(false);

  // Khi nhấn "Kiểm tra"
  const handleCheck = () => {
    const sim = similarity(userInput, correctAnswer);
    if (sim >= 0.8) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setSubmitted(true);
  };

  // Khi nhấn "Làm lại"
  const handleReset = () => {
    setUserInput('');
    setSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      margin: '16px 0',
      maxWidth: '700px'
    }}>
      {/* Câu gốc */}
      <h4 style={{
        marginBottom: '12px',
        fontWeight: 'normal',
        lineHeight: '1.5'
      }}>
        Câu cần dịch: <span style={{ fontStyle: 'italic' }}>{`"${question}"`}</span>
      </h4>

      {/* Ô nhập nội dung dịch */}
      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
        Nhập bản dịch của bạn:
      </label>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        rows={4}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          outline: 'none',
          resize: 'vertical',
          fontSize: '16px',
          fontFamily: 'inherit',
          // Nếu đã kiểm tra, ta tô màu viền: đúng => xanh lá, sai => đỏ
          borderColor: submitted
            ? (isCorrect ? '#28a745' : '#dc3545')
            : '#ccc'
        }}
      />

      {/* Nút Kiểm tra và Làm lại */}
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
            fontSize: '14px'
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
            fontSize: '14px'
          }}
        >
          Làm lại
        </button>
      </div>

      {/* Hiển thị kết quả */}
      {submitted && (
        <div style={{ marginTop: '16px' }}>
          {isCorrect ? (
            <p style={{ color: '#28a745', fontWeight: 'bold', fontSize: '16px' }}>
              Chính xác!
            </p>
          ) : (
            <div>
              <p style={{ color: '#dc3545', fontWeight: 'bold', fontSize: '16px' }}>
                Chưa đúng lắm!
              </p>
              <p style={{ margin: '4px 0', fontWeight: 'bold' }}>Đáp án gợi ý:</p>
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
