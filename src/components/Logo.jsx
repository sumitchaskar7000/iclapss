const Logo = ({ className = "w-10 h-10", showText = true }) => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blue circle background */}
        <circle cx="50" cy="50" r="50" fill="#2563eb" />

        {/* White lowercase "i" */}
        <circle cx="50" cy="32" r="7" fill="white" />

        <rect
          x="46"
          y="40"
          width="8"
          height="35"
          rx="4"
          ry="4"
          fill="white"
        />
      </svg>

      {showText && (
        <span className="text-2xl font-bold text-blue-600">
          iClapss
        </span>
      )}
    </div>
  );
};

export default Logo;