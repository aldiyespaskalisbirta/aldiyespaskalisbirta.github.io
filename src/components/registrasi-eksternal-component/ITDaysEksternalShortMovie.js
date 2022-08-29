import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ITDaysEksternalShortMovie } from "../../Data";
import CountDownTimer from "../../components/CountDownTimer";
import "./test.css";

function Pendaftaran() {
  return (
    <main>
      {ITDaysEksternalShortMovie.map((item) => (
        <section className={`ITDaysRegistrasi ${item.title}`} key={item.id}>
          <Container>
            <Row className="g-5 d-flex">
              <Col className="left-side">
                <Row className="link-pendaftaran">
                  <div className="box box-link-pendaftaran d-flex flex-column justify-content-center align-items-center p-4">
                    <h1 className="title pt-4">{item.title}</h1>
                    <div className="image">
                      <img src={item.img} className="img img-item img-fluid" alt={item.title} />
                    </div>
                    <div className="countdown-timer text-light d-flex justify-content-center">
                      <CountDownTimer time="Sep 20, 2022 00:00:00" />
                    </div>
                    <div className="button-daftar mt-5 mb-5">
                      <a href={item.path} target="_blank" rel="noopener noreferrer" className="btn-daftar">
                        Daftar
                      </a>
                    </div>
                  </div>
                </Row>
                <Row md={7} className="SK">
                  <div className="box box-SK ">
                    <h1 className="title g-4 pb-4">{`Syarat dan Ketentuan ${item.title}`}</h1>
                    <ul>
                      {item.penilaian.map((penilaian, index) => (
                        <li className="description" key={index + 1}>
                          {penilaian}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
              </Col>
              <Col className="right-side">
                <Row md={7} className="SK">
                  <div className="box box-SK ">
                    <h1 className="title g-4 pb-4">{`Syarat dan Ketentuan ${item.title}`}</h1>
                    <ul>
                      {item.syarat.map((syarat, index) => (
                        <li className="description" key={index + 1}>
                          {syarat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      ))}
    </main>
  );
}

export default Pendaftaran;
