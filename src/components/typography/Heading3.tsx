import ITypography from "./ITypography";

const Heading3 = ({text, url} : ITypography) => {
    return (
        <h3 className="text-2xl lg:text-4xl font-spacemono">
            {text}
        </h3>
    ); 
};
  
export default Heading3;