"use client";

import React, { useEffect, useState } from 'react';

const CursorElem = () => {
    const
        [position, setPosition] = useState({ x: 0, y: 0 }),
        handleMouseMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
    );
};

export default CursorElem;