import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Container from "./Container";
import Row from "./Row";
import Column from "./ Column";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    answers: "",
    score:0,
    topScore:0,
    clicked: []
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleShuffle = () => {
    let randomFriends = this.shuffle(friends);
    this.setState({ friends: randomFriends });
  };

  //reload page w list of images randomly in different positions
  reloadPage() {
    this.setState({
      answers: "You guessed incorrectly!",
      score: 0,
      topScore: this.state.topScore,
      count: 0,
      clicked: []
    })
    // const friends = this.shuffle(friends);
    // this.setState({friends});
    // console.log("reloaded");
    this.handleShuffle();
  }

  handleClick = id => {
    // e.preventDefault();
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.reloadPage();
    }
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      answers: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      //display a modal
      this.setState({ answers: "You win!" });
    }
    this.handleShuffle();
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          answers={this.state.answers}
        />
        <Header>
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Header>
        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  removeFriend={this.removeFriend}
                  id={friend.id}
                  key={friend.id}
                  name={friend.name}
                  image={friend.image}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  reloadPage={this.reloadPage}
                  handleShuffle={this.handleShuffle}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
