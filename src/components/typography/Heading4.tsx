import { Link } from "@mui/material";
import ITypography from "./ITypography";

const Heading4 = ({text, url} : ITypography) => {
    return (
        <Link href={`${url}`} underline="none" color="inherit">
            <h4 className="text-lg lg:text-2xl font-spacemono">
                {text}
            </h4>
        </Link>
    ); 
};
  
export default Heading4;