// Create a small glowing dot that follows the cursor

const cursorDot = document.createElement('div');
cursorDot.style.position = 'fixed';
cursorDot.style.width = '12px';
cursorDot.style.height = '12px';
cursorDot.style.borderRadius = '50%';
cursorDot.style.backgroundColor = '#2563eb';
cursorDot.style.boxShadow = '0 0 8px 2px #60a5fa';
cursorDot.style.pointerEvents = 'none';
cursorDot.style.transition = 'transform 0.1s ease';
cursorDot.style.zIndex = '9999';

document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
  // Center the dot on cursor
  cursorDot.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
});
