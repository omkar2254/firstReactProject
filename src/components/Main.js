import React from 'react';
import TextForm from './TextForm';

const Main = ({mode}) => {
  return (
    <>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    {/* <About/> */}
    </>
  );
};

export default Main;