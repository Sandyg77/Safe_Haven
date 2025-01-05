import React from "react";
import { useParams } from "react-router-dom";
import propertyData from "../data/properties.json";
import ImageGallery from "react-image-gallery";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-tabs/style/react-tabs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DetailedProperty = () => {
  const { id } = useParams(); // Extract the property ID from the URL
  const property = propertyData.properties.find((prop) => prop.id === id);

  if (!property) {
    return <div>Property not found!</div>;
  }

  // Prepare image data for the ImageGallery component
  const images = property.images.map((image) => ({
    original: `/${image}`,
    thumbnail: `/${image}`,
  }));

  return (
    <div>
      {" "}
      <Navbar />
      <div className="container mt-4" style={{ marginBottom: "50px" }}>
        <h1>{property.type}</h1>
        <p>
          <b>Price:</b> ${property.price}
        </p>
        <p>
          <b>Location:</b> {property.location}
        </p>
        <p>
          <b>Tenure:</b> {property.tenure}
        </p>
        <p>
          <b>Added:</b> {property.added.day} {property.added.month}{" "}
          {property.added.year}
        </p>
        <ImageGallery items={images} showPlayButton={false} autoPlay={false} />

        {/* Tabs */}
        <Tabs>
          <TabList>
            {" "}
            {/* Displays the clickable tabs  */}
            <Tab>Description</Tab>
            <Tab>Floorplan</Tab>
            <Tab>Google Map</Tab>
          </TabList>

          <TabPanel>
            {" "}
            {/*Panels corresponding to each tab */}
            <h2>Property Description</h2>
            <p>{property.description}</p>
          </TabPanel>

          <TabPanel>
            <h2>Floorplan</h2>
            {property.floorplan ? (
              <img
                src={`/${property.floorplan}`}
                alt="Floorplan"
                style={{ width: "100%", maxWidth: "600px" }}
              />
            ) : (
              <p>Floorplan not available.</p>
            )}
          </TabPanel>

          <TabPanel>
            <h2>Location</h2>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                // Ensuring the unique location for each propertya and encode location to make it URL-safe
                property.location
              )}&output=embed`}
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default DetailedProperty;
