import React, { useReducer, useEffect } from 'react';

const rippleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RIPPLE':
      return [...state, action.payload].slice(-15); // limit ripples
    case 'REMOVE_RIPPLE':
      return state.filter(r => r.id !== action.payload);
    default:
      return state;
  }
};

const RippleCursor = ({ maxSize = 40, duration = 700, blur = true }) => {
  const [ripples, dispatch] = useReducer(rippleReducer, []);

  const handleMouseMove = (e) => {
    const ripple = {
      id: `${Date.now()}-${Math.random()}`,
      x: e.clientX,
      y: e.clientY,
    };

    dispatch({ type: 'ADD_RIPPLE', payload: ripple });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_RIPPLE', payload: ripple.id });
    }, duration);
  };

  useEffect(() => {
    // disable on mobile
    if (window.innerWidth < 768) return;

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [duration]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-[#DF6951]/40 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: maxSize,
            height: maxSize,
            transform: 'translate(-50%, -50%)',
            animationDuration: `${duration}ms`,
            filter: blur ? 'blur(3px)' : 'none',
          }}
        />
      ))}
    </div>
  );
};

export default RippleCursor;
