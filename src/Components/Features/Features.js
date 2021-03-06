import React from 'react'
import './Features.css'
import photo from '../../img/bill.jpg'

function Features() {
  return (
    <>
        <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="p-lg-5 ps-lg-0">
                        <h6 class="text-warning">Por que escogernos?</h6>
                        <h1 class="mb-4"> Nos preocupamos por tu bolsillo  </h1>
                        <p class="mb-4 pb-2">Ademas de brindar asistencia para que nuestros clientes puedan hacer sus pagos correctamente, nos encargamos de generar un ahorro o encontrar soluciones economicas para que tengas un servicio optimo al precio ideal.</p>
                        <div class="row g-4">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-warning rounded-circle">
                                        <i class="fa fa-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Servicio de</p>
                                        <h5 class="mb-0">Calidad</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-warning rounded-circle">
                                        <i class="fa fa-user-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Agentes</p>
                                        <h5 class="mb-0">Expertos</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-warning rounded-circle">
                                        <i class="fa fa-drafting-compass text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Obtenga su</p>
                                        <h5 class="mb-0">Cotizacion Gratis</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-warning rounded-circle">
                                        <i class="fa fa-headphones text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Soporte</p>
                                        <h5 class="mb-0">24/7</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: '400px' }}>
                    <div class="position-relative h-100">
                        <img class="photoahorro position-absolute rounded-10 img-fluid w-100 h-100" src={photo} style={{objectFit: 'cover'}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features