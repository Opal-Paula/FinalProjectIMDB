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
import { movieDetails } from "../actions";
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';

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
    handleClick = (e) => {
        console.log(e.target.getAttribute("data-id"));
        this.props.movieDetails(e.target.getAttribute("data-id"));

        // this.props.selectMovie(this.props.movie);
        // window.location = 'detail.html?id=' + e.target.getAttribute('data-id');
    }
   

    render() {
        if (!this.props.items) {
            return (
                <div>Loading ...</div>
            );
        }
        // let a = this.props.details.map(value => (console.log(value)));
        const { activeIndex } = this.state;
        const slides = this.props.items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <Row className="row-movies-recent">
                        <Col sm="4" md="6" lg="4">
                            <img className="poster" src={item.src} alt={item.altText} />
                        </Col>
                        <Col sm="4" md="4" lg="4">
                            <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
                            <Button color="secondary" data-id={item.id} className="btn-mv btn-details" onClick={this.handleClick.bind(this)}>Details</Button>
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
// function ceva(){
   
// }

function mapDispatchToProps(dispatch) {
    // console.log('dd',dispatch, {movie})
    return bindActionCreators({ movieDetails }, dispatch);
}

function mapStateToProps(state) {
    console.warn('State', state);
    return {
        details : state.details
    };
}


export default connect(null, mapDispatchToProps)(CarouselMovie);