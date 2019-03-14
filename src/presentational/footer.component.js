import React from 'react';
import {NavLink} from 'react-router-dom';
import {    
    Container, 
    Col,
    Row,
    Nav,
    NavItem,    
    Button,
    Fade,
    Collapse,
    CardBody, 
    Card
    } from 'reactstrap';
import logo from '../resources/monneo-logo-blue.png';
import facebook from '../resources/facebook-square-brands.svg';
import linkedin from '../resources/linkedin-brands.svg';
import information from '../resources/info-circle-solid.svg';
import '../style/Footer.css';

class Footer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            fadeIn: false
        };        
        // this.toggle = this.toggle.bind(this);
    }

    //    turn off till client decision

    // toggle() {        
    //     this.setState({
    //         fadeIn: !this.state.fadeIn
    //     });
        
    // }

    // componentDidUpdate() {
    //     const button = document.querySelector('#footer-btn');
    //     if (this.state.fadeIn === false) {
    //         button.textContent = 'rozwiń';
    //     } else {
    //         button.textContent = 'zwiń';
    //     }
    // }

    render() {
        return (
            <footer>
                <Container className="foot w-100" fluid>
                    <Row>   
                        <Col className="align-content-center py-1" lg={{size:3, offset:1}}><a href={window.location.hostname}><img src={logo}/></a></Col>
                        <Col lg="4" className="foot-address py-4">
                            <p>
                                Monneo S.A.
                            </p>
                            <p>
                                biuro@monneo.pl
                            </p>
                            <p>    
                                ul. ..........
                                Wrocław, tel. .........
                            </p>
                            <p> 
                                REGON: 381640767 | 
                                KRS: 0000754195 | 
                                NIP: 896-158-20-36
                            </p>                            
                        </Col> 
                        <Col lg="3" className="py-1">
                            <div className="d-inline-block text-nowrap text-left social">
                                    <a href="#"><i className="fab fa-facebook-square social-logo"></i></a>
                                    <a href="#"><i className="fab fa-linkedin social-logo"></i></a>
                                    <a href="#"><i className="fas fa-info-circle social-logo"></i></a>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Nav className="nav flex-row text-center justify-content-between py-4">
                            <NavItem className="navbar-item navbar-item-footer text-center text-nowrap mx-4"><NavLink className="nav-link nav-link-footer" to="/Policy" >Polityka prywatności</NavLink></NavItem>
                            <NavItem className="navbar-item navbar-item-footer mx-4"><NavLink className="nav-link nav-link-footer" to="/Cookies" >Cookies</NavLink></NavItem>
                            <NavItem className="navbar-item navbar-item-footer mx-4"><NavLink className="nav-link nav-link-footer" to="/Contact" >Kontakt</NavLink></NavItem>
                        </Nav>
                    </Row>
                    {/* clause below hided till clients decision */}
                    {/* <Row>
                        <Col lg={{size: 10, offset: 1}} sm="12" className="clause justify-content-center">                                            
                            <p className="text-justify">
                                Monneo S.A. z siedzibą w Radwanicach (55-010) przy ul. Pogodna 22G, telefon ........... . NIP: 896-158-20-36, REGON: 381640767. Sąd Rejonowy dla Wrocławia, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego, KRS 0000754195. Kapitał zakładowy w wysokości 200 000,00 zł.

                                Informujemy, że działamy w oparciu o przepisy polskiego prawa określone w szczególności w Kodeksie cywilnym oraz Ustawie o kredycie konsumenckim.

                                Opłata za minutę połączenia zgodna z taryfą operatora.
                            </p>
                            <Button className="footer-clause-btn btn btn-link btn-small my-2" id="footer-btn" color="light" onClick={this.toggle}>rozwiń</Button> 
                            <Collapse isOpen={this.state.fadeIn} id="footer-clause-fade">
                                <p className="text-justify">
                                    Pożyczkodawcą jest Monneo S.A. Przyznanie pożyczki zależy od wyniku oceny zdolności kredytowej wnioskodawcy. Maksymalna wysokość pierwszej pożyczki przez internet lub telefon to ....... zł. Jednorazowa opłata rejestracyjna, która jest niezwłocznie zwracana wnioskodawcy, wynosi 1 grosz (gdy Klient dokonuje opłaty rejestracyjnej na jeden z rachunków bankowych, w którym Spółka posiada swoje konto). Reprezentatywny przykład dla pierwszej pożyczki udzielanej za pośrednictwem strony internetowej www.monneo.pl lub przez telefon: Rzeczywista Roczna Stopa Oprocentowania (RRSO) to 0% przy założeniach: całkowita kwota pożyczki 1000; całkowita kwota do zapłaty 1000 zł; oprocentowanie stałe w skali roku 0%; całkowity koszt pożyczki 0 zł; umowa na 30 dni. Stan na ......... r. Przyznanie pożyczki zależy od wyniku oceny zdolności kredytowej wnioskodawcy.

                                    Reprezentatywny przykład dla kolejnej pożyczki udzielanej za pośrednictwem strony www.monneo.pl lub przez telefon: Rzeczywista Roczna Stopa Oprocentowania (RRSO) to .......% przy założeniach: całkowita kwota pożyczki 2000; całkowita kwota do zapłaty 2400 zł; oprocentowanie stałe w skali roku 10%; całkowity koszt pożyczki 400 zł (prowizja 383,60zł, odsetki 16,40zł); umowa na 30 dni. Stan na .......... r. Przyznanie pożyczki zależy od wyniku oceny zdolności kredytowej wnioskodawcy.

                                    W przypadku opóźnienia w spłacie pożyczki, Pożyczkodawca zastrzega sobie możliwość naliczenia odsetek w wysokości dwukrotności wysokości odsetek ustawowych za opóźnienie (odsetki maksymalne za opóźnienie). Odsetki ustawowe za opóźnienie stanowią wysokość równą sumie stopy referencyjnej Narodowego Banku Polskiego i 5,5 punktów procentowych. Ponadto Pożyczkobiorca może zostać zobowiązany do pokrycia kosztów dochodzenia zwrotu Pożyczki na drodze postępowania sądowego.

                                    W przypadku łącznego spełnienia przesłanek określonych w artykule 14 lub 16 bądź 17 lub 18 ustawy z dnia 9 kwietnia 2010 r. o udostępnianiu informacji gospodarczych i wymianie danych gospodarczych (Dz.U. 2018 poz. 470 ze zm.) Pożyczkodawca ma prawo przekazać informacje o zobowiązaniach Pożyczkobiorcy do Biur Informacji Gospodarczej, co może mieć wpływ na zdolność kredytową Pożyczkobiorcy. Przekazanie danych Pożyczkobiorcy do Biur Informacji Gospodarczej jest dokonywane na podstawie pisemnej umowy o udostępnianie informacji gospodarczych zawartej przez Pożyczkodawcę z Biurem Informacji Gospodarczej oraz w oparciu o przepisy rozdziału 3 ustawy o udostępnianiu informacji gospodarczych i wymianie danych gospodarczych.

                                    Przedłużenie spłaty pożyczki nie odbywa się automatycznie i jest zależne od woli klienta. Przedłużenie terminu spłaty odbywa się po dokonaniu opłaty za przedłużenie, której wysokość zależy od kwoty pożyczki i terminu przedłużenia.

                                    Administratorem danych osobowych jest Monneo S.A. z siedzibą w Radwanicach (55-010) przy ul. Pogodna 22G. Wszelkie informacje na temat zasad przetwarzania danych osobowych, celów, w jakich są przetwarzane, podstaw prawnych przetwarzania, kategoriach odbiorców danych osobowych, okresie przetwarzania danych, konieczności lub dobrowolności podania danych osobowych i konsekwencjach ich niepodania, zautomatyzowanym podejmowaniu decyzji i przysługujących Ci uprawnieniach znaleźć możesz w naszej Polityce Prywatności.

                                    Podmiotem właściwym do pozasądowego rozstrzygania sporu wynikającego z umowy zawartej pomiędzy konsumentem a Monneo S.A. jest Rzecznik Finansowy. Kontakt do Rzecznika Finansowego oraz szczegółowe informacje dotyczące postępowania dostępne są na stronie internetowej www.rf.gov.pl.

                                    W celu rozstrzygnięcia sporu pomiędzy Monneo S.A. a konsumentem, istnieje także możliwość skorzystania z platformy internetowej ODR, dostępnej TUTAJ. Platforma ODR ułatwia niezależne, bezstronne, przejrzyste, skuteczne, szybkie i sprawiedliwe pozasądowe rozstrzyganie przez internet sporów między konsumentami i przedsiębiorcami.
                                    Szybka pożyczka przez Internet – monneo.pl
                                </p> 
                            </Collapse> 
                        </Col>                                               
                    </Row> */}
                </Container>
            </footer>
        )
    }
}
export default Footer;