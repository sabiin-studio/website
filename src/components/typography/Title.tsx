import ITypography from "./ITypography";

const Title = ({text, url} : ITypography) => {
    return (
        <h1 className="lg:text-8xl sm:text-7xl text-5xl font-spacemono">
            {text}
        </h1>
    ); 
};
  
export default Title;