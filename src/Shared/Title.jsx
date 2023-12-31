/* eslint-disable react/prop-types */
const Title = ({ heading, subHeading }) => {
  return (
    <div className="text-center font-bold my-16">
      <h2 className="text-4xl pb-4">{heading}</h2>
      <p>{subHeading}</p>
    </div>
  );
};

export default Title;
