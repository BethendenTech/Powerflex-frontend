import React from "react";
import Image from "next/image";

export interface Status {
    status: number;
}

export default function StatusImage(props: Status) {

    const totalSteps = 5;

    return (
        <div className="w-10/12 m-auto">
            {totalSteps >= props.status && <Image
                src={`/images/status-${props.status}.svg`}
                alt="powerflex"
                width={150}
                height={150}
                className="m-auto"
            />}

            <div className="progress-bar mt-[10px] mb-[15px]">
                {Array.from({ length: totalSteps }, (_, index) => {
                    const isActive = props.status >= index + 1;
                    const lineIsActive = index < props.status - 1;
                    return (
                        <React.Fragment key={index}>
                            <div className={`circle ${isActive ? 'active' : ''}`}>
                                {isActive && index < props.status - 1 ? checkMark() : index + 1}
                            </div>
                            {index < totalSteps - 1 && (
                                <div className={`line ${lineIsActive ? 'active' : ''}`}></div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}

const checkMark = () => {
    return (
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.91538 12C5.71846 12 5.5318 11.9221 5.39231 11.7826L0.216923 6.6072C-0.0723077 6.31797 -0.0723077 5.85028 0.216923 5.5631C0.506154 5.27387 0.973845 5.27387 1.26102 5.5631L5.91334 10.2154L15.739 0.389775C16.0282 0.100544 16.4959 0.100544 16.7831 0.389775C17.0723 0.679005 17.0723 1.14669 16.7831 1.43387L6.43436 11.7826C6.29487 11.9221 6.10821 12 5.91128 12H5.91538Z" fill="white" />
        </svg>
    );

};
