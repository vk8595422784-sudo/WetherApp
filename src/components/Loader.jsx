const Loader = ({ loader }) => {
  return (
    <div className="text-center">
      <p className="spinner-border text-primary" role="status">
        {loader}
      </p>
    </div>
  );
};

export default Loader;
