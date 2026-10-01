function CatIcon({ size = 34, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cat agent"
      role="img"
    >
      <defs>
        <linearGradient
          id="catGradient"
          x1="10"
          y1="8"
          x2="54"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>

      <path
        d="M14 24L13 10L25 17C28 16 36 16 39 17L51 10L50 25C54 29 56 34 56 40C56 50 47 57 32 57C17 57 8 50 8 40C8 34 10 29 14 24Z"
        fill="url(#catGradient)"
      />

      <path
        d="M20 35C22.2 35 24 33.2 24 31C24 28.8 22.2 27 20 27C17.8 27 16 28.8 16 31C16 33.2 17.8 35 20 35Z"
        fill="white"
      />

      <path
        d="M44 35C46.2 35 48 33.2 48 31C48 28.8 46.2 27 44 27C41.8 27 40 28.8 40 31C40 33.2 41.8 35 44 35Z"
        fill="white"
      />

      <circle cx="20" cy="31" r="2" fill="#312E81" />
      <circle cx="44" cy="31" r="2" fill="#312E81" />

      <path
        d="M29 38C30.6 36.5 33.4 36.5 35 38C33.8 40.5 30.2 40.5 29 38Z"
        fill="white"
      />

      <path
        d="M32 40V44M32 44C28.5 44 26 42.8 24 41M32 44C35.5 44 38 42.8 40 41"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CatIcon;