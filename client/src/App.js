import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    highScore: 0
  };

  resetClick = () => {
    const newfriends = this.state.friends.map(friend => {

      friend.clicked = false;

      return friend
    })

    this.setState({
      friends: newfriends
    })
  }

  removeFriend = id => {

    console.log("id", id)
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const newArray = this.state.friends.map(friend => {

      if (id === friend.id) {

        if (friend.clicked) {
          this.setState({
            currentScore: 0,
          })
          this.resetClick()
        }
        else {

          if (this.state.currentScore >= this.state.highScore) {
            this.setState({
              currentScore: this.state.currentScore + 1,
              highScore: this.state.highScore + 1
            })
          }
          else {
            this.setState({
              currentScore: this.state.currentScore + 1
            })

          }

        }

        if (!friend.clicked) {
          friend.clicked = true;
        }

      }

      return friend;

    });



    console.log(friends)
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: newArray });


    const newShuffled = this.state.friends.sort(() => Math.random() - 0.5)


    this.setState({
      friends: newShuffled
    })

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Title    >Friends List</Title>

        Current Score: {this.state.currentScore} High Score: {this.state.highScore}

        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
