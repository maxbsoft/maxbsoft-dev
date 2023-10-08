import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Comments = ({ title, slug }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="block py-20 text-center">
        <Spinner />
      </div>
    );

  return null;
};

export default Comments;