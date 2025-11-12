"use client";
import styled from 'styled-components';

const MyName = () => {
    return (
        <StyledWrapper>
        <div className="loader-wrapper">
            <span className="loader-letter">G</span>
            <span className="loader-letter">a</span>
            <span className="loader-letter">l</span>
            <span className="loader-letter">i</span>
            <span className="loader-letter">h</span>
            <span className="loader-spacer"></span>
            <span className="loader-letter">W</span>
            <span className="loader-letter">i</span>
            <span className="loader-letter">c</span>
            <span className="loader-letter">a</span>
            <span className="loader-letter">k</span>
            <span className="loader-letter">s</span>
            <span className="loader-letter">a</span>
            <span className="loader-letter">n</span>
            <span className="loader-letter">a</span>
            <div className="loader" />
        </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.span`
    display: inline-flex;
    align-items: baseline;
    justify-content: center;

    .loader-wrapper {
        position: relative;
        display: inline-flex;
        align-items: baseline;
        justify-content: center;

        font-family: "Poppins", sans-serif;
        font-size: 1.1em;
        font-weight: 600;
        user-select: none;
        color: #9C19E0;
    }

    .loader {
        position: absolute;
        inset: 0;
        z-index: 1;
        background-color: transparent;
        mask: repeating-linear-gradient(
        90deg,
        transparent 0,
        transparent 6px,
        black 7px,
        black 8px
        );
    }

    @keyframes transform-animation {
        0% {
        transform: translate(-55%);
        }
        100% {
        transform: translate(55%);
        }
    }

    @keyframes opacity-animation {
        0%, 100% {
        opacity: 0;
        }
        15% {
        opacity: 1;
        }
        65% {
        opacity: 0;
        }
    }

    .loader-letter {
        display: inline-block;
        opacity: 0;
        animation: loader-letter-anim 4s infinite linear;
        z-index: 2;
    }

    .loader-spacer {
        display: inline-block;
        width: 0.3em;
    }

    .loader-letter:nth-child(1)  { animation-delay: 0.10s; }
    .loader-letter:nth-child(2)  { animation-delay: 0.205s; }
    .loader-letter:nth-child(3)  { animation-delay: 0.31s; }
    .loader-letter:nth-child(4)  { animation-delay: 0.415s; }
    .loader-letter:nth-child(5)  { animation-delay: 0.52s; }
    .loader-letter:nth-child(6)  { animation-delay: 0.625s; }
    .loader-letter:nth-child(7)  { animation-delay: 0.73s; }
    .loader-letter:nth-child(8)  { animation-delay: 0.835s; }
    .loader-letter:nth-child(9)  { animation-delay: 0.94s; }
    .loader-letter:nth-child(10) { animation-delay: 1.045s; }
    .loader-letter:nth-child(11) { animation-delay: 1.15s; }
    .loader-letter:nth-child(12) { animation-delay: 1.255s; }
    .loader-letter:nth-child(13) { animation-delay: 1.36s; }
    .loader-letter:nth-child(14) { animation-delay: 1.465s; }
    .loader-letter:nth-child(15) { animation-delay: 1.57s; }

    @keyframes loader-letter-anim {
        0% { opacity: 0; }
        5% {
        opacity: 1;
        text-shadow: 0 0 8px #AE00FB;
        transform: scale(1.1) translateY(-2px);
        }
        20% { opacity: 0.2; }
        100% { opacity: 0; }
    }
`;

export default MyName;
