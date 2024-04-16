import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function AcRepairs() {

    const AC_repairs = {
        "Refrigrator": [
            "Refrigerant Recharge",
            "Compressor Replacement",
            "Condenser Coil Cleaning/Replacement",
            "Evaporator Coil Cleaning/Replacement",
            "Fan Motor Repair/Replacement",
            "Thermostat Repair/Replacement",
            "Electrical Component Repair",
            "Ductwork Repair/Replacement",
            "Leak Detection and Repair",
            "System Rebalancing"
        ]
    }



    return (
        <div className='container mt-3 gap-2 d-flex flex-column'>
            <Card style={{ width: 'auto' }}>
                <Card.Body>
                    <Card.Title>Repair Refrigrator</Card.Title>
                    <Card.Text>
                        Ensuring the optimal performance and longevity of your refrigerator involves engaging a skilled technician. They meticulously diagnose issues and provide precise solutions, ensuring your appliance functions flawlessly. By using high-quality components—such as genuine replacement parts and efficient refrigerants—your refrigerator receives the care it truly deserves. This approach enhances its reliability and energy efficiency, contributing to a comfortable and sustainable indoor environment for years to come. Trust capable hands and superior materials to keep your refrigerator running smoothly.

                        <div className='d-flex gap-4 w-50 flex-wrap my-2'>
                            <div className='d-flex align-items-center gap-2' style={{ color: "GrayText" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-pulse-fill" viewBox="0 0 16 16">
                                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5" />
                                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
                                </svg><li className='d-inline text-decoration-none'>Get Insigts of your AC</li>
                            </div>
                            <div className='d-flex align-items-center gap-2' style={{ color: "GrayText" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-shaded" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                                </svg><li className='d-inline text-decoration-none'>Secure Replacement/Repair of parts</li>
                            </div>
                            <div className='d-flex align-items-center gap-2' style={{ color: "GrayText" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
                                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
                                </svg><li className='d-inline text-decoration-none'>No Aditional Charges</li>
                            </div>
                        </div>

                        <h5 className='my-3'>We can reapair</h5>

                        <div>
                            <ul>
                                {AC_repairs.Refrigrator.map((repair, index) => (
                                    <li key={index}>{repair}</li>
                                ))}
                            </ul>
                        </div>
                    </Card.Text>
                    <Link to={'/BookService'}>
                        <Button variant="primary" style={{ backgroundColor: "#DBA800", border: "none", color: "white" }}>Repair</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div >
    )
}

export default AcRepairs