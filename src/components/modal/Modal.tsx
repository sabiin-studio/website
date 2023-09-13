import { useState } from "react";
import { Card } from "@mui/material";

import IModal from "./IModal";
import Heading4 from '../typography/Heading4';

const Modal = ({typographies}: IModal) => {
    const [, setOpen] = useState(false);

    const hover = () => {
        setOpen(true);
    };

    const unhover = async () => {
        setOpen(false);
    };
    
    return (
        <Card onMouseEnter={hover} onMouseLeave={unhover} sx={{ width: 400 }}>
            <div className="grid grid-flow-col gap-4">
                {
                    typographies.map((t) => {
                        return (
                            <div>
                                <Heading4
                                    text={t.text}
                                    url={t.url}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </Card>
    ); 
};
  
export default Modal;