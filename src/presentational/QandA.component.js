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

import QandAItem from './QandA.item.component';
// import itemsList from './itemsList.json';
import '../style/QandA.css';

const itemsList = [
    {
        "id": 1,
        "itemHead": "Kto może wnioskować o pożyczkę",
        "itemText": "Pożyczka jest przeznaczona dla wszystkich osób, które: posiadają stałe miesięczne udokumentowane dochody, wiek 25-80 lat, brak negatywnej historii kredytowej w BIK, KRD, BIG InfoMonitor i innych"
    },
    {
        "id": 2,
        "itemHead": "Jakie jest oprocentowanie pożyczki?",
        "itemText": "Wysokość odsetek określa umowa, przy czym oprocentowanie nie może być wyższe niż dwukrotność odsetek ustawowych. Informację na temat aktualnej wysokości oprocentowania pożyczki znajdziesz tutaj."
    },
    {
        "id": 3,
        "itemHead": "Co to jest RRSO?",
        "itemText": `RRSO, czyli Roczna Rzeczywista Stopa Oprocentowania wyliczona jest zgodnie ze wzorem zamieszczonym w Załączniku do Ustawy o Kredycie Konsumenckim z dnia 12 maja 2011 r. 
                    Prawo nakłada obowiązek informowania Klientów o wielkości stopy RRSO. 
                    Wielkość ta zależy w dużej mierze od okresu na jaki udzielana jest pożyczka. Zapraszamy do zapoznania się z artykułem publikowanym w Gazecie Bankowej oraz Rzeczpospolitej na temat RRSO. 
                    Artykuł ten wyjaśnia błędne postrzeganie RRSO oraz tłumaczy dlaczego przy takim samym koszcie pożyczki a różnych okresach spłaty następuje nieuzasadniony wzrost wartości stopy RRSO. Więcej informacji znajdziesz tutaj.`
    },
    {
        "id": 4,
        "itemHead": "Czy mogę odstąpić od Umowy pożyczki?",
        "itemText": "Niestety nie."
    },
    {
        "id": 5,
        "itemHead": "Jaka jest maksymalna kwota pożyczki?",
        "itemText": "Maksymalna kwota pożyczki to 5000 zł."
    }
]


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
            <React.Fragment>                           
                <Row className="row-qAndA">
                    <Col>
                        <h2>Pytania i odpowiedzi</h2>
                    </Col>
                </Row>             
                <ListGroup className="item-qAndA" lg={{size:10, offset:1}}>
                    {   
                        itemsList.map(
                            (item) => <QandAItem item={item} key={item.id}/>
                        )    
                    }
                </ListGroup>
            </React.Fragment>
        )
    }
}

export default QandA;