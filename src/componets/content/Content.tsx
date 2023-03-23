import type React from 'react';
import Library from '../content-library/Library';
import Record from '../content-record/Record';

const Content: React.FC = () => {
  return (
    <>
      <Library />
      <Record />
    </>
  );
};

export default Content;
