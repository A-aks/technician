import React, { useEffect, useState } from 'react'
import { Card, CardLink, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';
import wepik from '../assets/wepik-export-20240410101805ufdL.png'
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
        <Carousel className='bg-dark md:cols-6' >
          <Carousel.Item>
            <Image className='opacity-100 shadow' height={250} rounded src="https://img.freepik.com/free-photo/man-servant-getting-payed-by-owner_23-2149587635.jpg?w=740&t=st=1712740643~exp=1712741243~hmac=3a4ab6ff2d9a82f1e3d3cc1ae677f8d85f090402a3ee84b5885f24c83c1f06c3" />
            <Carousel.Caption>
              <div className='bg-light opacity-75 rounded' style={ {display:'flex', flexDirection:'column',padding:'auto', margin:'auto'}}>
              <h3 className='text-dark h2 '>Home Services</h3>
              <blockquote className="blockquote">
                <p className='h6 text-dark'> All services at your doorstep</p>
              </blockquote>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <Image className='opacity-100 shadow' rounded height={250} src="https://www.neit.edu/wp-content/uploads/2021/06/How-to-be-HVAC-Technician-scaled.jpg" />
            <Carousel.Caption>
            <div className='rounded bg-light text-dark opacity-75' style={ {display:'flex', flexDirection:'column',padding:'auto', margin:'auto'}}>
              <h3 className="h2">Technician's</h3>
              <blockquote className="blockquote">
                <p className='h6'>Well Skilled, Certified & Experienced</p>
              </blockquote>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className='opacity-100 shadow' rounded height={250} src='https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg?t=st=1712747200~exp=1712750800~hmac=c3c0707c075c96d671eccd2342718a4457fabf55f073c1ad75915bb3fa78fb18&w=740' />
            <Carousel.Caption >
              <div className='rounded bg-light text-dark p-1 opacity-75' style={ {display:'flex', flexDirection:'column',padding:'auto', margin:'auto'}}>
              <h3 className='h2'>AC Services</h3>
              <blockquote className="blockquote">
                <p className='h6'>Mounting, Unmounting, Repairing</p>
              </blockquote>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className='opacity-100 shadow' rounded height={250} src='https://4bbdwp2p.media.zestyio.com/Fridge-Repair_1.jpg' />
            <Carousel.Caption >
              <div className='rounded bg-light text-dark opacity-75' style={ {display:'flex', flexDirection:'column',padding:'auto', margin:'auto'}}>
              <h3 className='h2'>Refrigerator</h3>
              <blockquote className="blockquote">
                <p className='h6'>Repairing</p>
              </blockquote>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container fluid className='d-flex flex-wrap justify-content-center align-items-center'>
        <div className='shadow m-2 p-2 rounded bg-info '>
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
