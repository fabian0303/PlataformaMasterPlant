import React from 'react';
import { useFormatMessage } from 'hooks';
import GridLayout from 'react-grid-layout';
import GaugeChart from 'react-gauge-chart';
import { toastr } from 'react-redux-toastr';
import ReactSpeedometer from "react-d3-speedometer";

// import Chart from "react-google-charts";

import {
  fetchCollection,
} from '../../state/api';


require('../../../node_modules/react-grid-layout/css/styles.css');
require('../../../node_modules/react-resizable/css/styles.css');

let nave;
let valor;

async function fetchNave() {

  try {
    nave = await fetchCollection("nave1");
  } catch (error) {
    toastr.error('', error);
  }

  console.log(nave[0].peso_promedio);
  valor = nave[0].peso_promedio;

}

fetchNave();


const chartStyle = {
  height: 50,
};

const layout = [
  { i: 'nave1', x: 0, y: 0, w: 8, h: 6, },
  { i: 'nave2', x: 8, y: 0, w: 8, h: 6 },
  { i: 'nave3', x: 16, y: 0, w: 8, h: 6 },
  { i: 'nave4', x: 24, y: 0, w: 8, h: 6 },
  { i: 'nave5', x: 32, y: 0, w: 8, h: 6 },
  { i: 'nave6', x: 0, y: 16, w: 8, h: 6, },
  { i: 'nave7', x: 8, y: 16, w: 8, h: 6, },
  { i: 'nave8', x: 16, y: 16, w: 8, h: 6, },
];

/*
const layout = [
  {i: 'nave1', x: 0, y: 0, w: 4, h: 2,},
  {i: 'nave2', x: 4, y: 0, w: 4, h: 2,},
  {i: 'nave3', x: 8, y: 0, w: 4, h: 2},
  {i: 'nave4', x: 12, y: 0, w: 4, h: 2},
  {i: 'nave5', x: 16, y: 0, w: 4, h: 2},
  {i: 'nave6', x: 20, y: 0, w: 4, h: 2},
  {i: 'nave7', x: 24, y: 0, w: 4, h: 2},
  {i: 'nave8', x: 28, y: 0, w: 4, h: 2},
  {i: 'nave9', x: 32, y: 0, w: 4, h: 2},
  {i: 'nave10', x: 36, y: 0, w:4, h: 2},
  {i: 'nave11', x: 0, y: 2, w: 4, h: 2},
  {i: 'nave12', x: 4, y: 2, w: 4, h: 2},
  {i: 'nave13', x: 8, y: 2, w: 4, h: 2},
  {i: 'nave14', x: 12, y: 2, w: 4, h: 2},
  {i: 'nave15', x: 16, y: 2, w: 4, h: 2},
  {i: 'nave16', x: 20, y: 2, w: 4, h: 2},
  {i: 'nave17', x: 24, y: 2, w: 4, h: 2},
  {i: 'nave18', x: 28, y: 2, w: 4, h: 2},
  {i: 'nave19', x: 32, y: 2, w: 4, h: 2},
  {i: 'nave20', x: 36, y: 2, w: 4, h: 2},
  {i: 'nave21', x: 0, y: 4, w: 4, h: 2},
  {i: 'nave22', x: 4, y: 4, w: 4, h: 2},
  {i: 'nave23', x: 8, y: 4, w: 4, h: 2},
  {i: 'nave24', x: 12, y: 4, w: 4, h: 2},
  {i: 'nave25', x: 16, y: 4, w: 4, h: 2},
  {i: 'nave26', x: 20, y: 4, w: 4, h: 2},
  {i: 'nave27', x: 24, y: 4, w: 4, h: 2},
  {i: 'nave28', x: 28, y: 4, w: 4, h: 2},
  {i: 'nave29', x: 32, y: 4, w: 4, h: 2},
  {i: 'nave30', x: 36, y: 4, w: 4, h: 2},
  {i: 'nave31', x: 0, y: 4, w: 4, h: 2},
  {i: 'nave32', x: 4, y: 6, w: 4, h: 2},
  {i: 'nave33', x: 8, y: 6, w: 4, h: 2},
  {i: 'nave34', x: 12, y: 6, w: 4, h: 2},
  {i: 'nave35', x: 16, y: 6, w: 4, h: 2},
  {i: 'nave36', x: 20, y: 6, w: 4, h: 2},
  {i: 'nave37', x: 24, y: 6, w: 4, h: 2},
  {i: 'nave38', x: 28, y: 6, w: 4, h: 2},
  {i: 'nave39', x: 32, y: 6, w: 4, h: 2},
  {i: 'nave40', x: 36, y: 6, w: 4, h: 2},
]; */




const Home = () => (
  <>

    <section className="hero is-hero-bar">
      <div className="hero-body">
        <h1 className="title">{useFormatMessage('Home.home')}</h1>
      </div>
    </section>



    <GridLayout
      className="layout"
      layout={layout}
      cols={40}
      rowHeight={25}
      width={1500}>
      <div key="nave1">
        <ReactSpeedometer
          currentValueText="Nave 1"
          value={valor}
          segments={5}
          segmentColors={[
            "#bf616a",
            "#d08770",
            "#ebcb8b",
            "#a3be8c",
            "#b48ead",
          ]}
        // startColor will be ignored
        // endColor will be ignored
        />

      </div>
      <div key="nave2">
        <ReactSpeedometer
          value={777}
          currentValueText="Nave 2"
          customSegmentLabels={[
            {
              text: "Very Bad",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "Bad",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "Ok",
              position: "INSIDE",
              color: "#555",
              fontSize: "19px",
            },
            {
              text: "Good",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "Very Good",
              position: "INSIDE",
              color: "#555",
            },
          ]}
        />


      </div>
      <div key="nave3">
        <ReactSpeedometer
          currentValueText="Nave 3"
          value={333}
          segments={5}
          segmentColors={[
            "#bf616a",
            "#d08770",
            "#ebcb8b",
            "#a3be8c",
            "#b48ead",
          ]}
        // startColor will be ignored
        // endColor will be ignored
        />

      </div>


      <div key="nave4">
        <ReactSpeedometer
          currentValueText="Nave 4"
          maxValue={500}
          value={473}
          needleColor="red"
          startColor="green"
          segments={10}
          endColor="blue"
        />
      </div>

      <div key="nave5">
        <ReactSpeedometer
          customSegmentStops={[0, 500, 750, 900, 1000]}
          segmentColors={["firebrick", "tomato", "gold", "limegreen"]}
          value={333}
        />
      </div>


      <div key="nave6">

        <div style={{
          width: "300px",
          height: "200px",
          background: "#EFEFEF"
        }}>
          <ReactSpeedometer
            fluidWidth={true}
            minValue={0}
            maxValue={1000}
            value={473}
            needleColor="steelblue"
          />
        </div>

      </div>


      <div key="nave7">
        <ReactSpeedometer
          value={333}
          needleColor="steelblue"
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
        />

      </div>

      <div key="nave8"> 

      <ReactSpeedometer
  width={200}
  height={200}
/>
<ReactSpeedometer
  forceRender={true}
  segments={15}
  width={500}
  height={500}
/>


      </div>

  
      {/* 
    
    
   
   
    
    <div key="nave9">Nave 9</div>
    <div key="nave10">Nave 10</div>
    <div key="nave11">Nave 11</div>
    <div key="nave12">Nave 12</div>
    <div key="nave13">Nave 13</div>
    <div key="nave14">Nave 14</div>
    <div key="nave15">Nave 15</div>
    <div key="nave16">Nave 16</div>
    <div key="nave17">Nave 17</div>
    <div key="nave18">Nave 18</div>
    <div key="nave19">Nave 19</div>
    <div key="nave20">Nave 20</div>
    <div key="nave21">Nave 21</div>
    <div key="nave22">Nave 22</div>
    <div key="nave23">Nave 23</div>
    <div key="nave24">Nave 24</div>
    <div key="nave25">Nave 25</div>
    <div key="nave26">Nave 26</div>
    <div key="nave27">Nave 27</div>
    <div key="nave28">Nave 28</div>
    <div key="nave29">Nave 29</div>
    <div key="nave30">Nave 30</div>
    <div key="nave31">Nave 31</div>
    <div key="nave32">Nave 32</div>
    <div key="nave33">Nave 33</div>
    <div key="nave34">Nave 34</div>
    <div key="nave35">Nave 35</div>
    <div key="nave36">Nave 36</div>
    <div key="nave37">Nave 37</div>
    <div key="nave38">Nave 38</div>
    <div key="nave39">Nave 39</div>
    <div key="nave40">Nave 40</div>

    */ }

    </GridLayout>

  </>
);





export default Home;
