'use client'
import styled from 'styled-components';

const BackgroundAnimation = () => {
    return (
        <StyledWrapper>
            <div className="loader">
                {/* Row 1 */}
                <div className="cell d-0" />
                <div className="cell d-1" />
                <div className="cell d-2" />
                <div className="cell d-3" />
                <div className="cell d-4" />
                <div className="cell d-5" />
                <div className="cell d-6" />
                <div className="cell d-7" />
                <div className="cell d-8" />
                <div className="cell d-9" />
                
                {/* Row 2 */}
                <div className="cell d-1" />
                <div className="cell d-2" />
                <div className="cell d-3" />
                <div className="cell d-4" />
                <div className="cell d-5" />
                <div className="cell d-6" />
                <div className="cell d-7" />
                <div className="cell d-8" />
                <div className="cell d-9" />
                <div className="cell d-10" />
                
                {/* Row 3 */}
                <div className="cell d-2" />
                <div className="cell d-3" />
                <div className="cell d-4" />
                <div className="cell d-5" />
                <div className="cell d-6" />
                <div className="cell d-7" />
                <div className="cell d-8" />
                <div className="cell d-9" />
                <div className="cell d-10" />
                <div className="cell d-11" />
                
                {/* Row 4 */}
                <div className="cell d-3" />
                <div className="cell d-4" />
                <div className="cell d-5" />
                <div className="cell d-6" />
                <div className="cell d-7" />
                <div className="cell d-8" />
                <div className="cell d-9" />
                <div className="cell d-10" />
                <div className="cell d-11" />
                <div className="cell d-12" />
                
                {/* Row 5 */}
                <div className="cell d-4" />
                <div className="cell d-5" />
                <div className="cell d-6" />
                <div className="cell d-7" />
                <div className="cell d-8" />
                <div className="cell d-9" />
                <div className="cell d-10" />
                <div className="cell d-11" />
                <div className="cell d-12" />
                <div className="cell d-13" />
                
                {/* Row 6 */}
                <div className="cell d-5" />
                <div className="cell d-6" />
                <div className="cell d-7" />
                <div className="cell d-8" />
                <div className="cell d-9" />
                <div className="cell d-10" />
                <div className="cell d-11" />
                <div className="cell d-12" />
                <div className="cell d-13" />
                <div className="cell d-14" />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .loader {
        --cell-size: 51px;
        --cell-spacing: 1px;
        --cells: 10;
        --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
        display: flex;
        flex-wrap: wrap;
        width: var(--total-size);
        height: calc(6 * (var(--cell-size) + 2 * var(--cell-spacing)));
    }

    .cell {
        flex: 0 0 var(--cell-size);
        margin: var(--cell-spacing);
        background-color: transparent;
        box-sizing: border-box;
        border-radius: 4px;
        animation: 1.5s ripple ease infinite;
    }

    .cell.d-1 {
        animation-delay: 100ms;
    }

    .cell.d-2 {
        animation-delay: 200ms;
    }

    .cell.d-3 {
        animation-delay: 300ms;
    }

    .cell.d-4 {
        animation-delay: 400ms;
    }

    .cell.d-5 {
        animation-delay: 500ms;
    }

    .cell.d-6 {
        animation-delay: 600ms;
    }

    .cell.d-7 {
        animation-delay: 700ms;
    }

    .cell.d-8 {
        animation-delay: 800ms;
    }

    .cell.d-9 {
        animation-delay: 900ms;
    }

    .cell.d-10 {
        animation-delay: 1000ms;
    }

    .cell.d-11 {
        animation-delay: 1100ms;
    }

    .cell.d-12 {
        animation-delay: 1200ms;
    }

    .cell.d-13 {
        animation-delay: 1300ms;
    }

    .cell.d-14 {
        animation-delay: 1400ms;
    }

    .cell:nth-child(1) {
        --cell-color: #00FF87;
    }

    .cell:nth-child(2) {
        --cell-color: #0CFD95;
    }

    .cell:nth-child(3) {
        --cell-color: #17FBA2;
    }

    .cell:nth-child(4) {
        --cell-color: #23F9B2;
    }

    .cell:nth-child(5) {
        --cell-color: #30F7C3;
    }

    .cell:nth-child(6) {
        --cell-color: #3DF5D4;
    }

    .cell:nth-child(7) {
        --cell-color: #45F4DE;
    }

    .cell:nth-child(8) {
        --cell-color: #53F1F0;
    }

    .cell:nth-child(9) {
        --cell-color: #60EFFF;
    }

    .cell:nth-child(10) {
        --cell-color: #6DEEFF;
    }

    .cell:nth-child(11) {
        --cell-color: #7AECFF;
    }

    .cell:nth-child(12) {
        --cell-color: #87EBFF;
    }

    .cell:nth-child(13) {
        --cell-color: #94E9FF;
    }

    .cell:nth-child(14) {
        --cell-color: #A1E8FF;
    }

    .cell:nth-child(15) {
        --cell-color: #AEE6FF;
    }

    .cell:nth-child(16) {
        --cell-color: #BBE5FF;
    }

    .cell:nth-child(17) {
        --cell-color: #C8E3FF;
    }

    .cell:nth-child(18) {
        --cell-color: #D5E2FF;
    }

    .cell:nth-child(19) {
        --cell-color: #E2E0FF;
    }

    .cell:nth-child(20) {
        --cell-color: #EFDFFF;
    }

    .cell:nth-child(21) {
        --cell-color: #FCDDFF;
    }

    .cell:nth-child(22) {
        --cell-color: #FFDCF5;
    }

    .cell:nth-child(23) {
        --cell-color: #FFDAEB;
    }

    .cell:nth-child(24) {
        --cell-color: #FFD9E1;
    }

    .cell:nth-child(25) {
        --cell-color: #FFD7D7;
    }

    .cell:nth-child(26) {
        --cell-color: #FFD6CD;
    }

    .cell:nth-child(27) {
        --cell-color: #FFD4C3;
    }

    .cell:nth-child(28) {
        --cell-color: #FFD3B9;
    }

    .cell:nth-child(29) {
        --cell-color: #FFD1AF;
    }

    .cell:nth-child(30) {
        --cell-color: #FFD0A5;
    }

    .cell:nth-child(31) {
        --cell-color: #FFCE9B;
    }

    .cell:nth-child(32) {
        --cell-color: #FFCD91;
    }

    .cell:nth-child(33) {
        --cell-color: #FFCB87;
    }

    .cell:nth-child(34) {
        --cell-color: #FFCA7D;
    }

    .cell:nth-child(35) {
        --cell-color: #FFC873;
    }

    .cell:nth-child(36) {
        --cell-color: #FFC769;
    }

    .cell:nth-child(37) {
        --cell-color: #FFC55F;
    }

    .cell:nth-child(38) {
        --cell-color: #FFC455;
    }

    .cell:nth-child(39) {
        --cell-color: #FFC24B;
    }

    .cell:nth-child(40) {
        --cell-color: #FFC141;
    }

    .cell:nth-child(41) {
        --cell-color: #FFBF37;
    }

    .cell:nth-child(42) {
        --cell-color: #FFBE2D;
    }

    .cell:nth-child(43) {
        --cell-color: #FFBC23;
    }

    .cell:nth-child(44) {
        --cell-color: #FFBB19;
    }

    .cell:nth-child(45) {
        --cell-color: #FFB90F;
    }

    .cell:nth-child(46) {
        --cell-color: #FFB805;
    }

    .cell:nth-child(47) {
        --cell-color: #FFB600;
    }

    .cell:nth-child(48) {
        --cell-color: #FFB500;
    }

    .cell:nth-child(49) {
        --cell-color: #FFB300;
    }

    .cell:nth-child(50) {
        --cell-color: #FFB200;
    }

    .cell:nth-child(51) {
        --cell-color: #FFB000;
    }

    .cell:nth-child(52) {
        --cell-color: #FFAF00;
    }

    .cell:nth-child(53) {
        --cell-color: #FFAD00;
    }

    .cell:nth-child(54) {
        --cell-color: #FFAC00;
    }

    .cell:nth-child(55) {
        --cell-color: #FFAA00;
    }

    .cell:nth-child(56) {
        --cell-color: #FFA900;
    }

    .cell:nth-child(57) {
        --cell-color: #FFA700;
    }

    .cell:nth-child(58) {
        --cell-color: #FFA600;
    }

    .cell:nth-child(59) {
        --cell-color: #FFA400;
    }

    .cell:nth-child(60) {
        --cell-color: #FFA300;
    }

    /*Animation*/
    @keyframes ripple {
        0% {
        background-color: transparent;
        }

        30% {
        background-color: var(--cell-color);
        }

        60% {
        background-color: transparent;
        }

        100% {
        background-color: transparent;
        }
    }`;

export default BackgroundAnimation;