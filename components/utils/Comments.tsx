import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

export interface CommentsProps {
  title?: string;
  slug?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Comments = ({ title, slug }: CommentsProps) => {
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
