import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'
import React from 'react'
import '../App.css';


export default function Card1() {
    return (
        <div className="Card">
            <div className="card1">                
            <Card style={{ width: '18rem', backgroundColor:"#7FFFD4" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/49/22/6c/49226cc2be5cb537218993fa89d075a8.jpg" height="400px" />
                <Card.Body>
                    <Card.Title>Gladiator</Card.Title>
                    <Card.Text>
                    Gladiator revisite le genre du péplum, dont les derniers films majeurs avaient été réalisés dans les années 1960. 
                    Le film ne se fonde pas sur des événements réels mais reprend les noms 
                    et certains traits de personnalité de l'empereur Marc Aurèle et de ses enfants Commode et Lucilla.
                    </Card.Text>
                    <a href="https://fr.wikipedia.org/wiki/Gladiator_(film,_2000)"> <Button variant="primary">watch</Button> </a>
                </Card.Body>
                </Card>
             </div>
             <div>
            <Card style={{ width: '18rem' , backgroundColor:"#7FFFD4"}}>
                <Card.Img variant="top" src="https://img-4.linternaute.com/qN-WR7DLLyCdwzybd_TCAnVsrpE=/1240x/c6bfd8570c3a4cdf8983a07bc8c67bb0/ccmcms-linternaute/135211.jpg" height="400px" />
                <Card.Body>
                    <Card.Title>Titanic</Card.Title>
                    <Card.Text>
                    Titanic est un film dramatique américain écrit, produit et réalisé par James Cameron, sorti en 1997.

                    Intégrant à la fois des aspects historiques et fictionnels, le film est basé sur
                      le récit du naufrage du RMS Titanic et met en vedette Leonardo DiCaprio et Kate Winslet.
                    </Card.Text>
                    <a href="https://fr.wikipedia.org/wiki/Titanic_(film,_1997)"> <Button variant="secondary"> watch </Button> </a>
                </Card.Body>
                </Card>
             </div>
             <div>
            <Card style={{ width: '18rem', backgroundColor:"#7FFFD4" }}>
                <Card.Img variant="top" src="https://www.cinehorizons.net/sites/default/files/affiches/1347450524-lion.jpg" height="400px"/>
                <Card.Body>
                    <Card.Title>Lion</Card.Title>
                    <Card.Text>
                    Lion est un film américano-britannico-australien réalisé par Garth Davis, sorti en 2016.
                    Il s'agit de l'adaptation cinématographique du roman Je voulais retrouver ma mère de Saroo Brierley. 
                    Le film est basé sur une histoire vraie
                    </Card.Text>
                    <a href="https://fr.wikipedia.org/wiki/Lion_(film,_2016)"> <Button variant="success"> watch </Button> </a>
                </Card.Body>
                </Card>
             </div><div>
            <Card style={{ width: '18rem', backgroundColor:"#7FFFD4" }}>
                <Card.Img variant="top" src="https://www.telerama.fr/sites/tr_master/files/2f525c5a-886a-426f-9672-9b11c409a3d9_2.jpg" height="400px" />
                <Card.Body>
                    <Card.Title>Kung fu panda</Card.Title>
                    <Card.Text>
                    Kung Fu Panda est un film d'animation américain produit par DreamWorks Animation, réalisé par Mark Osborne et John Stevenson, sorti en 2008.
                    </Card.Text>
                   <a href="https://fr.wikipedia.org/wiki/Kung_Fu_Panda"> <Button variant="light"> watch </Button> </a> 
                </Card.Body>
                </Card>
             </div><div>
            <Card style={{ width: '18rem' , backgroundColor:"#7FFFD4"}}>
                <Card.Img variant="top" src="https://img4.cdn.cinoche.com/images/02251149da2fa3abfa35b8c04be3c97d.jpg" height="400px"/>
                <Card.Body>
                    <Card.Title>Star wars</Card.Title>
                    <Card.Text>
                    Star Wars, en français La Guerre des Etoiles, est un univers de science-fiction et fantasy inventé par 
                    le réalisateur Georges Lucas. A l’origine, cette saga est une trilogie cinématographique sortie entre 1977 et 1983,
                     mais au regard de son succès le réalisateur a poursuivi son aventure. 
                    </Card.Text>
                     <a href="https://fr.wikipedia.org/wiki/Star_Wars"> <Button variant="warning">watch </Button> </a>
                </Card.Body>
                </Card>
             </div>
        </div>
    )
}
