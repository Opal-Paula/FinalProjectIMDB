import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Col,
    Row,
    Button
} from 'reactstrap';


import DetailsButton from "./detailsBtn";

//used on Homepage to display the first 10 recent movies
class CarouselMovie extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }  

    render() {
        if (!this.props.items) {
            return (
                <div>Loading ...</div>
            );
        }
        const { activeIndex } = this.state;
        const slides = this.props.items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <Row className="row-movies-recent">
                        <Col xs="9" sm="6" md="6" lg="4">
                            <img className="poster" src={item.src} alt={item.altText} />
                        </Col>
                        <Col xs="9" sm="9" md="4" lg="4">
                            <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
                            <DetailsButton item={item.id} cs={'btn-mv btn-details'} />
                            <Button color="primary" data-id={item.id} className="btn-mv add-recent">Add to collection</Button>
                        </Col>
                    </Row>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default CarouselMovie;