import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import technicianData from './technicianData.json';
import '../App.css';

interface Technician {
  id: number;
  name: string;
  specialization: { en: string; hi: string };
  image: string;
  location: { en: string; hi: string };
  contact: string;
}



export default function Technician() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const technicians: Technician[] = technicianData.technicians;

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage); // Change the language
  };

  const filteredTechnicians = technicians.filter(technician => {
    const currentSpecialization = i18n.language === 'hi' ? technician.specialization.hi : technician.specialization.en;
    const currentLocation = i18n.language === 'hi' ? technician.location.hi : technician.location.en;

    const selectedCategoryTranslation = i18n.language === 'hi' ? t(`technicians.${selectedCategory.toLowerCase()}`) : selectedCategory;
    const byCategory = selectedCategory === "All" || currentSpecialization === selectedCategoryTranslation;

    const selectedLocationTranslation = i18n.language === 'hi' ? t(`technicians.${selectedLocation.toLowerCase()}`) : selectedLocation;
    const byLocation = selectedLocation === "All" || currentLocation === selectedLocationTranslation;

    return byCategory && byLocation;
  });






  return (
    <div className="container mt-4">
      <div className="language-dropdown d-flex justify-content-end">
        <select onChange={changeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      <h1 className="mb-4 text-center">{t('technicians.technicians')}</h1>
      <div className="row mb-4 justify-content-center">
        <div className="col-md-8 d-flex gap-2">
          <select
            className="form-select mb-2"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">{t('technicians.allSpecializations')}</option>
            <option value="Refrigerator">{t('technicians.refrigerator')}</option>
            <option value="AC">{t('technicians.ac')}</option>
          </select>
          <select
            className="form-select mb-2"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="All">{t('technicians.allLocations')}</option>
            <option value="Rewa">{t('technicians.rewa')}</option>
            <option value="Satna">{t('technicians.satna')}</option>

          </select>
        </div>
      </div>
      <div className="row  justify-content-center">
        {filteredTechnicians.map((technician) => (
          <div key={technician.id} className="col-md-5 mb-2">
            <div className="card d-flex flex-row  h-100 ">
              <div className="card-img-left" style={{ width: "35%", height: "auto" }}>
                <img
                  src={technician.image}
                  className="card-img img-fluid"
                  alt={t('technician.name')}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="card-body" style={{ width: "65%", maxHeight: "130px" }}>
                <h5 className="card-title">{technician.name}</h5>
                <p className="card-text" style={{ marginBottom: "3px" }}>
                  <strong>{t('technicians.specialization')} :</strong>  {i18n.language === 'hi' ? technician.specialization.hi : technician.specialization.en}
                </p>
                <p className="card-text" style={{ marginBottom: "3px" }}>
                  <strong>{t('technicians.location')} :</strong>   {i18n.language === 'hi' ? technician.location.hi : technician.location.en}
                </p>
                {/* <p className="card-text">
            <strong>Contact :</strong> {technician.contact}
          </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
