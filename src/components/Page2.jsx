import React from 'react';

function Page2() {
  return (
    <div className="page-two">
      <style jsx>
        {`
          .page-two {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background-color: pink;
            animation: gross-bg 12s ease infinite;
          }

          @keyframes gross-bg {
            0% {background-color: pink;}
            20% {background-color: green;}
            40% {background-color: yellow;}
            60% {background-color: teal;}
            80% {background-color: purple;}
            100% {background-color: orange;}
          }
          `}
      </style>
    </div>
  )
}

export default Page2;
