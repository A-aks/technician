import React, { useEffect, useState } from 'react'
import { Card, CardLink, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';
interface cardlist {
  id: string;
  Name: string;
  icon: string;
}

export default function Home() {
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

  return (
    <div >
      <div className='text-center'>
        <Carousel >
          <Carousel.Item>
          <Image className='opacity-75' height={250} rounded src="https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18258.jpg?w=740&t=st=1712667912~exp=1712668512~hmac=ff09be9b96d2e07c029ae94406c47707d7ee4ed224f19133563289249c8d9033" />
            <Carousel.Caption>
              <h3 className='text-dark'>Home Service</h3>
              <p className='text-dark'>"Service at your doorstep"</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Image className='opacity-75' rounded height={250} src='https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png'/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Image className='opacity-75' rounded height={250} src='https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png'/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container fluid className='d-flex flex-wrap'>
        <div className='shadow m-2 p-2 rounded bg-info text-center'>
          <Icon
            iconName="ChatQuoteFill"
            color='white'
            size={25}
          />
          <p>New Complain</p>
        </div>

        <div className='shadow m-2 p-2 rounded bg-info text-center justify-content-center '>
          <Icon
            iconName="Search"
            size={25}
            color='white'

          />
          <p> Search Technician</p>
        </div>

      </Container>

    </div>
  )
}
