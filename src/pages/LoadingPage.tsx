import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../components/LoadingAnimation';

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return <LoadingAnimation />;
};

export default LoadingPage;