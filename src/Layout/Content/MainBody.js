import * as React from "react";
import Cards from "./Cards";
import { CssBaseline, Container, Grid, Card } from "@mui/material";
import axios from "axios";

export default class MainBody extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {

    var options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country/code",
      params: { code: "it" },
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "7db4cb5b77msh702953945168fd4p1e8722jsncd8f82e60c2e",
      },
    };

    const $this = this;

    axios
      .get('https://animechan.vercel.app/api/quotes')
      .then(response => 
        {
            const posts = response.data;
            console.log(posts);
        $this.setState({posts:response.data});
        
        }
      )
      .catch(function (error) {
        console.error(error);
      });
  }

  cardData(){
      return this.state.posts.map((data,i) => {
          return <Grid item xs={6}>
              <Cards obj={data} />
          </Grid>
      })
  }


  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">

          <Grid container spacing={6}>
            
            {this.cardData()}

          </Grid>

        </Container>
      </React.Fragment>
    );
  }
}
