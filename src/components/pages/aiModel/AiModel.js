import Elexon from "../bankenergi/subcomponents/Elexon";
import useVariablesAiModel from "./useVaraiblesAiModel";
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import styled, { css } from 'styled-components/macro';
import React, { useState, useEffect } from 'react'


const customStyleArrows = css`
    padding: 20px;
`;



const IoArrowBackIcon = styled(IoArrowBack)`
    ${customStyleArrows}
`
const IoArrowForwardIcon = styled(IoArrowForward)`
    ${customStyleArrows}
`
//
const AiModel = () => {
    //const [elexon, setElexon] = useState([]);

    const { v1,v2,graphV1Id,graphV2Id,nextGraphV1Id,prevGraphV1Id,nextGraphV2Id,prevGraphV2Id  } = useVariablesAiModel()
        
    return (
        <div className="bank--section ">
            <div className="bank--wrapper">
                <div>
                    <section className="button--section">
                        <IoArrowBack className="forwardBack" onClick={prevGraphV1Id} />
                        <IoArrowForward className="forwardBack" onClick={nextGraphV1Id} />
                    </section>
                    <h4>AI Model (122 rows)</h4>
                    <Elexon graphId={graphV1Id}
                        dataGiven={v1}
                        datakeyOne="time"
                        datakeyTwo="prediction"
                        dataKeyOneX="demand" 
                        />
                </div>
                <div>
                    <section className="button--section">
                        <IoArrowBack className="forwardBack" onClick={prevGraphV2Id} />
                        <IoArrowForward className="forwardBack" onClick={nextGraphV2Id} />
                    </section>
                    <h4>AI Model (32 rows)</h4>
                    <Elexon graphId={graphV2Id}
                        dataGiven={v2}
                        datakeyOne="time"
                        datakeyTwo="prediction"
                        dataKeyOneX="demand" 
                        />
                </div>

                
            </div>
        </div>
    )
}

export default AiModel
