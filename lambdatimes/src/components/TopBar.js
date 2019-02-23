import React from 'react';
import styled from 'styled-components';

const TopBarCss = styled.div` 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: none;
        flex-direction: row;
        position: fixed;
        height: 44px;
        background-color: #333;
        .container {
            width: 100%;
            display: flex;
            justify-content: none;
            align-items: none;
            flex-direction: row;
            color: #fff;
            letter-spacing: 1px;
            padding: 0 10px;
            (min-width: 1280px) {
                width: 1280px;
            }
            .container-left {
                display: flex;
                justify-content: none;
                align-items: center;
                flex-direction: row;
                flex: 1;
                font-size: 11px;
                span {
                    cursor: pointer;
                    margin-right: 25%;
                    font-weight: bold;
              }
            }
            .container-center {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                flex: 3;
                font-size: 9px;
                span {
                  cursor: pointer;
                  margin-right: 5%;
                }
                span:last-child {
                  margin-right: 0;
                }
                span:hover {
                  text-decoration: underline;
                }
            }
            .container-right {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-direction: row;
                flex: 1;
                font-size: 11px;
                font-weight: bold;
                span {
                  cursor: pointer;
                }
            }
        
        }
`;

const TopBar = () => {
  return (
    <TopBarCss className="top-bar">
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </TopBarCss>
  )
}

export default TopBar;