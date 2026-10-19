import React from 'react'
import { PersonalDetails } from "@/Type";

type Props = {
    personalDetails: PersonalDetails;
    file: File | null;
}

const CVPreview: React.FC<Props> = ({ personalDetails, file }) => {
    return (
        <div className={'flex p-16 w-[950px] h-[1200px] shadow-lg'}>
            <div className='flex flex-col w-1/3'>
                <div>
                    { }
                </div>
                <div></div>
            </div>
        </div>
    )
}

export { CVPreview as default }