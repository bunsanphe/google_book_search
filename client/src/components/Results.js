import React from "react";
import {Card} from "react-bootstrap";

export const Result = () => {
    return (
        
    )
}


function Results(){
    const data =[{
        {
            authors: ["Suzanne Collins"]
            description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
            image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
            title: "The Hunger Games"
          }
    }]
    return (
        <Card style={{width: "1&rem"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>
                    Results
                </Card.Title>
                {data.map(item => <Result book = {item}/>)}
            </Card.Body>
        </Card>
    )
}