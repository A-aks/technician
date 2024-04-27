import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Form, Row, Col, Card } from 'react-bootstrap';
import technicianData from './technicianData.json';
import '../App.css';

interface Technicianwala {
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
  const technicianwala: Technicianwala[] = technicianData.technicians;

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const filteredTechnicians = technicianwala.filter(technicianwala => {
    const currentSpecialization = i18n.language === 'hi' ? technicianwala.specialization.hi : technicianwala.specialization.en;
    const currentLocation = i18n.language === 'hi' ? technicianwala.location.hi : technicianwala.location.en;

    const selectedCategoryTranslation = i18n.language === 'hi' ? t(`technicians.${selectedCategory.toLowerCase()}`) : selectedCategory;
    const byCategory = selectedCategory === "All" || currentSpecialization === selectedCategoryTranslation;

    const selectedLocationTranslation = i18n.language === 'hi' ? t(`technicians.${selectedLocation.toLowerCase()}`) : selectedLocation;
    const byLocation = selectedLocation === "All" || currentLocation === selectedLocationTranslation;

    return byCategory && byLocation;
  });

  return (
    <div className="container mt-4" style={{ fontWeight: "700" }}>
      <h2 className="mb-4 text-center" style={{ fontWeight: "700" }}>{t('technicians.technicians')}</h2>
      <Row className="mb-4 justify-content-center">
        <Col md={8} className="d-flex gap-2">
          <Form.Select
            className="custom-input mb-2"
            style={{ fontWeight: "700" }}
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All" style={{ fontWeight: "700" }}>{t('technicians.allSpecializations')}</option>
            <option value="Refrigerator" style={{ fontWeight: "700" }}>{t('technicians.refrigerator')}</option>
            <option value="AC" style={{ fontWeight: "700" }}>{t('technicians.ac')}</option>
          </Form.Select>
          <Form.Select 
            className=" custom-input mb-2"
            style={{ fontWeight: "700" }}
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="All" style={{ fontWeight: "700" }}>{t('technicians.allLocations')}</option>
            <option value="Rewa" style={{ fontWeight: "700" }}>{t('technicians.rewa')}</option>
            <option value="Satna" style={{ fontWeight: "700" }}>{t('technicians.satna')}</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {filteredTechnicians.map((technician) => (
          <Col key={technician.id} md={5} className="mb-2">
            <Card className="d-flex flex-row h-100" style={{ boxShadow: "0px 8px 16px rgba(255, 165, 0, 0.5)" }}>
              <div style={{ width: "35%", height: "auto" }}>
                <Card.Img
                  src={technician.image}
                  alt={t('technician.name')}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <Card.Body style={{ width: "65%", maxHeight: "130px" }}>
                <Card.Title style={{ fontWeight: "700" }}>{technician.name}</Card.Title>
                <Card.Text style={{ marginBottom: "3px" }}>
                  <strong>{t('technicians.specialization')} :</strong> {i18n.language === 'hi' ? technician.specialization.hi : technician.specialization.en}
                </Card.Text>
                <Card.Text style={{ marginBottom: "3px" }}>
                  <strong>{t('technicians.location')} :</strong> {i18n.language === 'hi' ? technician.location.hi : technician.location.en}
                </Card.Text>
                {/* <Card.Text>
                  <strong>Contact :</strong> {technician.contact}
                </Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
