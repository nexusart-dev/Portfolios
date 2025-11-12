'use client'

import styled from 'styled-components';
import Image from "next/image";
import { certificate } from '@/data';
import { OpenDialog } from '../icons';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

export default function Certificate() {
    return (
    <section id="certificate" className="pt-20 pb-36 bg-gray-50 dark:bg-[#2E073F]">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                My Certificate
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                {certificate.map((cert, index) => (
                    <StyledWrapper key={`cert-${cert.id}-${index}`}>
                        <div className="card">
                            <div className="img">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="card-content">
                                <div className="flex justify-between items-center">
                                    <small className="badge">{cert.description}</small>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="badgeZoom">
                                                <button className="text-white">
                                                    <OpenDialog width={20} height={20} />
                                                </button>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-transparent border-0 [&>button]:hidden">
                                            <DialogTitle className='pt-5 ml-2'>{cert.description}</DialogTitle>
                                            <div className="relative w-full h-[75vh] p-0">
                                                <Image
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="bg-white dark:bg-gray-800 p-4 rounded-b-lg">
                                                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                                    {cert.date}
                                                </p>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div className="description">
                                    <div className="title">
                                        <p>
                                            <strong>{cert.title}</strong>
                                        </p>
                                    </div>
                                    <p className="card-footer">{cert.date}</p>
                                </div>
                            </div>
                        </div>
                    </StyledWrapper>
                ))}
            </div>
        </div>
    </section>
    );
}

const StyledWrapper = styled.div`
    .card {
        position: relative;
        width: 100%;
        max-width: 350px;
        aspect-ratio: 16 / 12;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 0px 10px 1px #00000033;
        transition: transform 300ms ease, box-shadow 300ms ease;
    }

    @media (max-width: 1024px) {
        .card {
            max-width: 300px;
        }
    }

    @media (max-width: 768px) {
        .card {
            max-width: 90%;
            aspect-ratio: 4 / 3;
        }
    }

    @media (max-width: 480px) {
        .card {
            max-width: 100%;
            aspect-ratio: 1 / 1;
        }
    }

    .card:hover {
        transform: translateY(-10px);
        box-shadow: 0px 5px 20px 5px #00000044;
    }

    .img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 10;
    }

    .badge {
        background-color: #00000055;
        padding: 2px 10px;
        border-radius: 10px;
        backdrop-filter: blur(2px);
        width: fit-content;
        color: white;
        align-items: center;
        display: flex;
    }

    .badgeZoom {
        background-color: #00000055;
        padding: 3px 4px;
        border-radius: 8px;
        backdrop-filter: blur(2px);
        width: fit-content;
        color: white;
        align-items: center;
        display: flex;
        cursor: pointer;
        transition: background-color 200ms ease;
    }

    .badgeZoom:hover {
        background-color: #00000077;
    }

    .description {
        box-shadow: 0px 0px 10px 5px #00000033;
        width: 100%;
        padding: 8px;
        background-color: #ffffff55;
        backdrop-filter: blur(5px);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .title {
        font-size: 14px;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
    }

    .title p {
        margin: 0;
        line-height: 1;
    }

    .card-footer {
        color: #00000088;
        font-size: 10px;
        margin: 0;
        line-height: 1;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .card {
            width: 100%;
            max-width: 400px;
        }
    }
`;