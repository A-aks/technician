import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {FaUser,FaPhone ,FaLaptop, FaPencilAlt, FaMapMarkerAlt} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';



interface FormData {
  name: string;
  address: string;
  phone: string;
  email: string;
  applianceType: string;
  brandModel: string;
  issueDescription: string;
  preferredDate: string;
  preferredTime: string;
  serviceLocation: string;
  agreeTerms: boolean;
  additionalServices: string[];
  paymentMethod: string;
  billingInfo: string;
}

const initialFormData: FormData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  applianceType: "",
  brandModel: "",
  issueDescription: "",
  preferredDate: "",
  preferredTime: "",
  serviceLocation: "",
  agreeTerms: false,
  additionalServices: [],
  paymentMethod: "",
  billingInfo: "",
};

const Complain: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData(initialFormData);
  };

  return (
    <div className="complain-bg my-4 ">
      <Container className="">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={12} className="my-3">
            <div className="container  p-3 "
              style={{ boxShadow: "0px 8px 16px rgba(255, 165, 0, 0.5)", borderRadius: "20px" }}>
              <h2
                className="text-center mb-4 custom-header"
                style={{ color: "#333", fontWeight: "bold" }}
              >
                
                {t('Complain.New Complain')}
              </h2>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label
                        className="custom-label"
                        style={{ color: "#333", fontWeight: "bold" }}
                      >
                        <FaUser />
                        {t('Complain.Full Name')}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder={t('Complain.Enter Full Name')}
                        className="custom-input"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #ccc",
                          borderRadius: "4px",
                          boxShadow: "none",
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>


                  <Col xs={12} md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label
                        className="custom-label"
                        style={{ color: "#333", fontWeight: "bold" }}
                      >
                          <FaPhone style={{ color: "black", marginRight:"3px" }} />
                      
                        {t('Complain.Phone Number')}
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder={t('Complain.Enter Phone Number')}
                        className="custom-input"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #ccc",
                          borderRadius: "4px",
                          boxShadow: "none",
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="formAddress">
                      <Form.Label
                        className="custom-label my-2"
                        style={{ color: "#333", fontWeight: "bold" }}
                      >
                        <FaMapMarkerAlt />
                        {" "}
                        {t('Complain.Address')}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        placeholder={t('Complain.Enter Your Address')}
                        className="custom-input"
                        value={formData.address}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #ccc",
                          borderRadius: "4px",
                          boxShadow: "none",
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicService">
                      <Form.Label
                        className="custom-label my-2"
                        style={{ color: "#333", fontWeight: "bold" }}
                      ><FaLaptop />
                        {" "}
                        {t('Complain.Service Required')}
                      </Form.Label>
                      <Form.Control
                        as="select"
                        className="custom-select custom-input"
                        name="service"
                        onChange={handleChange}
                        style={{
                          border: "2px solid #ccc",
                          borderRadius: "4px",
                          boxShadow: "none",
                        }}
                        required
                      >
                        <option value="">{t('Complain.Choose...')}</option>
                        <option value="AC">AC</option>
                        <option value="Refrigerator">{t('Complain.Refrigerator')}</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="formIssueDescription">
                      <Form.Label
                        className="custom-label my-2"
                        style={{ color: "#333", fontWeight: "bold" }}
                      ><FaPencilAlt />
                        {t('Complain.Description of the Issue or Service Required')}
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="issueDescription"
                        className="custom-input"
                        value={formData.issueDescription}
                        onChange={handleChange}
                        style={{
                          border: "2px solid #ccc",
                          borderRadius: "4px",
                          boxShadow: "none",
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Col xs={12} md={6}>
                  <Form.Group controlId="formAgreeTerms">
                    <div style={{ marginTop: "10px" }}>
                      <Form.Check
                        type="checkbox"
                        className="custom-checkbox"
                        label={t('Complain.I agree to the terms and conditions')}
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleCheckboxChange}
                        required
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-block mt-3"
                  style={{
                    backgroundColor: "#FFA500",
                    border: "none",
                    borderRadius: "6px",
                    boxShadow: "none",
                    fontWeight: "bold",
                    fontSize: "18px",

                  }}
                >
                  {t('Complain.Register')}
                </Button>
                <Button
                  variant="light"
                  className="btn-block mt-3 mx-2"
                  onClick={() => setFormData(initialFormData)}
                  style={{
                    backgroundColor: "#e9ecef",
                    border: "none",
                    borderRadius: "6px",
                    boxShadow: "none",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {t('Complain.Clear Complain')}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Complain;
