export const DateDisplay = () => {
  const now = new Date();
  
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const formattedDate = now.toLocaleDateString('en-US', options);

  return (
    <div className="date-display">
      {formattedDate}
    </div>
  );
};
