"use client";
import { Eye, RotateCw } from "lucide-react";
import Image from "next/image";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import { PersonalDetails } from "@/Type";
import { useState } from "react";
import { personalDetailsPreset } from "@/Presets";
import CVPreview from "./components/CVPreview";

export default function Home() {
  const [personalDetails, SetPersonalDetails] = useState<PersonalDetails>(personalDetailsPreset)
  const [fil, setFil] = useState<File | null>(null);

  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar">
            <div className="mb-4 flex justify-between item-center">
              <h1 className="text-2xl font-bold italic">CV
                <span className="text-primary" >Builder</span></h1>
              <button className="btn btn-primary">Previsualiser
                <Eye className="w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6 rounded-lg">

              {/* Qui etes-vous? */}
              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline" >Qui etes-vous?</h1>
                <button className=" btn btn-primary btn-sm">
                  <RotateCw className=" w-4" />
                </button>
              </div>
              <PersonalDetailsForm personalDetails={personalDetails} setPersonalDetails={SetPersonalDetails} setFil={setFil} />


            </div>
          </div>

          <div className="w-2/3 h-full p-10 bg-base-100 bg-[url('/file.svg')] scrollable-preview bg-cover bg-center">
            <div className="flex justify-center items-center">
              <CVPreview
                personalDetails={personalDetails}
                file={fil}
              />

            </div>
          </div>
        </section>

      </div>



      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Le CV builder est uniquement disponible sur ordinateur</h1>

              <p className="py-6">
                Pour une meilleure expérience, veuillez utiliser un ordinateur pour accéder à l'application. Nous vous remercions de votre compréhension et espérons que vous apprécierez l'utilisation de notre CV builder sur un écran plus grand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
