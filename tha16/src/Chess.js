import './Chess.css';

function Box() {
    return (
        <div className="box"></div>
    );
}

function Row() {
    return (
        <div className="row">
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </div>
    );
}

function Chess(props) {
    return (
        <div className="board">
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
        </div>
    );
}

export default Chess;