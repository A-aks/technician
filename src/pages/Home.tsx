import React, { useEffect, useState } from 'react'
import { Card, CardLink, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';
import wepik from '../assets/wepik-export-20240410101805ufdL.png'
import { useTranslation } from 'react-i18next';
import { ThermometerSnow, Tools, Plug  } from 'react-bootstrap-icons';
import { RiThermometerLine } from 'react-icons/ri';
import { GiWaterDrop } from 'react-icons/gi';
import { FaPlug } from 'react-icons/fa';
import { MdComputer, MdLocalCarWash, MdPhoneAndroid } from 'react-icons/md';
import { IoMdHome } from 'react-icons/io';
import { GiGardeningShears } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import '../App.css'
interface cardlist {
  id: string;
  Name: string;
  icon: string;
}

export default function Home() {
  const { t } = useTranslation();

  const datalist = [
    {
      id: 1,
      title: "New Complain",
      icon: "Add"
    },
    {
      id: 2,
      title: "Technician near me",
      icon: "Search"
    },
  ];
  const serviceCategories = [
    {
      id: 1,
      title: "AC Repair",
      icon: <RiThermometerLine size={50} color="blue" />,
      description: "Expert repair and maintenance services for air conditioning units. Our certified technicians ensure your AC runs efficiently, keeping you cool all year round.",
      route: "/ac-repair",
    },
    {
      id: 2,
      title: "Refrigerator Repair",
      icon: <ThermometerSnow size={50} color="green" />,
      description: "Professional repair and servicing of refrigerators and freezers. From fixing leaks to replacing compressors, we keep your food fresh and your appliances running smoothly.",
      route: "/refrigerator-repair"
    },
    {
      id: 3,
      title: "Electrician",
      icon: <Tools size={50} color="red" />,
      description: "Comprehensive electrical services including wiring, installations, repairs, and troubleshooting. Our electricians ensure safety and reliability in every job.",
      route: "/electrician",
    },
    {
      id: 4,
      title: "Plumber",
      icon: <FaPlug size={50} color="orange" />,
      description: "Expert plumbing services for residential and commercial properties. From leaky faucets to pipe replacements, our plumbers deliver quality workmanship and reliable solutions.",
      route: "/plumber",
    },
    {
      id: 5,
      title: "Computer Installation",
      icon: <MdComputer size={50} color="purple" />,
      description: "Professional installation services for computers and peripherals. From setting up new systems to configuring software, we ensure your computer runs smoothly and efficiently.",
      route: "/computer-installation",
    },
    {
      id: 6,
      title: "Water Heater Repair",
      icon: <GiWaterDrop size={50} color="teal" />,
      description: "Specialized repair and maintenance services for water heaters. Our technicians ensure your water heater operates efficiently, providing hot water when you need it.",
      route: "/water-heater-repair",
    },
    {
      id: 7,
      title: "Washing Machine Repair",
      icon: <RiThermometerLine size={50} color="blue" />,
      description: "Professional repair and servicing of washing machines. From fixing mechanical issues to troubleshooting electrical problems, we ensure your washing machine functions properly.",
      route: "/washing-machine-repair",
    },
    {
      id: 8,
      title: "Security System Installation",
      icon: <AiFillSafetyCertificate size={50} color="red" />,
      description: "Professional installation of security systems for homes and businesses. From CCTV cameras to alarm systems, we keep your property safe and secure.",
      route: "/security-system-installation",
    },
  
  ];
  
  const packages = [
    {
      id: 1,
      name: 'Basic Package',
      price: '$99',
      services: ['AC Repair', 'Plumbing Check', 'Electrical Inspection'],
    },
    {
      id: 2,
      name: 'Standard Package',
      price: '$149',
      services: ['AC Repair', 'Plumbing Check', 'Electrical Inspection', 'Appliance Installation'],
    },
    {
      id: 3,
      name: 'Premium Package',
      price: '$199',
      services: ['AC Repair', 'Plumbing Check', 'Electrical Inspection', 'Appliance Installation', 'Home Cleaning'],
    },
  ];
  const offers = [
    {
      id: 1,
      title: '20% Off AC Repair',
      description: 'Get 20% off on all AC repair services. Limited time offer.',
    },
    {
      id: 2,
      title: 'Free Plumbing Check',
      description: 'Avail a free plumbing check with any service booking.',
    },
    {
      id: 3,
      title: 'Electrical Inspection Discount',
      description: 'Get a discount on electrical inspection with any package booking.',
    },
  ];

  return (
    <div >
      <div className='text-center' >
        <Carousel className=' md:cols-6' style={{ backgroundColor: "#FFB300" }}>
          <Carousel.Item>
            <Image className='opacity-100 shadow' height={250} rounded src="https://img.freepik.com/free-photo/man-servant-getting-payed-by-owner_23-2149587635.jpg?w=740&t=st=1712740643~exp=1712741243~hmac=3a4ab6ff2d9a82f1e3d3cc1ae677f8d85f090402a3ee84b5885f24c83c1f06c3" />
            <Carousel.Caption>
              <div className='bg-light opacity-75 rounded' style={{ display: 'flex', flexDirection: 'column', padding: 'auto', margin: 'auto' }}>
                <h3 className='text-dark h2 ' style={{ fontWeight: "700" }} >{t('Home.Home Services')}</h3>
                <blockquote className="blockquote">
                  <p className='h6 text-dark' style={{ fontWeight: "700" }}> {t('Home.All services at your doorstep')}</p>
                </blockquote>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <Image className='opacity-100 shadow' rounded height={250} src="https://www.neit.edu/wp-content/uploads/2021/06/How-to-be-HVAC-Technician-scaled.jpg" />
            <Carousel.Caption>
              <div className='rounded bg-light text-dark opacity-75' style={{ display: 'flex', flexDirection: 'column', padding: 'auto', margin: 'auto' }}>
                <h3 className="h2" style={{ fontWeight: "700" }}>{t("Home.Technician's")}</h3>
                <blockquote className="blockquote">
                  <p className='h6' style={{ fontWeight: "700" }}>{t('Home.Well Skilled, Certified & Experienced')}</p>
                </blockquote>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className='opacity-100 shadow' rounded height={250} src='https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg?t=st=1712747200~exp=1712750800~hmac=c3c0707c075c96d671eccd2342718a4457fabf55f073c1ad75915bb3fa78fb18&w=740' />
            <Carousel.Caption >
              <div className='rounded bg-light text-dark p-1 opacity-75' style={{ display: 'flex', flexDirection: 'column', padding: 'auto', margin: 'auto' }}>
                <h3 className='h2' style={{ fontWeight: "700" }}>{t('Home.AC Services')}</h3>
                <blockquote className="blockquote">
                  <p className='h6' style={{ fontWeight: "700" }}>{t('Home.Mounting, Unmounting, Repairing')}</p>
                </blockquote>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className='opacity-100 shadow' rounded height={250} src='https://4bbdwp2p.media.zestyio.com/Fridge-Repair_1.jpg' />
            <Carousel.Caption >
              <div className='rounded bg-light text-dark opacity-75' style={{ display: 'flex', flexDirection: 'column', padding: 'auto', margin: 'auto' }}>
                <h3 className='h2' style={{ fontWeight: "700" }}>{t('Home.Refrigerator')}</h3>
                <blockquote className="blockquote">
                  <p className='h6' style={{ fontWeight: "700" }}>{t('Home.Repairing')}</p>
                </blockquote>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container fluid className='d-flex flex-wrap justify-content-center align-items-center'>
        <Link to="/complain" className='shadow m-2 p-2 rounded bg-warning text-center align-items-center d-flex flex-column justify-content-center' style={{ textDecoration: 'none' }}>
          <Icon iconName="ChatQuoteFill" color='white' size={25} />
          <p style={{ fontWeight: "700" }}>{t('Home.New Complain')}</p>
        </Link>

        <Link to="/technician" className='shadow m-2 p-2 rounded bg-warning text-center align-items-center d-flex flex-column justify-content-center' style={{ textDecoration: 'none' }}>
          <Icon iconName="Search" size={25} color='white' />
          <p style={{ fontWeight: "700" }}>{t('Home.Search Technician')}</p>
        </Link>

      </Container>
      <Container fluid className="mt-5 " >
      <h2 className="text-center mb-4">Service Categories</h2>
      <Row className="justify-content-center">
        {serviceCategories.map((category) => (
          <Col sm={12} md={6} lg={6} key={category.id}>
            <Link to={category.route} className="text-decoration-none">
              <Card className="mb-3 service-card " >
                <Card.Body>
                  {category.icon}
                  <Card.Title className="mt-3">{category.title}</Card.Title>
                  <Card.Text>
                    <p>{category.description}</p>
                  </Card.Text>
                  <div className="text-center">
                    <Link to={category.route} className="btn btn-primary"style={{backgroundColor:"#ffaa00"}}>Explore {category.title}</Link>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="mt-5">
      <h2 className="text-center mb-4">Service Packages</h2>
      <Row className="justify-content-center">
        {packages.map((pkg) => (
          <Col sm={12} md={6} lg={4} key={pkg.id}>
            <Card className="mb-3 service-package-card">
              <Card.Body>
                <Card.Title className="text-center">{pkg.name}</Card.Title>
                <Card.Text className="text-center">{pkg.price}</Card.Text>
                <ul>
                  {pkg.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="btn btn-orange">Select Package</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="mt-5">
      <h2 className="text-center mb-4">Special Offers</h2>
      <Row className="justify-content-center">
        {offers.map((offer) => (
          <Col sm={12} md={6} lg={4} key={offer.id}>
            <Card className="mb-3 shadow-sm special-offer-card">
              <Card.Body>
                <Card.Title className="text-center">{offer.title}</Card.Title>
                <Card.Text className="text-center">{offer.description}</Card.Text>
                <div className="text-center">
                  <button className="btn btn-primary">Claim Offer</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    </div>
  )
}
