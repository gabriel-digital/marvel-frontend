import React from 'react';

const Loader = () => {
  return (
    <div className="loader loader--style2" title="1">
      <span>
        On cherche des supers pouvoirs, <br />
        Veuillez patienter svp...
      </span>
      <svg
        version="1.1"
        id="loader-1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="140px"
        height="140px"
        viewBox="0 0 50 50"
      >
        <path
          fill="rgba(230, 36, 41, 1)"
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default Loader;
