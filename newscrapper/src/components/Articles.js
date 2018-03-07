import React, {Component} from "react";
import Col from "./Col";
import Row from "./Row";
import Container from "./Container";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Panel from "./Panel";
import ArticleDetails from "./ArticleDetails";
import Scrapper from "../utils/Scrapper";
import {Panel}  from "react-bootstrap";


class Articles extends Component {
    state = {
        result: [],
        saved: ""
    };

    handleSaveButton = event => {
        //Get save button switch value
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col size="sm-12">
                        <Header/>
                    </Col>
                </Row>
                <Row style={{'marginTop': '80px'}}>
                    <Col size="sm-12">
                        <Jumbotron title="C# Corner News Scrapper"/>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                    <Panel
                        heading={this.state.result.Title || "No Article Scrapped"}
                    >
                    <ArticleDetails
                        link={this.state.result.Link || ""}
                        author={this.state.result.Author || ""}
                        saved={this.state.result.Saved || ""}
                        comment={this.state.result.Comment || ""}
                      />
                    </Panel>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Articles;