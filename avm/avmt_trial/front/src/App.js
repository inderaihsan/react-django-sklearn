import logo from './logo.svg';
import './App.css'; 
import NavScrollExample from './navbar'
// import { Navbar } from 'react-bootstrap'; 
// import { Carousel } from 'react-bootstrap'; 
import IndividualIntervalsExample  from './carousel';
import { Form, Table, Button, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'; 
import {useForm} from 'react-hook-form' 
import axios from 'axios';
import GridComplexExample from './formgridtest';

function App() {
  const [feature_input, set_feature_input] = useState([])  
  const [prediction, set_prediction] = useState([])

  const get_feature = () => { 
    axios.get('http://127.0.0.1:8000/avm/test/')
    .then(response => {
      const feature = response.data;
      set_feature_input(feature);
      console.log(feature_input)
    }) 
    .catch(err => {
      console.log(err)
    })
    } 

    const predict = (data) => { 
     axios.post('http://127.0.0.1:8000/avm/predict/',data) 
     .then(response =>{
      set_prediction(response.data)
      console.log(prediction)
     })
    }

    const {register : register , handleSubmit, setValue, control} = useForm({ 
      defaultValues : {
          bill_depth_mm : 40, 
          bill_length_mm : null, 
          flipper_length_mm : null,
          flipper_length_mm : null,
      }
    })      

    useEffect(()=> {
      get_feature()
    }, [])


  return ( 
    <>
      <NavScrollExample/>    
        <h1 className='title'>Penguin Classification</h1>
        <h4>&nbsp;</h4>
        <div className={'container'}>
          <div className={'row'}>
          <div className={'col-md-6'}> 
            <IndividualIntervalsExample/>  
          </div>
           <div className={'col-md-6'}> 
            <p className = 'text_penguin'>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which they catch with their bills and swallow it whole while swimming. A penguin has a spiny tongue and powerful jaws to grip slippery prey Since 1871, the Latin word Pinguinus has been used in scientific classification to name the genus of the great auk (Pinguinus impennis, meaning "penguin without flight feathers"),which became extinct in the mid-19th century. As confirmed by a 2004 genetic study, the genus Pinguinus belongs in the family of the auks (Alcidae), within the order of the Charadriiformes.

The birds currently known as penguins were discovered later and were so named by sailors because of their physical resemblance to the great auk. Despite this resemblance, however, they are not auks, and are not closely related to the great auk. They do not belong in the genus Pinguinus, and are not classified in the same family and order as the great auk. They were classified in 1831 by Charles Bonaparte in several distinct genera within the family Spheniscidae and order Sphenisciformes.</p>
          
<div className={'col-md-8'}>  

           </div>
          </div>
        </div>
        <h1 className='title'>ML Playground</h1>
        <h4>&nbsp;</h4>
        <div className={'container'}>
         <div className={'row'}>
         <div className={'col-md-4'}>  
         <Form onSubmit={handleSubmit(predict)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bill Length (mm)</Form.Label>
            <Form.Control type="text" placeholder="Enter Bill Length" {...register('bill_length_mm')}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <Form.Label>Bill Depth (mm)</Form.Label>
                <Form.Control type="text" placeholder="Enter Bill Depth" {...register('bill_depth_mm')} />
                  </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <Form.Label>Flipper Length (mm)</Form.Label>
                <Form.Control type="text" placeholder="Enter FLipper Lenght" {...register('flipper_length_mm')} />
                  </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Body Mass (g)</Form.Label>
                <Form.Control type="text" placeholder="Enter Body Mass" {...register('body_mass_g')}/>
                  </Form.Group>
      <Button variant="primary" type="submit">
        Predict!
      </Button>
    </Form>
    </div> 
  </div>
</div>
    </div>

    </>
  
  );
}

export default App;
