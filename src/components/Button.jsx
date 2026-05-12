const Button = ({ fetchWeather }) => {
  return (
    <div>
      <button className="btn btn-primary mt-3" onClick={fetchWeather}>
        click
      </button>
    </div>
  );
};

export default Button;
