const Shimmer = () => {
  const array = Array(20).fill("");
  return (
    <div className="body">
      {array.map((ele) => {
        return <div className="shimmer-card"></div>;
      })}
    </div>
  );
};

export default Shimmer;
