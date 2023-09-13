import { useState } from "react";
import { Card, Slide } from "@mui/material";

import ITypography from "../../components/typography/ITypography";

import Heading3 from "../../components/typography/Heading3";
import Heading4 from "../../components/typography/Heading4";
import Title from "../../components/typography/Title";

const UnderConstruction = () => {
    const [open, setOpen] = useState(false);

    const hover = () => {
        setOpen(true);
    };

    const unhover = async () => {
        setOpen(false);
    };

    const socials: ITypography[] = [
        { text: "instagram", url: "https://www.instagram.com/sabi.in.studio/" },
        { text: "-", url: "" },
        { text: "email", url: "mailto:hello@sabiin-studio.com" },
    ];
    
    return (
        // grid-rows-[auto_minmax(0,1fr)]
        <div className="lg:mx-28 mx-10 h-screen grid grid-rows-[0.25fr,0.1fr,0.5fr,0.3fr] gap-4">
            <div></div>
            <div className="text-right place-content-center text-mint">
                <Heading3 text={"under construction"}/>
            </div>
            <div className="grid-row-2 text-mint">
                <Title text={"we’re paving the way"}/>
                <Title text="for something"/>
                <Title text="incredible"/>
            </div>
            <div className="text-left lg:text-right place-content-center text-peachy-pink" style={{ overflow: 'hidden' }}>
                <button className="text-left lg:text-right" onMouseEnter={hover} onMouseLeave={unhover}>
                    <Heading3 text={"take a peek here"}/>
                </button>
                <Slide
                    direction="up"
                    in={open}
                    mountOnEnter
                    unmountOnExit
                >
                    <div
                        className="text-center flex justify-start lg:justify-end"
                    >
                        <Card
                            className="bg-gradient-to-r from-[#D9D9D9] to-light-blue border-4 border-mint"
                            onMouseEnter={hover}
                            onMouseLeave={unhover}
                            sx={{ width: 400, height: 250, borderRadius: 5}}
                        >
                            <div className="grid grid-flow-col gap-4">
                                {
                                    socials.map((t) => {
                                        return (
                                            <div className="text-electric-blue">
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
                    </div>
                </Slide>
            </div>
            {/* <div style={{ overflow: 'hidden' }}>
            </div> */}
        </div>
    );
};

export default UnderConstruction;