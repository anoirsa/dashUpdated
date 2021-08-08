import React, {useState, useEffect} from 'react'
import './HomePage.css'
import styled , {css}from 'styled-components/macro'
import { fetchWeather } from './subComponents/HopeApi';
import WContainer from './subComponents/WContainer';
import Time from './subComponents/Time';
import User from './subComponents/User';

const customProps = css`
    height : 100%;
    width : 100%;
    background: #fff;
    border-radius: 5px;
    
`;


const LeftSection = styled.div`
    flex: 1;
    display: flex;
    padding: 10px 0;
    flex-direction: column;

    
    
`;
const RightSection = styled.div`
    flex: 1.5;
    
    display:flex;
    padding: 14px 6px;
    
`;
const CurrentWeather = styled.div`
    flex : 2;
    
    padding: 4px;
`;

const CurrentTime = styled.div`
    flex : 1;
    padding: 4px;
`;

const CurrentWatherWrapper = styled.div`
    ${customProps}
    border : 1.5px solid #fff;

`;

const CurrentTimeWrapper = styled.div`
    ${customProps}
    position: relative;
    background: transparent;
`;
const CryptoCurrency = styled.div`
    ${customProps}
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;


`;



const HomePage = () => {
    
    return (
        <div className="home--section">
            <div className="home--wrapper">
                <LeftSection>
                    <CurrentWeather>
                        <CurrentWatherWrapper>
                            <WContainer />
                        </CurrentWatherWrapper>

                    </CurrentWeather>
                    <CurrentTime>
                        <CurrentTimeWrapper>
                            <Time />
                        </CurrentTimeWrapper>

                    </CurrentTime>

                </LeftSection>
                <RightSection>
                    <CryptoCurrency>
                        <User />

                    </CryptoCurrency>

                </RightSection>

            </div>
        </div>
    )
}

export default HomePage
