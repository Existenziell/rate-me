const Spinner = ({ type }) => {

  return (
    <>

      {type === "circle" &&
        <div className="lds-circle"><div></div></div>
      }
      {type === "roller" &&
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      }
      {type === "ripple" &&
        <div className="lds-ripple"><div></div><div></div></div>
      }
      {type === "spinner" &&
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      }
      {type === "default" &&
        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      }
      {type === "ring" &&
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      }
      {type === "dualring" &&
        <div className="lds-dual-ring"></div>
      }

      <style jsx>{`
        .lds-circle {
          display: inline-block;
          transform: translateZ(1px);
        }
        .lds-circle > div {
          display: inline-block;
          width: 24px;
          height: 24px;
          margin: 8px;
          border-radius: 50%;
          background: #fff;
          animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        @keyframes lds-circle {
          0%, 100% {
            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
          }
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(1800deg);
            animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
          }
          100% {
            transform: rotateY(3600deg);
          }
        }

        
        .lds-roller {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-roller div {
          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          transform-origin: 40px 40px;
        }
        .lds-roller div:after {
          content: " ";
          display: block;
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fff;
          margin: -4px 0 0 -4px;
        }
        .lds-roller div:nth-child(1) {
          animation-delay: -0.036s;
        }
        .lds-roller div:nth-child(1):after {
          top: 63px;
          left: 63px;
        }
        .lds-roller div:nth-child(2) {
          animation-delay: -0.072s;
        }
        .lds-roller div:nth-child(2):after {
          top: 68px;
          left: 56px;
        }
        .lds-roller div:nth-child(3) {
          animation-delay: -0.108s;
        }
        .lds-roller div:nth-child(3):after {
          top: 71px;
          left: 48px;
        }
        .lds-roller div:nth-child(4) {
          animation-delay: -0.144s;
        }
        .lds-roller div:nth-child(4):after {
          top: 72px;
          left: 40px;
        }
        .lds-roller div:nth-child(5) {
          animation-delay: -0.18s;
        }
        .lds-roller div:nth-child(5):after {
          top: 71px;
          left: 32px;
        }
        .lds-roller div:nth-child(6) {
          animation-delay: -0.216s;
        }
        .lds-roller div:nth-child(6):after {
          top: 68px;
          left: 24px;
        }
        .lds-roller div:nth-child(7) {
          animation-delay: -0.252s;
        }
        .lds-roller div:nth-child(7):after {
          top: 63px;
          left: 17px;
        }
        .lds-roller div:nth-child(8) {
          animation-delay: -0.288s;
        }
        .lds-roller div:nth-child(8):after {
          top: 56px;
          left: 12px;
        }
        @keyframes lds-roller {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }


        .lds-ripple {
          display: inline-block;
          width: 10px;
          height: 50px;
        }
        .lds-ripple div {
          position: absolute;
          border: 4px solid #fff;
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }
        @keyframes lds-ripple {
          0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
          }
        }
        

        .lds-spinner {
          color: official;
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-spinner div {
          transform-origin: 40px 40px;
          animation: lds-spinner 1.2s linear infinite;
        }
        .lds-spinner div:after {
          content: " ";
          display: block;
          position: absolute;
          top: 3px;
          left: 37px;
          width: 6px;
          height: 18px;
          border-radius: 20%;
          background: #fff;
        }
        .lds-spinner div:nth-child(1) {
          transform: rotate(0deg);
          animation-delay: -1.1s;
        }
        .lds-spinner div:nth-child(2) {
          transform: rotate(30deg);
          animation-delay: -1s;
        }
        .lds-spinner div:nth-child(3) {
          transform: rotate(60deg);
          animation-delay: -0.9s;
        }
        .lds-spinner div:nth-child(4) {
          transform: rotate(90deg);
          animation-delay: -0.8s;
        }
        .lds-spinner div:nth-child(5) {
          transform: rotate(120deg);
          animation-delay: -0.7s;
        }
        .lds-spinner div:nth-child(6) {
          transform: rotate(150deg);
          animation-delay: -0.6s;
        }
        .lds-spinner div:nth-child(7) {
          transform: rotate(180deg);
          animation-delay: -0.5s;
        }
        .lds-spinner div:nth-child(8) {
          transform: rotate(210deg);
          animation-delay: -0.4s;
        }
        .lds-spinner div:nth-child(9) {
          transform: rotate(240deg);
          animation-delay: -0.3s;
        }
        .lds-spinner div:nth-child(10) {
          transform: rotate(270deg);
          animation-delay: -0.2s;
        }
        .lds-spinner div:nth-child(11) {
          transform: rotate(300deg);
          animation-delay: -0.1s;
        }
        .lds-spinner div:nth-child(12) {
          transform: rotate(330deg);
          animation-delay: 0s;
        }
        @keyframes lds-spinner {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        

        .lds-default {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-default div {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #fff;
          border-radius: 50%;
          animation: lds-default 1.2s linear infinite;
        }
        .lds-default div:nth-child(1) {
          animation-delay: 0s;
          top: 37px;
          left: 66px;
        }
        .lds-default div:nth-child(2) {
          animation-delay: -0.1s;
          top: 22px;
          left: 62px;
        }
        .lds-default div:nth-child(3) {
          animation-delay: -0.2s;
          top: 11px;
          left: 52px;
        }
        .lds-default div:nth-child(4) {
          animation-delay: -0.3s;
          top: 7px;
          left: 37px;
        }
        .lds-default div:nth-child(5) {
          animation-delay: -0.4s;
          top: 11px;
          left: 22px;
        }
        .lds-default div:nth-child(6) {
          animation-delay: -0.5s;
          top: 22px;
          left: 11px;
        }
        .lds-default div:nth-child(7) {
          animation-delay: -0.6s;
          top: 37px;
          left: 7px;
        }
        .lds-default div:nth-child(8) {
          animation-delay: -0.7s;
          top: 52px;
          left: 11px;
        }
        .lds-default div:nth-child(9) {
          animation-delay: -0.8s;
          top: 62px;
          left: 22px;
        }
        .lds-default div:nth-child(10) {
          animation-delay: -0.9s;
          top: 66px;
          left: 37px;
        }
        .lds-default div:nth-child(11) {
          animation-delay: -1s;
          top: 62px;
          left: 52px;
        }
        .lds-default div:nth-child(12) {
          animation-delay: -1.1s;
          top: 52px;
          left: 62px;
        }
        @keyframes lds-default {
          0%, 20%, 80%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
        }        
        

        .lds-ring {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-ring div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: 64px;
          height: 64px;
          margin: 8px;
          border: 8px solid #fff;
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: #fff transparent transparent transparent;
        }
        .lds-ring div:nth-child(1) {
          animation-delay: -0.45s;
        }
        .lds-ring div:nth-child(2) {
          animation-delay: -0.3s;
        }
        .lds-ring div:nth-child(3) {
          animation-delay: -0.15s;
        }
        @keyframes lds-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
  
        .lds-dual-ring {
          display: inline-block;
          width: 30px;
          height: 30px;
        }
        .lds-dual-ring:after {
          content: " ";
          display: block;
          width: 30px;
          height: 30px;
          margin-left: 15px;
          border-radius: 50%;
          border: 6px solid #fff;
          border-color: #fff transparent #fff transparent;
          animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }        
      `}</style>
    </>
  )
}

export default Spinner
