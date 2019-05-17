import React from 'react';
import '../css/App.css';
import title_src from '../assets/title.png';

class App extends React.Component {
   constructor (probs) {
      super(probs);
      this.state = {
         searchResult: -1, // -1 means the initial state before searching,  0 means search fail, 1 means search success
         loading: false,
         place: '',
         temperature: NaN,
         rainProb: NaN,
         errorPlace: ''
      };
   }

   searchClick = () => {
      const input = document.getElementById('input');
      const place = input.value;
      this.fetchData(place);
      input.value = '';
   }

   handleEnter = (e) => {
      if (e.keyCode === 13 && e.target.value!== '') {
         const place = e.target.value;
         this.fetchData(place);
         e.target.value = '';
      }
   }

   fetchData = (place) => {
      this.setState({ loading: true })

      fetch('/weather?search=' + place)
      .then(response => response.json())
      .then(json => {
         if (json.error) {
            this.setState({
               loading: false,
               searchResult: 0,
               place: '',
               temperature: NaN,
               rainProb: NaN,
               errorPlace: place
            })
         }
         else {
            this.setState({
               loading: false,
               searchResult: 1,
               place: json.place,
               temperature: json.temperature,
               rainProb: json.rainProb
            })
         }
      })
      .catch(error => console.log(error) );
   }

   render () {
      let show_result = null;

      if (this.state.loading) {
         show_result = <h2> Loading... </h2>
      }
      else if (this.state.searchResult === 0) {
         show_result =
            <div>
               <h2> Search Fail !!!</h2>
               <p> no such place: <b>{ this.state.errorPlace } </b> </p>
            </div>;
      } 
      else if (this.state.searchResult === 1) {
         show_result = <div>
            <h3> Current Weather </h3>
            <p> <b>Place</b>: { this.state.place } </p>
            <p> <b>Temperature</b>: { this.state.temperature }</p>
            <p> <b>Raining Probability</b>: { this.state.rainProb }</p>
         </div>;
      }

      const googleMap_src = 'https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q='+ this.state.place +'&z=16&output=embed&t='
      return(
         <div className="weather-container">
            <div className="weather-title">
               <img className="weather-title_img" src={ title_src }></img>
               <h2 className="weather-title_text" > My Weather APP </h2>
            </div>
            <div className="weather-main">
               <div className="weather-search">
                  <input className="weather-search_input" placeholder="place you want to search..." id="input" onKeyUp={ this.handleEnter }></input>
                  <button className="weather-wearch_button" onClick={ this.searchClick } > search </button>
               </div>
               <div className="weather-show">
                  { show_result }
               </div>
            </div>
            <iframe width='100%' height='500' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src={ googleMap_src }></iframe>
         </div>
      );
   }
}

export default App;