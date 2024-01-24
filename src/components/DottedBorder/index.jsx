const DottedBorder = ({ className, children }) => {
  const containerStyle = {
    position: "relative",
    borderRadius: "10px",
  };

  return (
    <div
      className={`relative border-2 border-dotted ${className}`}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

export default DottedBorder;
