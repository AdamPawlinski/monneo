import React from 'react';
import {    
    Container, 
    Col,
    Row,
    Button,
    Fade
    } from 'reactstrap';
import footerStyles from '../style/footer.css';

class Footer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {fadeIn: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
    render() {
        return (
            <footer>
                <Container className="foot" fluid>
                    <Row>   
                        <Col lg="6"><img src="../resources/monneo-logo_white.png"/></Col>
                        <Col lg="6"></Col>
                    </Row>
                    <Row>
                        <Col lg={{size:4, offset:1}} sm="12">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><a href="#">Polityka prywatności</a></li>
                                <li className="list-group-item"><a href="#">Cookies</a></li>
                                <li className="list-group-item"><a href="#">Kontakt</a></li>
                            </ul>
                        </Col>
                        <Col lg="2" sm="12">
                        </Col>
                        <Col lg="4" sm="12" className="foot-add">
                            <ul>
                                <li>biuro@monneo.pl</li>
                                <li>ul. ..........</li>
                                <li>Wrocław</li>
                                <li>tel. .........</li>
                                <li>REGON: 381640767</li>
                                <li>KRS: 0000754195</li>
                                <li>NIP: 896-158-20-36</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{size: 10, offset: 1}} sm="12" className="clause">                                            
                            <p>
                                Monneo S.A. z siedzibą w Radwanicach (55-010) przy ul. Pogodna 22G, telefon ........... . NIP: 896-158-20-36, REGON: 381640767. Sąd Rejonowy dla Wrocławia, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego, KRS 0000754195. Kapitał zakładowy w wysokości 200 000,00 zł.

                                Informujemy, że działamy w oparciu o przepisy polskiego prawa określone w szczególności w Kodeksie cywilnym oraz Ustawie o kredycie konsumenckim.

                                Opłata za minutę połączenia zgodna z taryfą operatora.
                            </p>
                            <Button className="clause-btn" color="light" onClick={this.toggle}>rozwiń</Button> 
                            <Fade in={this.state.fadeIn}>
                                <p>
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
                            </Fade> 
                        </Col>                                               
                    </Row>
                </Container>
            </footer>
        )
    }
}
export default Footer;