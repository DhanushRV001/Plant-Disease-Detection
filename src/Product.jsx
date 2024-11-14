import React, { useState } from 'react';
import img from './img/images copy.jpg';
import './views/products.css';
import shop1 from './img/shop1.jpg'
import shop2 from './img/shop2.jpg'
import shop3 from './img/shop3.jpg'
import shop4 from './img/shop4.jpg'
import product2 from './img/no1.jpg'

const Product = () => {
  const [chatbotResponse, setChatbotResponse] = useState('');
  const [query, setQuery] = useState('');

  const handleGetProductClick = async () => {
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      setChatbotResponse(data.response);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    }
  };

  return (
    <div className='product_wraper '>
       <div className="design_container">
        <div className="design"><h1>Near By shops</h1></div>
       
       </div>
      <div className="column_container">
    <div className="column">
      <div className="imgbox">
      <img src={shop1} alt="img" />
      </div>
      <p><b>Address:</b> Shop No. 3, Vysial St, Oppanakara St, Prakasam, Town Hall, Coimbatore, Tamil Nadu 641001 <br /><b>Phone:</b> 0422 239 0962</p>
    </div>
    <div className="column">
    <div className="imgbox">
    <img src={shop2} alt="img" />
    </div>
      <p><b>Address:</b> 3rd Floor, Tristar Tower, 657, Avinashi Rd, Coimbatore, Tamil Nadu 641037<br />
         <b>Phone:</b> 092445 42225</p>
    </div>
    <div className="column">
   <div className="imgbox">
   <img src={shop3} alt="img" />
   </div>
      <p><b>Address:</b> NO: 14, Pudur Main Rd, Peelamedu, Peelamedu Pudur, Masakalipalayam, Coimbatore, Tamil Nadu 641004<br />
         <b>Areas served:</b> Coimbatore<br /><b>Phone:</b> 099949 94429</p>
    </div>
    <div className="column">
    <div className="imgbox">
    <img src={shop4} alt="img" />
    </div>
      <p><b>Address:</b> 1C, Rajaji Nagar P.N.Pudur, behind Bimetal Bearing, Coimbatore, Tamil Nadu 641041<br />
         <b>Areas served:</b> Coimbatore and nearby areas<br /> Phone: 094890 00641</p>
    </div>
  </div>
  <div className="fullcontainer">
  <div className="product_product_container">
        <div className="product_producttitle">
          <h1>Tomato mosaic virus Product</h1>
        </div>
        <div className="product_productlist">
          <img src={img} alt="no img" />
          <div className="product_description">
            <p>
            V-BIND is a viricide developed by Vanproz Agrovet, designed to combat viral diseases in plants.
It is a mixture of extracts of plants having medicinal properties.
It is made from medicinal extracts and oil of herbs. V-Bind is very effective to prevent and cure all kinds of viral disease.
<br /> <br /> <b>250 ML</b>
            </p>
            <button onClick={handleGetProductClick}>Get Product</button>
          </div>
        </div>
      </div>
      <div className="product_product_container">
        <div className="product_producttitle">
          <h1>Tomato bacterial spot Product</h1>
        </div>
        <div className="product_productlist">
          <img src={product2} alt="no1 img" />
          <div className="product_description">
            <p>
            Actigard 50 WG is a chemical product used in agriculture primarily as a
            plant defense activator. Its active ingredient is acibenzolar-S-methyl
            enhancing its ability to resist various stresses such as 
            When applied to plants, it triggers the production of defense-related proteins, enzymes, and other compounds that help strengthen the plant's immune system.
<br /> <br /> <b>250 ML</b>
            </p>
            <button onClick={handleGetProductClick}>Get Product</button>
          </div>
        </div>
      </div>
     </div>
     <div className="tips_container">
     <div className="tips">
          <h2>Tips for Preventing Tomato Diseases:</h2>
          <ul>
            <li><b>Crop Rotation:</b>  Rotate the location of your tomato plants each year to prevent the buildup of soil-borne diseases. Avoid planting tomatoes in the same spot where they were planted the previous year, as this can reduce the risk of diseases such as bacterial wilt and fungal infections.</li><br />
            <li><b>Spacing: </b>Ensure proper spacing between tomato plants to promote good air circulation. Crowded plants are more prone to diseases like blight due to increased humidity and reduced airflow. Follow the recommended spacing guidelines for the specific variety you're growing.</li><br />
            <li><b> Watering Practices: </b> Water your tomato plants at the base rather than overhead to prevent the spread of fungal diseases like early blight and late blight. Water in the morning to allow the foliage to dry quickly, which helps prevent the development of fungal spores.</li><br />
            <li><b> Sanitation: </b>Regularly remove any diseased or yellowing leaves from your tomato plants. Promptly dispose of any affected plant material to prevent the spread of diseases. Clean your gardening tools, such as pruners and stakes, with a disinfectant solution to avoid transmitting pathogens between plants.</li><br />
            <li><b> Mulching: </b>Apply a layer of organic mulch, such as straw or shredded leaves, around the base of your tomato plants. Mulch helps conserve soil moisture, suppresses weed growth, and prevents soil-borne diseases from splashing onto the foliage. Just ensure the mulch is not too close to the plant stems to avoid creating a favorable environment for pests and diseases.</li><br />
            <li><b> Disease-resistant Varieties: </b>Choose tomato varieties that are resistant to common diseases prevalent in your area. Many modern tomato cultivars have been bred for resistance to diseases like verticillium wilt, fusarium wilt, and various strains of blight. Planting resistant varieties can significantly reduce the risk of disease outbreaks in your garden</li><br />
          </ul>
        </div>
        <div className="tips">
          <h2>User Manual:</h2>
          <ul>
            <li><b>Read the Label:</b> Always carefully read and follow the instructions on the
product label. The label provides important information on proper handling,
mixing, application rates, safety precautions, and first aid measures.</li><br />
            <li><b>Protective Gear:</b> Wear appropriate personal protective equipment (PPE) such
as long-sleeved shirts, long pants, chemical-resistant gloves, goggles, and a
respirator if required. PPE helps minimize exposure to the pesticide.
</li><br />
            <li><b>Mixing and Handling:</b> Mix and handle the pesticide in well-ventilated areas
away from water sources, food, and animal feed. Use dedicated equipment for
pesticide mixing and application to prevent contamination.</li><br />
            <li><b>Application Equipment:</b> Use calibrated equipment for accurate application
and to avoid overuse. Maintain and clean application equipment regularly to
prevent clogs or malfunctions</li><br />
            <li><b>Timing and Weather Conditions:</b> Apply pesticides when weather conditions
are suitable (e.g., low wind speed) to minimize drift and maximize
effectiveness. Avoid application during windy or rainy conditions.</li><br />
            <li><b>Application Technique:</b> Apply the pesticide according to recommended rates
and methods. Ensure thorough coverage of the target area while minimizing
off-target drift</li><br />
            <li><b>Storage and Disposal:</b> Store pesticides in their original containers in a locked
storage area away from children, pets, and food products. Dispose of empty
containers and unused pesticides according to local regulations.</li><br />
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Product;
