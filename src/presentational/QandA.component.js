import React from 'react';
import {    
    Container, 
    Col,
    Row,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Button,
    Fade
    } from 'reactstrap';
import QandAStyles from '../style/QandA.css';

class QandA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false
        }
        this.toggle = this.toggle.bind(this);        
    };

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        })
    }

    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <ListGroupItemHeading>Kto może wnioskować o pożyczkę?</ListGroupItemHeading>
                    <Button className="open-btn" color="light" onClick={this.toggle}>rozwiń</Button> 
                    <Fade in={this.state.fadeIn}>
                        <ListGroupItemText>
                            Pożyczka jest przeznaczona dla wszystkich osób, które:                        
                                posiadają stałe miesięczne udokumentowane dochody,
                                wiek 25-80 lat,
                                brak negatywnej historii kredytowej w BIK, KRD, BIG InfoMonitor i innych
                            
                        </ListGroupItemText>
                    </Fade>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Jakie jest oprocentowanie pożyczki?</ListGroupItemHeading>
                    <Button className="open-btn" color="light" onClick={this.toggle}>rozwiń</Button> 
                    <Fade in={this.state.fadeIn}>
                        <ListGroupItemText>Wysokość odsetek określa umowa, przy czym oprocentowanie nie może być wyższe niż dwukrotność odsetek ustawowych. 
                        Informację na temat aktualnej wysokości oprocentowania pożyczki znajdziesz tutaj.</ListGroupItemText>
                    </Fade>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Co to jest RRSO?</ListGroupItemHeading>
                    <Button className="open-btn" color="light" onClick={this.toggle}>rozwiń</Button> 
                    <Fade in={this.state.fadeIn}>
                        <ListGroupItemText>RRSO, czyli Roczna Rzeczywista Stopa Oprocentowania wyliczona jest zgodnie ze wzorem zamieszczonym w Załączniku do Ustawy o Kredycie Konsumenckim z dnia 12 maja 2011 r. 
                        Prawo nakłada obowiązek informowania Klientów o wielkości stopy RRSO. 
                        Wielkość ta zależy w dużej mierze od okresu na jaki udzielana jest pożyczka. Zapraszamy do zapoznania się z artykułem publikowanym w Gazecie Bankowej oraz Rzeczpospolitej na temat RRSO. 
                        Artykuł ten wyjaśnia błędne postrzeganie RRSO oraz tłumaczy dlaczego przy takim samym koszcie pożyczki a różnych okresach spłaty następuje nieuzasadniony wzrost wartości stopy RRSO. Więcej informacji znajdziesz tutaj.</ListGroupItemText>
                    </Fade>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Czy mogę odstąpić od Umowy pożyczki?</ListGroupItemHeading>
                    <Button className="open-btn" color="light" onClick={this.toggle}>rozwiń</Button> 
                    <Fade in={this.state.fadeIn}>
                        <ListGroupItemText>Niestety nie.</ListGroupItemText>
                    </Fade>
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Jaka jest maksymalna kwota pożyczki?</ListGroupItemHeading>
                    <Button className="open-btn" color="light" onClick={this.toggle}>rozwiń</Button> 
                    <Fade in={this.state.fadeIn}>
                        <ListGroupItemText>Maksymalna kwota pożyczki to 5000 zł.</ListGroupItemText>
                    </Fade>
                </ListGroupItem>
            </ListGroup>
        )
    }
}

export default QandA;