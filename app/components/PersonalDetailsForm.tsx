import React from "react";
import { PersonalDetails } from "@/Type";

type Props = {
    personalDetails: PersonalDetails;
    setPersonalDetails: (pd: PersonalDetails) => void;
    setFil: (File: File | null) => void;
}

const PersonalDetailsForm: React.FC<Props> = ({ personalDetails, setPersonalDetails, setFil }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof PersonalDetails) => {
        setPersonalDetails({ ...personalDetails, [field]: e.target.value });
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setFil(selectedFile)
        }
    }
    return (
        <div className="Flex flex-col gap-6">
            <input
                type="text"
                placeholder="Nom Complet"
                value={personalDetails.fullName}
                onChange={(e) => handleChange(e, 'fullName')}
                className="input input-bordered w-full" />
            <div className="flex mt-3">
                <input
                    type="email"
                    placeholder="Email"
                    value={personalDetails.email}
                    onChange={(e) => handleChange(e, 'email')}
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Numero de téléphone"
                    value={personalDetails.phone}
                    onChange={(e) => handleChange(e, 'phone')}
                    className="input input-bordered w-ful ml-4"
                />
            </div>

            <input
                type="text"
                placeholder="Adresse"
                value={personalDetails.address}
                onChange={(e) => handleChange(e, 'address')}
                className="input input-bordered w-full mt-3"
            />

            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input file-input-primary file-input-bordered mt-3 w-full"
            />
            <input
                type="text"
                placeholder="Poste Recherché"
                value={personalDetails.postSeeking}
                onChange={(e) => handleChange(e, 'postSeeking')}
                className="input input-bordered w-full mt-3"
            />
            <textarea
                placeholder="Description"
                value={personalDetails.description}
                onChange={(e) => handleChange(e, 'description')}
                className="input input-bordered h-20 w-full mt-3"
            ></textarea>

        </div>
    );
}


export { PersonalDetailsForm as default };