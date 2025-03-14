import React, { useState } from 'react';

/**
 * Modal hiển thị điểm
 */
function ResultModal({ score, total, onClose }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        padding: '16px',
        borderRadius: '8px',
        minWidth: '300px'
      }}>
        <button onClick={onClose} style={{ float: 'right', cursor: 'pointer' }}>X</button>
        <h3>Feedback</h3>
        <p style={{ marginTop: '16px' }}>
          Total score is {score} out of {total} ({percentage}%)
        </p>
      </div>
    </div>
  );
}

export default function TrueFalseQuiz({ title, questions }) {
  // Mảng lưu câu trả lời của người dùng
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  // Cho biết đã hiển thị kết quả (tô màu) chưa
  const [showAnswers, setShowAnswers] = useState(false);
  // Cho biết có đang hiển thị modal kết quả hay không
  const [showModal, setShowModal] = useState(false);

  // Xử lý khi người dùng chọn True/False
  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  // Tính điểm: số câu trả lời đúng
  const score = answers.reduce((acc, ans, idx) => {
    if (ans === questions[idx].correctAnswer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  // Khi bấm nút "Kiểm tra" => hiển thị tô màu đáp án + mở modal
  const handleCheck = () => {
    setShowAnswers(true);
    setShowModal(true);
  };

  // Làm lại quiz
  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setShowAnswers(false);
    setShowModal(false);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      margin: '16px 0',
      maxWidth: '700px'
    }}>
      <h3>{title}</h3>

      {/* Vòng lặp hiển thị các câu hỏi */}
      {questions.map((q, index) => {
        const userAnswer = answers[index];
        const correctAnswer = q.correctAnswer;
        // Tạo 2 biến màu cho True/False, mặc định "inherit"
        let trueLabelColor = 'inherit';
        let falseLabelColor = 'inherit';

        if (showAnswers && userAnswer === 'True') {
          // Người dùng chọn True
          trueLabelColor = (correctAnswer === 'True') ? 'blue' : 'red';
        } else if (showAnswers && userAnswer === 'False') {
          // Người dùng chọn False
          falseLabelColor = (correctAnswer === 'False') ? 'blue' : 'red';
        }

        return (
          <div 
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
              padding: '8px',
              borderRadius: '4px'
            }}
          >
            {/* Câu hỏi bên trái */}
            <div style={{ flex: '1 0 250px' }}>
              <span style={{ marginRight: '8px' }}>{index + 1}.</span>
              {q.question}
            </div>

            {/* Cột True/False bên phải */}
            <div>
              <label style={{ marginRight: '16px', color: trueLabelColor }}>
                <input
                  type="radio"
                  name={`q-${index}`}
                  value="True"
                  checked={userAnswer === 'True'}
                  onChange={() => handleChange(index, 'True')}
                  style={{ marginRight: '4px' }}
                />
                True
              </label>

              <label style={{ color: falseLabelColor }}>
                <input
                  type="radio"
                  name={`q-${index}`}
                  value="False"
                  checked={userAnswer === 'False'}
                  onChange={() => handleChange(index, 'False')}
                  style={{ marginRight: '4px' }}
                />
                False
              </label>
            </div>
          </div>
        );
      })}

      {/* Các nút chức năng */}
      <div style={{ marginTop: '16px' }}>
        <button onClick={handleCheck} style={{ marginRight: '8px', cursor: 'pointer' }}>
          Kiểm tra
        </button>
        <button onClick={handleReset} style={{ cursor: 'pointer' }}>
          Try again
        </button>
      </div>

      {/* Modal hiển thị kết quả nếu showModal = true */}
      {showModal && (
        <ResultModal
          score={score}
          total={questions.length}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
