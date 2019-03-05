import React from 'react';

import { Context } from '../../contextLibrary'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
  }
}

class PokemonHome extends React.Component {
  static contextType = Context;

  constructor() {
    super();
    this.state = {
      value: 0,
    }
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1,
    });
  }

  // incrementBy3 = () => {
  //   this.setState((prevState) => {
  //     return { value: prevState.value + 1 }
  //   });
  //   this.setState((prevState) => {
  //     return { value: prevState.value + 1 }
  //   });
  //   this.setState((prevState) => {
  //     return { value: prevState.value + 1 }
  //   });
  // }

  // incrementInContext = () => {
  //   this.context.execute('RANDOM_INCREMENT');
  // }

  render() {
    return (
      <div style={styles.container} >
        <img onClick={this.increment} src="https://res.cloudinary.com/teepublic/image/private/s--LMs-pmHt--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1515387356/production/designs/2262554_1.jpg" alt="Pokémon Logo" height="300" width="300" />
      </div>
    );
  }
}

export default PokemonHome;